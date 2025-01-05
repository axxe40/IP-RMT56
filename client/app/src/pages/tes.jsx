{!loading && hasFetched && Array.isArray(recommend) && recommend.length === 0 ? (
    <div className="text-center py-[163px] text-xl font-semibold text-gray-600">
      Product not found
    </div>
  ) : (
    Array.isArray(recommend) && (
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 px-10">
        {recommend.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-md overflow-hidden flex flex-col p-2"
          >
            <img
              src={product.imgUrl}
              alt={product.name}
              className="w-full h-52 object-fill rounded-md"
            />
            <div className="px-4 py-3 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold text-gray-800 h-7 overflow-y-auto">
                {product.name}
              </h2>
              <p className="text-sm font-semibold text-gray-600">
                {product.brand}
              </p>
              <p className="text-sm text-gray-600">{product.type}</p>
              <p className="text-lg font-bold text-gray-800">
                {formatterRp.format(product.price)}
              </p>
              <p className="text-sm text-gray-600">{product.description}</p>
            </div>
            <button
              onClick={() => handleAddToCart(product.id)}
              disabled={isProductInCart(product.id)}
              className={`w-full mt-auto py-2 rounded-md ${
                isProductInCart(product.id)
                  ? "bg-sky-300 text-white"
                  : "bg-sky-700 text-white hover:bg-sky-600"
              }`}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    )
  )}
  