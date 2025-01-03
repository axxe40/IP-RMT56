import { NavLink } from "react-router";
import Navbar from "../components/Navbar";

export default function Recommendation() {
  return (
    <>
      {/* Navbar */}
      <Navbar isRecommendationPage={true}/>
      {/* Recommendation Section */}
      <div className="px-10 py-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Recommendation with AI
        </h2>
        {/* Card List */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {/* Product Card */}
          <div className="bg-white shadow-md rounded-md overflow-hidden flex flex-col p-2">
          <img
            src="https://www.tomleemusic.ca/media/catalog/product/cache/7b59eeedc8a9391b10c489498e31e772/s/t/strat_mp_dark.jpg"
            alt="Product Image"
            className="w-full h-52 object-fill rounded-md"
          />
          <div className="px-4 py-3 flex flex-col flex-grow">
            <h2 className="text-lg font-semibold text-gray-800">
              Fender American Professional II Stratocaster
            </h2>
            <p className="text-sm font-semibold text-gray-600">Fender</p>
            <p className="text-sm text-gray-600">Electric</p>
            <p className="text-lg font-bold text-gray-800">Rp22.000.000</p>
            <p className="text-sm text-gray-600">
              A versatile electric guitar with top-tier craftsmanship and tone
            </p>
          </div>
          <button className="w-full bg-sky-700 text-white mt-auto py-2 rounded-md hover:bg-sky-600">
            Add to Cart
          </button>
        </div>

        <div className="bg-white shadow-md rounded-md overflow-hidden flex flex-col p-2">
          <img
            src="https://hariharimusik.id/wp-content/uploads/2020/04/slick-silver-affinity1.jpg"
            alt="Product Image"
            className="w-full h-52 object-fill rounded-md"
          />
          <div className="px-4 py-3 flex flex-col flex-grow">
            <h2 className="text-lg font-semibold text-gray-800">
              Squier Affinity Series Stratocaster
            </h2>
            <p className="text-sm font-semibold text-gray-600">Squier</p>
            <p className="text-sm text-gray-600">Electric</p>
            <p className="text-lg font-bold text-gray-800">Rp4.500.000</p>
            <p className="text-sm text-gray-600">
              A great entry-level guitar with classic Stratocaster styling
            </p>
          </div>
          <button className="w-full bg-sky-700 text-white mt-auto py-2 rounded-md hover:bg-sky-600">
            Add to Cart
          </button>
        </div>

        <div className="bg-white shadow-md rounded-md overflow-hidden flex flex-col p-2">
          <img
            src="https://skymusic.com.au/cdn/shop/files/se-cu2408-tu_2_1200x.jpg?v=1697158015"
            alt="Product Image"
            className="w-full h-52 object-fill rounded-md"
          />
          <div className="px-4 py-3 flex flex-col flex-grow">
            <h2 className="text-lg font-semibold text-gray-800">
              PRS SE Custom 24 
            </h2>
            <p className="text-sm font-semibold text-gray-600">PRS Guitars</p>
            <p className="text-sm text-gray-600">Electric</p>
            <p className="text-lg font-bold text-gray-800">Rp17.500.000</p>
            <p className="text-sm text-gray-600">
              A versatile guitar with a beautiful finish and wide tonal range
            </p>
          </div>
          <button className="w-full bg-sky-700 text-white mt-auto py-2 rounded-md hover:bg-sky-600">
            Add to Cart
          </button>
        </div>
          
         
          {/* Add more cards as necessary */}
        </div>
        {/* Back Button */}
        <div className="flex justify-start ml-6 mt-8">
          <NavLink to="/" className="bg-sky-700 text-white px-6 py-3 rounded-md hover:bg-sky-600">
            Back to Home
          </NavLink>
        </div>
      </div>
    </>
  );
}
