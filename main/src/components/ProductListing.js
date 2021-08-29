import React, { useEffect } from "react";
import axios from 'axios'
import ProductComponent from "./ProductComponent";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products);
const dispatch = useDispatch()
    const Fetchdata = async ()=>{
        const response = await  axios.get("https://fakestoreapi.com/products")
        .catch((err)=>{
            console.log(err.message)
        })
        // console.log(response.data)
        dispatch(setProducts(response.data))
    }
    useEffect(()=>{
        Fetchdata()
    },[])
    console.log("List:",products);
  return (
    <div className="ui grid container">
   <div style={{paddingTop:"50px"}}>
   <ProductComponent/>
   </div>
  </div>
  )
  }
export default ProductListing;
