
import Inputs from "./nested/Inputs";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../config";

type signInInputs = {
    name:string,
    email:string,
    password:string
}


const Signin = () => {
    const navigate = useNavigate();
    const[inputs,setInputs] = useState<signInInputs>({
        name:"",
        email:"",
        password:""
    })
  

    const  handleSignin = async()=>{
        try {
            const res = await axios.post(`${BACKEND_URL}/login/`,inputs)
            console.log(res.data)
            if(res){
                localStorage.setItem("access-token",res.data.access);
                localStorage.setItem("refresh-token",res.data.refresh);
                navigate("/");
            }
             
        } catch (error) {
            console.log(error);
        }
        
    }
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className=" flex flex-col justify-center items-center h-full max-w-4xl gap-3">
                <div className="text-4xl font-bold">Welcome Dreamer !</div>
               <Inputs label="Email" placeholder="example@gmail.com" onChange={(e)=>{
                setInputs({
                    ...inputs,
                    email:e.target.value
                })
               }} />
               <Inputs label="Password" placeholder="your secret" onChange={(e)=>{
                setInputs({
                    ...inputs,
                    password:e.target.value
                })
               }} />
               <p className ="items-start"><Link to={"/forgot"} className=" underline" >Forgot Password</Link></p>
    
               <button onClick={handleSignin} className="bg-black hover:bg-slate-600 w-full text-white rounded-md h-[50px]">
                Signin
               </button>
               <p>Not a Dreamer ? <Link to={"/signup"} className=" underline" >Signup</Link></p>
                
            </div>
        </div>
      )
}
export default Signin