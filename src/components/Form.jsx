import React, { useState } from "react";
import INput from "./INput";
import { inputTexts } from "./data/mockdata";
import Button from "./Button";
import { HideEyes, ShowEyes } from "./SVG";

const Form = () => {
  const [showHide, setShowHide] = useState(true);
  const [formText, setFormText] = useState("");
  const [formPassword, setFormPassword] = useState("");

  const showHideHandle = () => {
    setShowHide(!showHide);
  };
  const onHandleChange = (e) => {
    setFormText(e.target.value)
  }
  const onHandleChangePassword = (e) => {
    setFormPassword(e.target.value)
  }
  const getData = () => {
    let formData = {
      name: formText,
      password: formPassword
    }
  }
  return (
    <div className="register">
      {inputTexts.map((item) => (
        <INput
          type={showHide ? item.type : "text"}
          placeholder={item.placeholder}
          className={item.className}
          onChange={item.type === "password" ? onHandleChangePassword : onHandleChange}
        >
          {item.type === "password" ? (
            showHide ? (
              <ShowEyes onClick={showHideHandle} className="eye"/>
            ) : (
              <HideEyes onClick={showHideHandle} className="eye" />
            )
          ) : (
            ""
          )}
        </INput>
      ))}
      <Button onClick={getData} className="register-btn">Register</Button>
    </div>
  );
};

export default Form;
