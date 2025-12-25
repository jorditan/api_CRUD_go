import type { Book } from '../types/book-interface'
import React from 'react'

const BookItem: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <div className="bg-neutral-primary-soft block max-w-sm min-w-md p-6 border border-default rounded-base shadow-xs">
      <a href="#">
        <img className="rounded-base" src="/docs/images/blog/image-1.jpg" alt="" />
      </a>
      <a href="#">
        <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">{book.title}</h5>
      </a>
      <p className="mb-6 text-body">Autor: {book.author}</p>
      <a href="#" className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
        Leer más
        <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
      </a>
    </div>
  )
}

export default BookItem
