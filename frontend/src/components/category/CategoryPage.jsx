import React, { useEffect, useState, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCategories } from "../../Redux/categorySlice";
import { renderStars } from "../../utils/renderStars";

const Header = lazy(() => import("../navbar/Header"));
import Pagination from "../../utils/Pagination";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { categories, status } = useSelector((state) => state.categories);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    if (status === "idle") dispatch(fetchCategories());
  }, [dispatch, status]);

  const category = categories.find((c) => c.id === categoryId);


  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = category?.items.slice(indexOfFirst, indexOfLast);

  const totalPages = category ? Math.ceil(category.items.length / itemsPerPage) : 0;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setCurrentPage(page);
    }
  };

  if (status === "loading" || !category) {
    return (
      <div className="flex flex-col items-center mt-24 ">
        <div className="w-10 h-10 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="mt-3 text-gray-600 text-sm">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-6 bg-gray-100">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>

      <h2 className="text-xl font-semibold mb-4 mt-12 ml-2">{category.name}</h2>

      {/* PRODUCT GRID */}
      <div
        className="
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 
        gap-5
      "
      >
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg overflow-hidden cursor-pointer shadow hover:shadow-md transition p-3"
            onClick={() => navigate(`/product/${item.id}`)}
          >
            <div className="w-full aspect-square bg-white rounded overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-2">
              <p className="text-sm font-medium truncate">{item.title}</p>

              <div className="flex justify-between items-center mt-1">
                <p className="text-sm font-bold">${item.price}</p>
                <p className="text-xs text-green-600">
                  {Math.round(item.discountPercentage)}% off
                </p>
              </div>

              <div className="flex mt-1">{renderStars(item.rating)}</div>
            </div>
          </div>
        ))}
      </div>

    
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CategoryPage;
