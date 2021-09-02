import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchProducts, setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");

  const clearFilter = () => {
    setSort("");
    setCategory("");
  };
  // console.log(text);
  // const Fetchdata = async ()=>{
  //     const response = await  axios.get("https://fakestoreapi.com/products")
  //     .catch((err)=>{
  //         console.log(err.message)
  //     })
  //     // console.log(response.data)
  //     dispatch(setProducts(response.data))
  // }
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  // console.log("List:",products);
  return (
    <div style={{ paddingTop: "80px" }}>
      <input
        type="text"
        placeholder="Search...."
        onChange={(e) => setText(e.target.value)}
      />

      <select
        onChange={(e) => {
          setSort(e.target.value);
        }}
      >
        <option value="LH">Low to High</option>
        <option value="HL">High to Low</option>
      </select>
      <select
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>

      <button onClick={clearFilter}>Clear Filter</button>

      <div
        style={{
          marginTop: "50px",
        }}
      >
        <ProductComponent text={text} sort={sort} category={category} />
      </div>
    </div>
  );
};
export default ProductListing;
