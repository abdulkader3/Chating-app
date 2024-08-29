import React from 'react'

const Profile = () => {
  return (
    <>
      <div className="max-w-sm mx-auto relative mt-10">
      {/* First Background Layer */}
      <div className="absolute inset-0 transform -rotate-6 bg-gradient-to-r from-indigo-500 to-purple-700  shadow-2xl z-0"></div>
      {/* Second Background Layer */}
      <div className="absolute inset-0 transform rotate-6 bg-gradient-to-r from-indigo-400 to-purple-600  shadow-xl z-0"></div>

      {/* Main Content Layer */}
      <div className="relative bg-white shadow-2xl overflow-hidden p-8 z-10"> 
        <div className="flex flex-col items-center">
          <img
            className="h-40 w-40 object-cover mt-4 rounded-full border-4 border-white shadow-lg"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <div className="text-center mt-6">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Developer
            </div>
            <h1 className="mt-2 text-xl leading-tight font-bold text-gray-900">
              John Doe
            </h1>
            <p className="mt-3 text-gray-700">
              Email: <a href="mailto:johndoe@example.com" className="text-indigo-600 hover:text-indigo-700">johndoe@example.com</a>
            </p>
            <p className="mt-2 text-gray-700">
              Phone: <a href="tel:+1234567890" className="text-indigo-600 hover:text-indigo-700">+1 234 567 890</a>
            </p>
            <p className="mt-2 text-gray-700">
              Address: 1234 Example Street, City, State, 12345
            </p>
            <p className="mt-2 text-gray-700">Location: New York, USA</p>
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Profile
