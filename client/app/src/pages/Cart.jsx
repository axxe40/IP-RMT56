export default function Cart() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-orange-200 px-6 py-4 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-bold text-gray-800">Your Guitar</h1>
          <button className="text-gray-800 font-medium text-xl hover:bg-orange-300 rounded py-1 px-2">
            Recommendation with AI
          </button>
        </div>
      </nav>
      {/* Recommendation Section */}
      <div className="px-10 py-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">My Cart</h2>
        {/* Card List */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {/* Product Card */}
          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Product Image"
              className="w-full h-44 object-cover"
            />
            <div className="p-3">
              <h2 className="text-lg font-semibold text-gray-800">
                Guitar Name
              </h2>
              <p className="text-sm font-medium text-gray-600">Fender</p>
              <p className="text-sm  text-gray-600">Electric</p>
              <p className="text-lg font-semibold text-gray-800">Rp10.000.000</p>
              {/* Quantity Controls */}
              <div className="flex items-center justify-between mt-4 ">
                <button className="bg-red-200 text-red-600 py-2 px-6 rounded-md hover:bg-red-300 focus:outline-none">
                  -
                </button>
                <span className="text-lg font-semibold">1</span>
                <button className="bg-green-500  text-black py-2 px-6 rounded-md hover:bg-green-400 focus:outline-none">
                  +
                </button>
              </div>
              {/* Delete Button */}
              <button className="w-full bg-red-600 text-white mt-4 py-2 rounded-md hover:bg-red-500 focus:outline-none">
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-start ml-6 mt-8">
          <button className="bg-sky-700 text-white px-6 py-3 rounded-md hover:bg-sky-600">
            Back to Home
          </button>
        </div>
      </div>
      {/* Repeat for more products */}
      {/* Back Button */}
    </>
  );
}
