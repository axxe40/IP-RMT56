import banner from "../assets/banner.png";
import Navbar from "../components/Navbar";

export default function Homepage() {

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <div className="w-full h-[22rem] bg-gray-200 flex items-center justify-center">
        <img src={banner} alt="Banner" className="w-full h-full object-cover" />
      </div>
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between px-12 py-6">
        <input
          type="text"
          placeholder="Search"
          className="w-full md:w-1/3 p-2 border border-gray-300 rounded-md mb-4 md:mb-0
   focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
        />
        <div className="flex gap-4 ">
          <select
            className="border border-gray-300 rounded-md p-2 pr-4  
          focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
          >
            <option value="">Filter by Brand</option>
            <option value="ibanez">Ibanez</option>
            <option value="gibson">Gibson</option>
            <option value="squier">Squier</option>
            <option value="fender">Fender</option>
            <option value="rickenbacker">Rickenbacker</option>
            <option value="taylor">Taylor Guitars</option>
            <option value="prs">PRS Guitars</option>
          </select>
          <select
            className="border border-gray-300 rounded-md p-2 pr-4
           focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
          >
            <option value="">Filter by Type</option>
            <option value="acoustic">Acoustic</option>
            <option value="electric">Electric</option>
            <option value="bass">Bass</option>
          </select>
        </div>
      </div>
      {/* Product Cards */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 px-10">
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
      </div>

      {/* Profile Modal */}
      {/* <div
        id="profileModal"
        className="hidden fixed inset-0 bg-black  bg-opacity-50 items-center justify-center p-4"
      >
        <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Profile</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <p className="text-gray-800 bg-slate-100 rounded-md p-2">
              John Doe
            </p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <p className="text-gray-800 bg-slate-100 rounded-md p-2">
              johndoe@example.com
            </p>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Preference
          </h3>
          <div className="mb-4">
            <label
              htmlFor="brand"
              className="block text-sm font-medium text-gray-700"
            >
              Brand
            </label>
            <select
              id="brand"
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Brand</option>
              <option value="ibanez">Ibanez</option>
              <option value="gibson">Gibson</option>
              <option value="squier">Squier</option>
              <option value="fender">Fender</option>
              <option value="rickenbacker">Rickenbacker</option>
              <option value="taylor">Taylor Guitars</option>
              <option value="prs">PRS Guitars</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="type"
              className="block text-sm font-medium text-gray-700"
            >
              Type
            </label>
            <select
              id="type"
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Type</option>
              <option value="acoustic">Acoustic</option>
              <option value="electric">Electric</option>
              <option value="bass">Bass</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="min-price"
              className="block text-sm font-medium text-gray-700"
            >
              Min Price
            </label>
            <input
              type="number"
              id="min-price"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="max-price"
              className="block text-sm font-medium text-gray-700"
            >
              Max Price
            </label>
            <input
              type="number"
              id="max-price"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              id="cancelButton"
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Update
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
}
