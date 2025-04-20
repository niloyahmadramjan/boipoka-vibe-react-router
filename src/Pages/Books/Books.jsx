import React from "react";
import Book from "./Book";

const Books = ({booksData}) => {
  // const [booksData, setBooksData] = useState([]);
  // useEffect(() => {
  //   fetch("booksData.json")
  //     .then((res) => res.json())
  //     .then((data) => setAllBooks(data));
  // }, []);

  return (
    <div>
      <div className="bg-white rounded-xl my-20 shadow-sm p-5 border border-gray-200">
        <div className="flex justify-center mb-4 text-black">
          <h1>Books</h1>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
          {
          booksData.map((book) => (
            <Book book={book} key={book.bookId}></Book>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Books;
