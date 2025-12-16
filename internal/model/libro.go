package model

/*Se usan tags para pasar a JSON y especificar como se va a llamar. También se puede hacer con XML*/

type Libro struct {
	ID     int    `json:"id"`
	Titulo string `json:"title"`
	Autor  string `json:"autor"`
}
