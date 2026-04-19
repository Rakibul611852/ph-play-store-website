import React from 'react'
import { Link } from 'react-router';

const NotfoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <div className="text-center">
        
        {/* 404 Text */}
        <h1 className="text-7xl font-bold text-blue-600">404</h1>
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-2">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <div className="mt-6">
          <Link to="/">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
              Go Back Home
            </button>
          </Link>
        </div>

      </div>

    </div>
  )
}

export default NotfoundPage;