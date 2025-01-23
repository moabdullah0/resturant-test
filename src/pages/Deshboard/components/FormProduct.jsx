import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "../../../Validation/schemaProduct";




const ProductForm = ({ initialData, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: initialData || {},
  });

  const handleFormSubmit = async (data) => {
    await onSubmit(data);
    reset();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h1 className="text-2xl font-semibold mb-4">
        {initialData ? "Edit Product" : "Add New Product"}
      </h1>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            {...register("name")}
            className={`mt-1 block w-full p-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md`}
            placeholder="Enter product name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            {...register("status")}
            className={`mt-1 block w-full p-2 border ${
              errors.status ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          >
            <option value="">Select status</option>
            <option value="okey">okey</option>
            <option value="wow">wow</option>
            <option value="warning">warning</option>
          </select>
          {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="text"
            {...register("price")}
            className={`mt-1 block w-full p-2 border ${
              errors.price ? "border-red-500" : "border-gray-300"
            } rounded-md`}
            placeholder="Enter product price"
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Image Link</label>
          <input
            type="text"
            {...register("image_url")}
            className={`mt-1 block w-full p-2 border ${
              errors.image_url ? "border-red-500" : "border-gray-300"
            } rounded-md`}
            placeholder="Enter image URL"
          />
          {errors.image_url && (
            <p className="text-red-500 text-sm mt-1">{errors.image_url.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
        >
          {initialData ? "Update Product" : "Add Product"}
        </button>
      </form>
    </div>
  );
};
export default ProductForm