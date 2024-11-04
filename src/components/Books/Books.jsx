import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect( () => {
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[]);

    console.log(books);

    return (
        <div>
            <h3 className="text-4xl text-center mb-20">Books</h3>
            <div className="grid md:grid-cols-3 place-items-center gap-6">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;