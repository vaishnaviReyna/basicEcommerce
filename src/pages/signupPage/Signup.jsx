import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";
import { FaUserAlt, FaLock } from "react-icons/fa";
import Button from "../../components/button/Button";
import shopingcart from "../../assets/images/shopingcover.png";
import styles from "./signup.module.scss";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const navigate = useNavigate();
  const [data, setdata] = useState({ name: "", email: "", pass: "" });
  const [Err, setErr] = useState(false);
  const { name, email, pass } = data;
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

  const handlechang = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    if (!validEmail.test(data.email) && !validPassword.test(data.pass)) {
      setErr(true);
    }
    if (data.name && data.email && data.pass) {
      var userInfo = localStorage.getItem("userInfo");
      if (!userInfo) {
        var arr = [];
        var newarrlen = arr.push(data);
        localStorage.setItem("userInfo", JSON.stringify(arr));
      } else {
        var userInfoArray = JSON.parse(userInfo);
        userInfoArray.push(data);
        localStorage.setItem("userInfo", JSON.stringify(userInfoArray));
      }
      navigate("/login_page");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={shopingcart} alt="Logo" width="12%" />
      </div>

      <div className={styles.mainContainer}>
        <div>
          <h2> Welcome Registration </h2>
        </div>

        <div className={styles.loginStyle}>
          <Input
            label={<FaUserAlt />}
            type="text"
            names="name"
            values={name}
            onChange={handlechang}
            placeholder="Enter your name"
          />

          <Input
            label={<FaUserAlt />}
            type="email"
            names="email"
            values={email}
            onChange={handlechang}
            placeholder="Enter your email"
          />

          <Input
            label={<FaLock />}
            names="pass"
            values={pass}
            onChange={handlechang}
            type="password"
            placeholder="Enter your password"
          />
          <Button title="submit" type="submit" onClick={() => handleSubmit()} />
          {Err && <p>Your value is invalid</p>}
        </div>
      </div>
    </div>
  );
}

export default Signup;
