import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./style.module.css";
import "./spin.css";


const ProductComponent = ({ text, sort, category }) => {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);

  const searchFilter = (item) => {
    return item.title.toLowerCase().includes(text.toLowerCase());
  };
  const sortByPrice = (a, b) => {
    if (sort == "LH") {
      return a.price - b.price;
    }
    if (sort == "HL") {
      return b.price - a.price;
    }
  };
  const filterByCategory = (item) => {
    return item.category.includes(category);
  };
  return (
    <div>
      {
        products.length===0
      ?(
         <div class="center">
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      ):(
        <div className={styles.container}>
      {products
        ?.filter(searchFilter)
        .filter(filterByCategory)
        .sort(sortByPrice)
        .map((item) => {
          return (
            <>
              <Link className={styles.box} key={item.id} to={`/products/${item.id}`}>
               
                  <div>
                    <img src={item.image} alt={item.title} width="150px" height="150px" />
                  </div>
                  <div>
                    <h4 className={styles.title} >{item.title}</h4>
                  </div>
                  <h5 style={{fontWeight:"900",color:"black" }}>$ {item.price}</h5>
                  <p style={{ color: "gray" }}>{item.category}</p>
             
              </Link>
            </>
          );
        })}
    </div>
      )}
    </div>
  );
};

export default ProductComponent;
