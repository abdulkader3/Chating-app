import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa"
import Lottie from "lottie-react";
import LoginAnimetion from '../../public/animetion/LoginAnimation.json'

import "./Home.css";

const HomePage = () => {
  // useState for email input
  const [email, upemail] = useState("");
  const [emailEror, upemailEror] = useState("");
  
  
  const [password, uppassword] = useState("");
  const [passwordEror, uppasswordEror] = useState("");

 // for icons
 const [one , two]=useState(false)

 const nextIcon =()=>{
    two(!one)
 }



  // Function for form

  const funForEmail = (e) => {
    
    upemail(e.target.value);
    upemailEror('')
  };
  
  const funForpassword = (e) => {
    
    uppassword(e.target.value);
    uppasswordEror('')
  };




  const SubForForm = (e) => {
    e.preventDefault();

    if(!email){
      upemailEror('please enter your email')
    }else if(!password){
        uppasswordEror('please enter your password')
    }else{
        upemailEror('')
        uppasswordEror('')

    }


    
  };








  return (
    <>
      <div className=" flex ">
        <div className=" w-[500px] gap-40 h-full ">
          <Lottie animationData={LoginAnimetion}/>
        </div>
        <div className="warper mr-[390px] font-poppins rounded-[12px] ">
        <form onSubmit={SubForForm}>
          <h1 className=" text-[35px] text-center font-poppins font-semibold ">
            Login
          </h1>
          <div className="inputBox">
            <input
              type="email"
              onChange={funForEmail}
              placeholder="Your email please"
            />
            <FaUser className="icons" />
            
          </div>
          <div className="mb-8"><p className="pl-5 text-[#8bcfff] text-[12px] " > {emailEror} </p></div>
          


          <div className="inputBox">
            <input type={one? 'text' : 'password'} onChange={funForpassword} placeholder="Your password please" />
            {
                one?<FaUnlock className="icons" onClick={nextIcon} /> :<FaLock className="icons" onClick={nextIcon} />
                
            }
            
          </div>
          <div className="mb-8"><p className="pl-5 text-[#8bcfff] text-[12px] " > {passwordEror} </p></div>
          <div className="rememberForgot">
            <label>
              {" "}
              <input type="checkbox" />
              Remember me{" "}
            </label>
            <a href="#"> forgot password ? </a>
          </div>
          <button
            type="submit"
            className=" w-full h-[45px] active:scale-105 transition-all border-none outline-none shadow-md cursor-pointer text-[17px] text-[#333] font-semibold rounded-[40px] text-black bg-white "
          >
            Login
          </button>
          <div className="registerlink text-[15px] text-center mt-5 ">
            <p>
              Don't have an account ?{" "}
              <a className="  " href="#">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default HomePage;
