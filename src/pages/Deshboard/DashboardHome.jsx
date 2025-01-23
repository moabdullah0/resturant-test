import React from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import PopUp from "../../components/Popup";
import ProductForm from "./components/FormProduct";
import useProduct from "../../hooks/useProduct";
import ViewITem from "./ViewITem";


const DashboardHome = () => {
  const { product, errors } = useProduct();

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`/items/${id}`);
      alert("Product deleted successfully!");
      window.location.reload(); // Reload to fetch updated data
    } catch (error) {
      alert("Failed to delete product!");
    }
  };

  return (
    <div className="mx-5 mt-10 flex flex-col space-y-5">
      {errors && (
        <p className="text-red-500 text-sm bg-red-100 p-2 rounded">
          {errors}
        </p>
      )}
      <PopUp title={"Post New Product"}>
        <ProductForm />
      </PopUp>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg border border-blue-400">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 border-separate border-spacing-y-2">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-blue-400">
            <tr>
              <th scope="col" className="px-4 py-3">Image</th>
              <th scope="col" className="px-4 py-3">Product</th>
              <th scope="col" className="px-4 py-3">Status</th>
              <th scope="col" className="px-4 py-3">Price</th>
              <th scope="col" className="px-4 py-3">Rating</th>
              <th scope="col" className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item) => (
              <tr
                key={item.id}
                className="bg-white border border-blue-400 hover:bg-gray-100"
              >
                <td className="px-4 py-2">
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">
                  <span className="inline-block px-2 py-1 text-xs font-medium text-green-600 bg-green-100 rounded">
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-2">{item.price}</td>
                <td className="px-4 py-2">{item.rating}</td>
                <td className="px-4 py-2 flex items-center space-x-2">
                  <PopUp title={<FaEdit />} titlePupup={"Edit Product"}>
                    <ProductForm productToEdit={item} />
                  </PopUp>
                  <PopUp title={<FaEye />} titlePupup={"View Product"}>
                    <ViewITem itemID={item.id} />
                  </PopUp>
                  <button
                    className="text-gray-600 hover:text-red-500"
                    onClick={() => deleteProduct(item.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardHome;
