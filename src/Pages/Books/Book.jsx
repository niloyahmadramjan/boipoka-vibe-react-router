import React from "react";
import { Link, Links, NavLink } from "react-router";

const Book = ({ book }) => {
  const { bookId,bookName, author, image, tags } = book;
  

  return (
    <> <NavLink to={`/booksDetailts/${bookId}`}>
    <div className="flex items-center mb-5 justify-center">
        <img src={image} alt="Book cover" className="w-40 object-contain" />
      </div>
      <section className="flex items-center justify-center">
        <div>
          <div className="flex gap-2 mb-3">
            <span className="bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full font-medium">
              Young Adult
            </span>
            <span className="bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full font-medium">
              Identity
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900">{bookName}</h3>

          {/* Author */}
          <p className="text-sm text-gray-500 mt-1">By : {author}</p>

          <hr className="my-3 border-dashed border-gray-300" />

          {/* Footer */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>{tags[0]}</span>
            <div className="flex items-center gap-1">
              <span>5.00</span>
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.75.75 0 011.04 0l2.122 2.122a.75.75 0 001.06 0l2.122-2.122a.75.75 0 011.06 1.06l-2.122 2.122a.75.75 0 000 1.06l2.122 2.122a.75.75 0 01-1.06 1.06l-2.122-2.122a.75.75 0 00-1.06 0l-2.122 2.122a.75.75 0 01-1.06-1.06l2.122-2.122a.75.75 0 000-1.06L11.48 4.56a.75.75 0 010-1.06z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
      </NavLink>
      </>
  );
};

export default Book;
