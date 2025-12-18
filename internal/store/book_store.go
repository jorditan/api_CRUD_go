// El paquete store representa la capa de acceso a datos (persistencia).
// Su única responsabilidad es comunicarse con la base de datos.
package store

import (
	// Paquete estándar de Go para trabajar con bases de datos SQL
	"database/sql"

	// Paquete interno que contiene los modelos de dominio.
	// En este caso, el struct Libro.
	"main/internal/model"
)

// -----------------------------
// INTERFAZ STORE
// -----------------------------

// Store define el contrato que cualquier implementación
// de acceso a datos para Libros debe cumplir.
//
// Gracias a esta interfaz:
// - Los handlers no dependen de SQL directamente
// - Se puede mockear fácilmente en tests
// - Se puede cambiar la implementación sin romper el resto del sistema
type Store interface {

	// GetAll devuelve todos los libros almacenados.
	// Retorna un slice de punteros a Libro o un error.
	GetAll() ([]*model.Libro, error)

	// GetById devuelve un libro por su ID.
	// Si no existe o hay error en la DB, devuelve error.
	GetById(id int) (*model.Libro, error)

	// Obtiene libros por un precio
	GetByPrice(price float32) ([]*model.Libro, error)

	// Create inserta un nuevo libro en la base de datos.
	// Devuelve el libro creado con su ID asignado.
	Create(libro *model.Libro) (*model.Libro, error)

	// Update modifica un libro existente.
	// Recibe el ID del libro a modificar y los nuevos datos.
	Update(id int, libro *model.Libro) (*model.Libro, error)

	// Delete elimina un libro por su ID.
	Delete(id int) error
}

// -----------------------------
// IMPLEMENTACIÓN CONCRETA
// -----------------------------

// store es la implementación concreta de la interfaz Store.
// Es privada (minúscula) para forzar el uso de la interfaz.
type store struct {
	// db mantiene la conexión a la base de datos
	db *sql.DB
}

// -----------------------------
// CONSTRUCTOR
// -----------------------------

// New crea una nueva instancia del store.
// Recibe la conexión a la base de datos ya inicializada.
//
// Devuelve la interfaz Store (no el struct concreto),
// lo cual es una buena práctica en Go.
func New(db *sql.DB) Store {
	return &store{db: db}
}

// -----------------------------
// GET ALL
// -----------------------------

// GetAll obtiene todos los libros de la base de datos.
func (s *store) GetAll() ([]*model.Libro, error) {

	// Consulta SQL para obtener todos los libros
	q := `SELECT id_book, title, author, price FROM book`

	// Ejecuta la consulta
	rows, err := s.db.Query(q)
	if err != nil {
		// Si ocurre un error, se retorna inmediatamente
		return nil, err
	}

	// Asegura que el cursor se cierre al salir de la función
	defer rows.Close()

	// Slice donde se almacenarán los libros
	var libros []*model.Libro

	// Itera sobre cada fila devuelta por la consulta
	for rows.Next() {

		// Se inicializa un nuevo Libro
		// Esto es CLAVE para evitar nil pointer dereference
		b := &model.Libro{}

		// Se copian las columnas de la fila a los campos del struct
		err := rows.Scan(&b.ID, &b.Titulo, &b.Autor, &b.Price)
		if err != nil {
			return nil, err
		}

		// Se agrega el libro al slice
		libros = append(libros, b)
	}

	// Se devuelve el slice completo
	return libros, nil
}

// -----------------------------
// GET BY ID
// -----------------------------

// GetById obtiene un libro específico por su ID.
func (s *store) GetById(id int) (*model.Libro, error) {

	// Consulta SQL con parámetro
	q := `SELECT id_book, title, author, price FROM book WHERE id = $1`

	// Se inicializa el struct donde se cargará el resultado
	libro := &model.Libro{}

	// QueryRow se usa cuando se espera una sola fila
	err := s.db.QueryRow(q, id).Scan(
		&libro.ID,
		&libro.Titulo,
		&libro.Autor,
	)

	if err != nil {
		// Puede ser sql.ErrNoRows u otro error
		return nil, err
	}

	return libro, nil
}

func (s *store) GetByPrice(price float32) ([]*model.Libro, error) {
	// Ejecuta la consulta
	q := `SELECT id_book, title, author, price FROM book WHERE price < $1`

	rows, err := s.db.Query(q, price)
	if err != nil {
		// Si ocurre un error, se retorna inmediatamente
		return nil, err
	}

	// Asegura que el cursor se cierre al salir de la función
	defer rows.Close()

	// Se inicializa el struct donde se cargará los resultados
	var libros []*model.Libro

	for rows.Next() {
		b := &model.Libro{}

		err := rows.Scan(&b.ID, &b.Titulo, &b.Autor, &b.Price)
		if err != nil {
			return nil, err
		}
		libros = append(libros, b)
	}

	return libros, nil
}

// -----------------------------
// CREATE
// -----------------------------

// Create inserta un nuevo libro en la base de datos.
func (s *store) Create(libro *model.Libro) (*model.Libro, error) {
	q := `
		INSERT INTO book (title, author, price)
		VALUES ($1, $2, $3)
		RETURNING id_book
	`

	err := s.db.QueryRow(
		q,
		libro.Titulo,
		libro.Autor,
		libro.Price,
	).Scan(&libro.ID)

	if err != nil {
		return nil, err
	}

	return libro, nil
}

// -----------------------------
// UPDATE
// -----------------------------

// Update modifica un libro existente.
func (s *store) Update(id int, libro *model.Libro) (*model.Libro, error) {

	// Consulta SQL de actualización
	q := `UPDATE books SET title = $1, author = $2 WHERE id_book = $3`

	// Ejecuta la actualización
	_, err := s.db.Exec(q, libro.Titulo, libro.Autor, id)
	if err != nil {
		return nil, err
	}

	// Se asegura que el ID del struct coincida
	libro.ID = id

	return libro, nil
}

// -----------------------------
// DELETE
// -----------------------------

// Delete elimina un libro por su ID.
func (s *store) Delete(id int) error {

	// Consulta SQL de eliminación
	q := `DELETE FROM books WHERE id_book = $1`

	// Ejecuta el delete
	_, err := s.db.Exec(q, id)

	// Se devuelve el error directamente (nil si todo salió bien)
	return err
}
