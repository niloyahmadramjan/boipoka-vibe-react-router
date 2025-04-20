import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToLocalStorage } from "../../../utility/DB/AddToDB";

const BooksDetails = () => {
  const {bookId} = useParams();
 const id = parseInt(bookId);
  const bookData = useLoaderData();
const signleBook = bookData.find(book => book.bookId === id);
const {bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = signleBook;

const handleMarkAsRead = id=>{

  addToLocalStorage(id)

}

  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    {/* Book Image */}
    <div className="bg-gray-100 rounded-xl p-5 flex justify-center">
      <img src={image} alt={bookName} className="w-60 object-contain" />
    </div>

    {/* Book Info */}
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-1">
        {bookName}
      </h2>
      <p className="text-sm text-gray-600 mb-1">By : {author}</p>
      <p className="text-sm text-gray-600">{category}</p>

      <hr className="my-4 border-gray-300" />

      <div className="mb-4">
        <h4 className="font-semibold mb-1">Review :</h4>
        <p className="text-sm text-gray-600 leading-relaxed">
          {review}
        </p>
      </div>

      {/* Tags */}
      <div className="mb-4">
        <span className="font-semibold text-sm mr-2">Tag</span>
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full font-medium mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>

      <hr className="my-4 border-gray-300" />

      {/* Details */}
      <ul className="space-y-2 text-sm text-gray-700">
        <li>
          <span className="font-medium">Number of Pages:</span> {totalPages}
        </li>
        <li>
          <span className="font-medium">Publisher:</span> {publisher}
        </li>
        <li>
          <span className="font-medium">Year of Publishing:</span> {yearOfPublishing}
        </li>
        <li>
          <span className="font-medium">Rating:</span> {rating}
        </li>
      </ul>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button onClick={()=>handleMarkAsRead(id)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm px-6 py-2 rounded font-medium">
          Read
        </button>
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm px-6 py-2 rounded font-medium">
          Wishlist
        </button>
      </div>
    </div>
  </div>
  );
};

export default BooksDetails;
