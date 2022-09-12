import React, { useState } from "react";
import "./Header.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch, FiMenu } from "react-icons/fi";
import { IoCaretUpSharp } from "react-icons/io5";
import WorkShopLogo from "../../assets/images/logo-shop-red.png";
import { Link, useNavigate, NavLink } from "react-router-dom";

function Header() {
  const history = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const handleSearch = () => {
    setShowSearch((state) => !state);
  };
  const handleNav = () => {
    setShowNav((state) => !state);
  };
  const handleToHome = () => {
    history('/');
  }

  return (
    <div className="header">
      <div className="header__logo">
        <img src={WorkShopLogo} alt="pictureLogo" onClick={handleToHome}/>
      </div>
      <div className="header__menu">
        <button onClick={handleNav}>
          <FiMenu />
        </button>
      </div>
      <ul className={showNav ? 'header__nav' : 'header__nav-hidden'}>
        <li onClick={handleNav}>
          <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "header__active" : "header__inactive")}
            >
              HOME
          </NavLink>
        </li>
        <li onClick={handleNav}>
          <NavLink
              to="/product"
              className={({ isActive }) => (isActive ? "header__active" : "header__inactive")}
            >
              PRODUCTS
          </NavLink>
        </li>
        <li onClick={handleNav}>
          <NavLink
              to="#"
              // className={({ isActive }) => (isActive ? "header__active" : "header__inactive")}
              className="header__inactive"
            >
              BLOG
          </NavLink>
        </li>
      </ul>
      <div className="header__action">
        <div className="header__search">
            <button onClick={handleSearch}>
            <FiSearch className="header__search-ic" />
            </button>
            {showSearch && (
            <>
                <IoCaretUpSharp className="header__search-up" />
                <div className="header__search-ctn">
                <input type="text" placeholder="Search" />
                <button>SEARCH</button>
                </div>
            </>
            )}
        </div>
        <div className="header__cart">
            <button>
              <Link to="/cart">
                <AiOutlineShoppingCart className="header__cart-ic" />
              </Link>
            </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
