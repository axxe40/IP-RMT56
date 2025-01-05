import { useEffect, useState } from "react";
import banner from "../assets/banner.png";
import Navbar from "../components/Navbar";
import formatterRp from "../helpers/FormatRp";
import { p2Api } from "../helpers/http-client";
import { toast } from "react-toastify";

export default function Homepage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const accessToken = localStorage.getItem("access_token");


  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await p2Api.get('/products', {
        params: {
          q: searchQuery,
          brand: brandFilter,
          type: typeFilter,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setProducts(response.data); 
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    setLoading(false); // Menghentikan loading spinner setelah selesai
  };
  
  useEffect(() => {
    fetchProducts();
  }, [searchQuery, brandFilter, typeFilter]); 

  const fetchCartItems = async () => {
    try {
      const response = await p2Api.get("/cart", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      // console.log("tes isi:",response.data);
      setCartItems(response.data); // Menyimpan cart items
    } catch (error) {
      console.error("Error fetching cart items", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCartItems(); // Fetch cart items saat halaman di-render
  }, [searchQuery, brandFilter, typeFilter]); // Dependensi yang ada

  const handleAddToCart = async (productId) => {
    setLoading(true);
    try {
      const response = await p2Api.post('/cart', 
        { productId }, 
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response.data);
      await fetchCartItems(); // Refresh seluruh data keranjang
      toast.success(response.data.message);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
    setLoading(false);
  };
 
  const isProductInCart = (productId) => {
    try {
      return cartItems.some((item) => {
        // console.log("Item in cart:", item); 
        return item.productId === productId;
      });
    } catch (error) {
      console.error("cartItems is not iterable or invalid:", error);
      return false;
    }
  };
  

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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex gap-4">
          <select
            className="border border-gray-300 rounded-md p-2 pr-4  
            focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
            value={brandFilter}
            onChange={(e) => setBrandFilter(e.target.value)}
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
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="">Filter by Type</option>
            <option value="acoustic">Acoustic</option>
            <option value="electric">Electric</option>
            <option value="bass">Bass</option>
          </select>
        </div>
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="animate-spin h-10 w-10 border-4 border-sky-300 border-t-transparent rounded-full"></div>
        </div>
      )}

      {/* Product Cards or No Products Found */}
      {products.length === 0 && !loading && (
        <div className="text-center py-20 text-xl font-semibold text-gray-600">
          Product not found
        </div>
      )}

      {/* Product Cards */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 px-10">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-md overflow-hidden flex flex-col p-2">
            <img
              src={product.imgUrl}
              alt={product.name}
              className="w-full h-52 object-fill rounded-md"
            />
            <div className="px-4 py-3 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold text-gray-800 h-8 overflow-y-auto">{product.name}</h2>
              <p className="text-sm font-semibold text-gray-600">{product.brand}</p>
              <p className="text-sm text-gray-600">{product.type}</p>
              <p className="text-lg font-bold text-gray-800">{formatterRp.format(product.price)}</p>
              <p className="text-sm text-gray-600  ">{product.description}</p>
            </div>
            <button
                onClick={() => handleAddToCart(product.id)}
                disabled={isProductInCart(product.id)} 
                className={`w-full mt-auto py-2 rounded-md ${
                  isProductInCart(product.id)
                    ? "bg-sky-300 text-white"
                    : "bg-sky-700 text-white hover:bg-sky-600"
                }`}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
