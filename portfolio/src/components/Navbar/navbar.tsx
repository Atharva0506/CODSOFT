"use client"
import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { SiGmail } from "react-icons/si";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navItems = [
  { id: "Home", icon: <AiOutlineHome /> },
  { id: "About", icon: <AiOutlineUser /> },
  { id: "Skill", icon: <BiBook /> },
  { id: "Contact", icon: <BiMessageSquareDetail /> },
];

function Nav() {
  const [activeNav, setActiveNav] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
    <nav>
      <div className="logo">Logo</div>
      
      <div className={`links ${isMenuOpen ? "active" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => {
              setActiveNav(item.id);
              setIsMenuOpen(false); 
            }}
            className={activeNav === item.id ? "active" : ""}
          >
            <span>{item.icon}</span>
            <span>{item.id}</span>
          </a>
        ))}
      </div>
      
      <div className={`social ${isMenuOpen ? "active" : ""}`}>
        <a href="http://">
          <FaGithub />
        </a>
        <a href="http://">
          <FaLinkedin />
        </a>
        <a href="http://">
          <SiGmail />
        </a>
      
      </div>
      
    </nav>
    <button className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
    </div>
  );
}

export default Nav;
