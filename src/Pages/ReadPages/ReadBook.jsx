import React from "react";

const ReadBook = ({ book }) => {
  const {
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col sm:flex-row bg-white rounded-xl shadow-md overflow-hidden">
        {/* Book Cover */}
        <div className="flex-shrink-0 p-4">
          <img
            src={image}
            alt="Annotated Texas Family Code"
            className="w-32 h-48 object-cover rounded"
          />
        </div>

        {/* Book Details */}
        <div className="p-4 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{bookName}</h2>
            <p className="text-sm text-gray-600 mt-1">By : {author}</p>

            {/* Tags */}
            <div className="mt-2 flex gap-2">
              {tags.map((tag,index) => (
                <span key={index} className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Publishing Info */}
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-1">
                <span>📍</span>
                <span>Year of Publishing: {yearOfPublishing}</span>
              </div>
              <div className="flex items-center gap-1">
                <span>👤</span>
                <span>Publisher: {publisher}</span>
              </div>
              <div className="flex items-center gap-1">
                <span>📄</span>
                <span>Page {totalPages}</span>
              </div>
            </div>

            {/* Category and Rating */}
            <div className=" mt-4 flex gap-3">
              <div className=" flex justify-center items-center gap-3">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold shadow">
                Category: {category}
              </span>
              <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold shadow">
                Rating: {rating}
              </span></div>
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-semibold shadow">
                  View Details
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
