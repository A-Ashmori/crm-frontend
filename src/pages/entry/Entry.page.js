import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import { LoginForm } from "../../components/login/Login.comp";
import "./entry.style.css";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmLoad, setFrmLoad] = useState("login");

  const handleOnChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();

    if (!email || !password) {
      // can add more requirements, do that later
      return alert("Fill up the inputs NURD!!!");
    }

    console.log(email, password);
  };

  const handleOnResetSubmit = e => {
    e.preventDefault();

    if (!email) {
      // can add more requirements, do that later
      return alert("Please Enter the Email!");
    }

    console.log(email);
  };


  const formSwitcher = (frmType) => {
    setFrmLoad(frmType);
  }


  return (
    <div className="entry-page bg-info">
      <Card className="form-box" style={{ width: '24rem' }}>
        <Card.Body>
          {frmLoad === 'login' && <LoginForm
           handleOnChange={handleOnChange}
           handleOnSubmit={handleOnSubmit}
           formSwitcher={formSwitcher}
           email={email}
           pass={password}
         />}
         
         {frmLoad === 'reset' &&<ResetPassword
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
            email={email}
          />}
        </Card.Body>
      </Card>
    </div>
  );
};
