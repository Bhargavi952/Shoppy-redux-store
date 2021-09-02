import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar_cont}>
      <Link to="/" className={styles.navlogo}>
        <h1 style={{ color: "white" }}>Shoppy</h1>
        <div className={styles.btn_div}>
          <button>Login</button>
          <button>Sign</button>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
