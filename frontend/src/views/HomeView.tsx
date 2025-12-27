import { useEffect, useState } from "react";
import type { Book } from "../types/book-interface";
import BookList from "../components/BookList";
import EmptyState from "./EmptyState";

const HomeView = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/books")
      .then((response) => response.json())
      .then((data: Book[]) => {
        console.log(data);
        setBooks(data);
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <section className="flex flex-col gap-4">
      {books.length === 0 ? <EmptyState /> : null}
      <BookList books={books} />
    </section>
  );
};

export default HomeView;
