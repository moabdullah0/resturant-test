import axios from "axios";
import React, { useEffect, useState } from "react";
import apiClient from "../Services/api-Client";

const useProduct = () => {
  const [product, setProduct] = useState([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await apiClient.get("/items");
        setProduct(res.data);
      } catch (err) {
        setErrors(err.message);
      }
    };
    getProduct();
  }, []);

  return {
    product,
    errors,
  };
};

export default useProduct;
