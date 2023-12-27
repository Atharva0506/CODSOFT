import React from "react";
import { IoMdSearch } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import "./navbar.css";

function Navar() {
  return (
    <nav>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="util">
        <p>
          <IoMdSearch />
        </p>
        <p>
          <IoCart />
        </p>
      </div>
    </nav>
  );
}

export default Navar;
