import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <div
      style={{
        display: "flex",
         alignItems: "center",
        marginBottom: "20px",
        background: "black",
        color: "#fff",
        height: "90px",
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        
      }}
    >
      <Link style={{display: "flex",
         alignItems: "center",
        flexDirection:"row",
        justifyContent:"space-between", padding:"0px 30px"}} to="/">
        <h1 style={{color:"white"}}>Shoppy</h1>
       <div>
       <button>Login</button>
        <button>Sign</button>
       </div>
      </Link>
    </div>
  );
};

export default Navbar
