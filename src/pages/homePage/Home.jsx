import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./home.module.scss";
import { FaFacebookF, FaTwitter,FaVimeoV,FaCartArrowDown } from "react-icons/fa";
import {IoCall,IoMailSharp} from "react-icons/io5";
import { FcBusinessman } from "react-icons/fc";
import logo from  "../../assets/images/logo.webp";
import shopingCarsol1 from "../../assets/images/shopingCarsol1.jpg"
import shopingCarsol2 from "../../assets/images/shopingCarsol2.jpg"
import { IconContext } from "react-icons";

function Home() {
  const navigate = useNavigate();
  const currntLogin = JSON.parse(localStorage.getItem("currntLogin"))

  const handleLogout=()=>{
    localStorage.removeItem("logedin");
    navigate("/login_page")
  }
  // const abc = ()=>{
  //   fetch('https://fakestoreapi.com/products')
  //           .then(res=>res.json())
  //           .then(json=>console.log(json))
  // }

  return (
    <div>
      <div className={styles.header}>
        <div>
  <a><IoMailSharp/>support@visushop.com</a>
  <a className="mx-4 text-dark text-decoration-none" href="#"><IoCall/>126-632-2345</a>
        </div>
        <div>
          <span className={styles.usernameStyle}><FcBusinessman/>{currntLogin}</span>
          <span  className="mx-4">Logout</span>
          <span><FaFacebookF/> </span>
          <span className="mx-2"><FaTwitter/></span>
          <span><FaVimeoV/></span>
        </div>
      </div>

      <div className={styles.header}>
      <img src={logo} alt="Logo" height="50px" width="100px"/>
      <div>
        <select value="home" className="border-0">
  <option value="home">HOME</option>
</select>
<select value="shop" className="border-0">
  <option value="shop">SHOP</option>
</select>
<select value="blog" className="border-0">
  <option value="blog">BLOG</option>
</select>
<select value="pages" className="border-0">
  <option value="pages">PAGES</option>
</select>
</div>
<IconContext.Provider value={{size:"1.5em" }}>
<div ><FaCartArrowDown/></div>
</IconContext.Provider>
      
      </div>
      {/* <button onClick={() => abc()}>api</button> */}
    {/* <h2>login user name:{currntLogin}</h2>
      <button onClick={() =>handleLogout()}>Logout</button> */}


    </div>
  );
}
export default Home;
