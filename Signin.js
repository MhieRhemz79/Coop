import React, { useState }from 'react'
import './signin.css'
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

const Signin = () => {

  const [popupStyle, showPopup] = useState("hide");

  const popup =() => {
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"), 3000)
  }

  return (

    <>
    <Sidebar />
    <Navbar />

    <page>
    <div className="cover">
      <h1>Signin</h1>
      <input type="text" placeholder="username/email address" />
      <input type="password" placeholder="password" />

      <div className="login-btn" onClick={popup}>Signin</div>
      <p className="text">*PEN-COOP*</p>

  

    <div className={popupStyle}>
      <h3>Login Failed</h3>
      <p>Username or Password Incorrect</p>
    </div>
    </div>
    </page>
    <Footer />

      </>
  );
}

export default Signin;
