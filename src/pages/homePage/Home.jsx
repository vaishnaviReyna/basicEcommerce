import React, {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./home.module.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaVimeoV,
  FaCartArrowDown,
} from "react-icons/fa";
import { IoCall, IoMailSharp } from "react-icons/io5";
import { FcBusinessman } from "react-icons/fc";
import logo from "../../assets/images/logo.webp";
import slider1 from "../../assets/images/slider1.png";
import slider2 from "../../assets/images/slider2.png";
import slider3 from "../../assets/images/slider3.webp";
import { IconContext } from "react-icons";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import {getposts,deleteposts} from "../../redux/action/Action"
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";

function Home() {

  const  dispatch =useDispatch();
  const posts = useSelector((state)=>state.Reducer.posts)
  console.log(posts);

  const navigate = useNavigate();
  const currntLogin = JSON.parse(localStorage.getItem("currntLogin"));
  const [data, setData] = useState([]);
  const [cartItem, SetcartItem] = useState([]);
  const [tab, setTab] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("logedin");
    navigate("/login_page");
  };
  useEffect(() => {
    dispatch(getposts( ))
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((json) => setData(json));
     
  }, []);

  const onAdd = (item) => {
    const exist = cartItem.find((x) => x.id === item.id);
    if (exist) {
      const newCartItems = cartItem.map((x) =>
        x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
      );
      SetcartItem(newCartItems);
    } else {
      const newCartItems = [...cartItem, { ...item, qty: 1 }];
      SetcartItem(newCartItems);
    }
  };

  const onRemove = (item) => {
    const exist = cartItem.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      const newCartItems = cartItem.filter((x) => x.id !== item.id);
      SetcartItem(newCartItems);
    } else {
      const newCartItems = cartItem.map((x) =>
        x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
      );
      SetcartItem(newCartItems);
    }
  };
console.log("posts",posts);
  return (

    <div>
        
      {/* header */}
      <div className={styles.header}>
        <div>
          <a href="#" className="text-dark text-decoration-none">
            <IoMailSharp />
            support@visushop.com
          </a>
          <a className="mx-4 text-dark text-decoration-none" href="#">
            <IoCall />
            126-632-2345
          </a>
        </div>
        <div className="d-flex justify-content-between">
          <span className={styles.usernameStyle}>
            <FcBusinessman />
            {currntLogin}
          </span>
          <Button title="Logout" onClick={() => handleLogout()} />
          <span>
            <FaFacebookF />{" "}
          </span>
          <span className="mx-2">
            <FaTwitter />
          </span>
          <span>
            <FaVimeoV />
          </span>
        </div>
      </div>
{/* sub-header */}
      <div className={styles.header}>
        <img src={logo} alt="Logo" height="50px" width="100px" />
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
        <IconContext.Provider value={{ size: "1.5em" }}>
          <div>
            <FaCartArrowDown />
            <button
              className="mx-1 text-white bg-success border border-info font-weight-bold"
              onClick={() => setTab(true)}
            >
              {cartItem.length}
            </button>
{/* for new pages */}
            <button
              onClick={() =>navigate("/cart_page")}
            >
              {cartItem.length}
            </button>

          </div>
        </IconContext.Provider>
      </div>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div class="carousel-item active">
            <img
              src={slider3}
              alt="Los Angeles"
              class="d-block"
              width="100%"
              height="450px"
            />
          </div>
          <div class="carousel-item">
            <img
              src={slider1}
              alt="Chicago"
              class="d-block"
              width="100%"
              height="450px"
            />
          </div>
          <div class="carousel-item">
            <img
              src={slider2}
              alt="New York"
              class="d-block"
              width="100%"
              height="450px"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
{/* data-display */}
      {posts ? (
        <div className="d-flex flex-wrap justify-content-evenly">
          {" "}
          {posts.map((item) => {
            return (
              <div className={styles.cardStyle} key={item.id}>
                <img
                  src={item.image}
                  class="card-img-top"
                  alt="item"
                  width="50px"
                  height="150px"
                />
                <span>Name:</span>
                <p className="card-title">{item.title}</p>
                <span>Price:</span>
                <span className="card-text">{item.price}</span>
                <div className="d-flex justify-content-center">
                <Button title="Add to cart" onClick={() => onAdd(item)} />
                <Button title="Remove to cart" onClick={() => onRemove(item)} />
                </div>
                <div  className="d-flex justify-content-center">
                <Button title="Remove posts" onClick={() => dispatch(deleteposts(item.id))} />
               <Link
               to={`/update_page/${item.id}`}>
               <Button title="Edit posts" onClick={() => dispatch((item.id))} />
               </Link>
               
                  </div>
              </div>
            );
          })}{" "}
        </div>
      ) : (
        <></>
      )}

      <div className={styles.billingStyle}>
        {tab ? (
          <div>
            {cartItem.map((i) => {
              return (
                <div>
                  <span className="border-dark">{i.title}</span>
                  <span className="mx-2 border-dark">{i.qty}</span>
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
{/* footer */}
      <div className={styles.footer}>
        <div className={styles.footerContain}>
          <div><h4>ABOUT SHOP</h4>
          <p>We possess within us two minds. So far<br/>I have written only of the conscious mind.<br/>We further know that the subconscious <br/>has recorded every event.</p>
          <h6>NEWSLETTER</h6>
          <hr></hr>
          <Input
            type="email"
            placeholder="Enter your email"
          />
          </div> 
          <div><h4>INFORMATION</h4>
          <ul>
            <li>Our Stores</li>
            <li>About Us</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
            <li>Returns</li>
          </ul>
          </div>
          <div><h4>MY ACCOUNT</h4>
          <ul className="text-left">
									<li><a>My Account</a></li>
									<li><a>Order History</a></li>
									<li><a>My Wishlist</a></li>
									<li><a>Specials</a></li>
									<li><a>Track Order</a></li>
									<li><a>Gift Vouchers</a></li>
									<li><a>My Credit Slips</a></li>
								</ul></div>
          <div><h4>GET IN TOUCH WITH US</h4>
          <p>Philippines, PO Box 6200 Talay st. 65,<br/> SweetPick inc.</p>
       <div><span> <IoCall /> 126-632-2345</span></div>
       <div><span> <IoMailSharp /> support@visushop.com</span></div>
       <h6>FIND US ON</h6>
       <hr></hr>
       <span className="border"> <FaFacebookF /></span>
       <span className="mx-3 border"> <FaTwitter /></span>
       <span  className="border"> <FaVimeoV /></span>
          </div>
      </div>
      <hr></hr>
      <p>© 2022 SweetPick clohs Shop | Designed by vaishnavi chauhan
</p>
      </div>
   
    </div>
    
  );
}
export default Home;
