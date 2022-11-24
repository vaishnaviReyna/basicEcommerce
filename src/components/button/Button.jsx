import React from "react";
import styles from "./button.module.scss";

function Button({title,onClick,customClass,type}) {
  return (
    <div>
      <button onClick={onClick} type={type} className={[styles.stybt, customClass].join(" ")} >{title}</button>
    </div>
  );
}
export default Button;
