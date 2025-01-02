export default function Recommendation() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-orange-200 px-6 py-4 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-bold text-gray-800">Your Guitar</h1>
          <button className="text-gray-800 font-medium text-xl hover:bg-orange-300 rounded py-1 px-2">
            Cart
          </button>
        </div>
      </nav>
      {/* Recommendation Section */}
      <div className="px-10 py-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Recommendation with AI
        </h2>
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
              <p className="text-sm text-gray-600">Electric</p>
              <p className="text-lg font-semibold text-gray-800">
                Rp10.000.000
              </p>
              <p className="text-sm text-gray-600">
                This is a description of the guitar, highlighting its features
                and specs.
              </p>
              <button className="w-full bg-sky-700 text-white mt-4 py-2 rounded-md hover:bg-sky-600">
                Add to Cart
              </button>
            </div>
          </div>
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
              <p className="text-sm text-gray-600">Electric</p>
              <p className="text-lg font-semibold text-gray-800">
                Rp10.000.000
              </p>
              <p className="text-sm text-gray-600">
                This is a description of the guitar, highlighting its features
                and specs.
              </p>
              <button className="w-full bg-sky-700 text-white mt-4 py-2 rounded-md hover:bg-sky-600">
                Add to Cart
              </button>
            </div>
          </div>
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
              <p className="text-sm text-gray-600">Electric</p>
              <p className="text-lg font-semibold text-gray-800">
                Rp10.000.000
              </p>
              <p className="text-sm text-gray-600">
                This is a description of the guitar, highlighting its features
                and specs.
              </p>
              <button className="w-full bg-sky-700 text-white mt-4 py-2 rounded-md hover:bg-sky-600">
                Add to Cart
              </button>
            </div>
          </div>
          
         
          {/* Add more cards as necessary */}
        </div>
        {/* Back Button */}
        <div className="flex justify-start ml-6 mt-8">
          <button className="bg-sky-700 text-white px-6 py-3 rounded-md hover:bg-sky-600">
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
}
