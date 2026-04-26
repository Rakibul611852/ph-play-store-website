import React from 'react'
import { Link } from 'react-router';

const NotfoundPage = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
  <div className="text-center max-w-md px-6">

    {/* Illustration */}
    <div className="flex justify-center mb-6">
      <div className="relative">
        <div className="w-40 h-40 bg-yellow-200 rounded-full flex items-center justify-center shadow-inner">
          {/* You can replace this emoji with an image */}
          <span className="text-6xl">😾</span>
        </div>
      </div>
    </div>

    {/* Card */}
    <div className="bg-orange-100 border-2 border-orange-400 rounded-xl p-6 shadow-md mb-6">
      <h2 className="text-orange-600 text-2xl font-bold">NOT FOUND</h2>
    </div>

    {/* Title */}
    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
      OPPS!! APP NOT FOUND
    </h1>

    {/* Description */}
    <p className="text-gray-500 text-sm mb-6">
      The app you are requesting is not found on our system. Please try another apps.
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