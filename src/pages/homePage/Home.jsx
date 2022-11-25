import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./home.module.scss";
import { FaFacebookF, FaTwitter,FaVimeoV,FaCartArrowDown } from "react-icons/fa";
import {IoCall,IoMailSharp} from "react-icons/io5";
import { FcBusinessman } from "react-icons/fc";
import logo from  "../../assets/images/logo.webp";
import slider1 from "../../assets/images/slider1.png"
import slider2 from "../../assets/images/slider2.png"
import slider3 from "../../assets/images/slider3.webp"
import { IconContext } from "react-icons";
import Button from "../../components/button/Button";
import Cart from "../CartPage/Cart";
import Themecontext from "../Context";



function Home() {
  const navigate = useNavigate();
  const currntLogin = JSON.parse(localStorage.getItem("currntLogin"));
  const[data,setData]=useState([]);
  const[cartItem,SetcartItem]=useState([]);
  const [tab,setTab]=useState(false)


  const handleLogout=()=>{
    localStorage.removeItem("logedin");
    navigate("/login_page")
  }
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setData(json))
},[])

const onAdd =(item)=>{
  const exist = cartItem.find((x)=>x.id === item.id);
  if(exist){
    const newCartItems = cartItem.map((x)=>
    x.id === item.id ? {...exist, qty: exist.qty+1} : x
    );
    SetcartItem(newCartItems);
  }else{
    const newCartItems = [...cartItem,{...item,qty:1}]
    SetcartItem(newCartItems);
  }
}

const onRemove =(item) =>{
  const exist = cartItem.find((x)=>x.id === item.id);
  if(exist.qty === 1){
    const newCartItems=(cartItem.filter((x) => x.id !== item.id));
    SetcartItem(newCartItems);
  }else{
    const newCartItems= cartItem.map((x) =>
    x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
  );
  SetcartItem(newCartItems);
  }
}

console.log(cartItem);
  return (
    <div>
      <Themecontext.Provider value={cartItem}>
        <Cart/>
      </Themecontext.Provider>
      <div className={styles.header}>
        <div>
  <a><IoMailSharp/>support@visushop.com</a>
  <a className="mx-4 text-dark text-decoration-none" href="#"><IoCall/>126-632-2345</a>
        </div>
        <div className="d-flex justify-content-between">
          <span className={styles.usernameStyle}><FcBusinessman/>{currntLogin}</span>
          <Button title="Logout" onClick={() => handleLogout()} />
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
<div ><FaCartArrowDown/>
<button className="mx-1 p-1 border border-info font-weight-bold" onClick={()=>setTab(true)} >{cartItem.length}</button>
</div>
</IconContext.Provider>
      </div>
<div id="demo" className="carousel slide" data-bs-ride="carousel">


  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  

  <div className="carousel-inner">
    <div class="carousel-item active">
      <img src={slider3} alt="Los Angeles" class="d-block" width="100%" height="450px"/>
    </div>
    <div class="carousel-item">
      <img src={slider1} alt="Chicago" class="d-block" width="100%"  height="450px"/>
    </div>
    <div class="carousel-item">
      <img src={slider2} alt="New York" class="d-block" width="100%"  height="450px"/>
    </div>
  </div>
  

  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>

{
    data? <div className="d-flex flex-wrap justify-content-evenly"> {
        data.map((item)=>{
            return <div className={styles.cardStyle} key={item.id}>
               <img src={item.image} class="card-img-top" alt="item" width="50px" height="150px"/>
              <span>Name:</span>
               <p className="card-title">{item.title}</p>
               <span>Price:</span>
               <span className="card-text">{item.price}</span>
               <Button title="Add to cart" onClick={()=>onAdd(item)}/>
               <Button title="Remove to cart" onClick={()=>onRemove(item)}/>
           </div>

        })
    } </div> :<></>
}
  
<div className={styles.billingStyle}>
  {tab ?<div>
            {
                cartItem.map((i)=>{
                    return <div> 
                      <span className="border-dark">{i.title}</span>
                      <span className="mx-2 border-dark">{i.qty}</span>
                      </div>
                })
            }
        </div>:<></>
            
        }
  </div>

    </div>
  );
}
export default Home;
