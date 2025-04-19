import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-400">404</h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-4">
          Oops! Page not found
        </h2>
        <p className="text-gray-600 mt-2">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block mt-6 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
