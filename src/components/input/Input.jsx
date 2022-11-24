import React from "react";
import styles from "./input.module.scss";

function Input({ label, type, placeholder,names,values,onChange }) {
  return (
    <div>
      <form>
        <div className="form-group d-flex my-2">
          <label  className="mx-2">{label}</label>
          <input type={type} name={names} value={values} onChange={onChange} placeholder={placeholder} />
        </div>
      </form>
    </div>
  );
}
export default Input;
