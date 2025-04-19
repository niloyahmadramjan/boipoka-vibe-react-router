import React from "react";
import book from '../../assets/books.jpg';

const HeroSection = () => {
  return (
    <div className="bg-gray-50 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between">
      {/* Text Section */}
      <div className="text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl font-bold text-gray-900 leading-snug">
          Books to freshen up <br /> your bookshelf
        </h1>
        <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md shadow-md">
          View The List
        </button>
      </div>

      {/* Image Section */}
      <div>
        <img
          src={book}
          alt="Book cover"
          className="max-w-xs md:max-w-sm"
        />
      </div>
    </div>
  );
};

export default HeroSection;
