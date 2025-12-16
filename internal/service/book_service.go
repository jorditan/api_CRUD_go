package service

import (
	"main/internal/model"
	"main/internal/store"
)

type Service struct {
	store store.Store
}

func New(s store.Store) *Service {
	return &Service{store: s}
}

func (s *Service) ObtenTodosLosLibros() ([]*model.Libro, error) {
	return s.store.GetAll()
}

func (s *Service) ObtenLibroPorId(id int) (*model.Libro, error) {
	return s.store.GetById(id)
}

func (s *Service) CrearLibro(libro model.Libro) (*model.Libro, error) {
	return s.store.Create(&libro)
}
