import React, {useState} from "react";
import "./SignupData.css";

 const SignupData = () => {
    const [action,setAction] = useState("Sign Up");
    
  return (
    <div className="cont">
        <div className="header">
            <div className="txt">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>: <div className="input">
            <i class="fa-solid fa-user"></i>
                <input type="text" placeholder="Name"/>
            </div>}
           
            <div className="input">
            <i class="fa-solid fa-envelope"></i>
                <input type="email" placeholder="Email"/>
            </div>
            <div className="input">
            <i class="fa-solid fa-lock"></i>
                <input type="password" placeholder="Password"/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
        
        <div className="submit-cont">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}><button>Sign Up</button></div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}><button>Login</button></div>
        </div>
    </div>
  );
}
export default SignupData;
