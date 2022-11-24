import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";
import { FaUserAlt, FaLock } from "react-icons/fa";
import Button from "../../components/button/Button";
import shopingcart from  "../../assets/images/shopingcover.png"
import styles from "./login.module.scss";



function Login() {
  const navigate = useNavigate();
  const[email,setEmail]=useState('')
  const[pass,setPass]=useState('')
  const [Err, setErr] = useState(false);
  var getUserInfo = JSON.parse(localStorage.getItem("userInfo"));

  const handleLogin =()=>{
   const userValid=getUserInfo.filter((i)=>email == i.email && pass ==i.pass)
    if(userValid.length > 0){
      localStorage.setItem("currntLogin",JSON.stringify(userValid[0].name))
      localStorage.setItem("logedin",true)
      navigate("/")
    }else{
      setErr(true);
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <div>
        <h2> Welcome Login </h2>
        <img src={shopingcart} alt="Logo" width="50%"/>
        </div>

        <div className={styles.loginStyle}>
        <Input
        label={<FaUserAlt />}
        type="email"
        names="email"
        values={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <Input
        label={<FaLock />}
        type="password"
        names="pass"
        values={pass}
        onChange={(e)=>setPass(e.target.value)}
        placeholder="Enter your password"
      />
      <Button title="Login" onClick={()=>handleLogin()}/>
      {Err && <p>Your value is invalid</p>}
      <div className="d-flex my-2">
      <p className="px-2">Don't have an account yet?</p>      
      <Button title="Create Account" onClick={() => navigate("/signup_page")} />
      </div>
      
        </div>
      
      </div>

      
    </div>
  );
}

export default Login;
