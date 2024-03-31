
import { Link, useNavigate } from "react-router-dom"
import Inputs from "./nested/Inputs"
import { useState } from "react"
import axios, { AxiosError } from "axios"
import {BACKEND_URL} from "../../config"
import Verify from "./Verify";

type signUpInputs = {
    name:string,
    email:string,
    password:string

}
const Signup = () => {
const navigate = useNavigate();
const[inputs,setInputs] = useState<signUpInputs>({
    name:"",
    email:"",
    password:""
})
const[verifyView , setVerifyView]  = useState<boolean>(false);
const[currentOTP , setCurrentOTP]  = useState<string>("");

const  handleSignup = async()=>{
    try {
        const res = await axios.post(`${BACKEND_URL}/register/`,inputs)
        if(res){
           setVerifyView(true);
           setCurrentOTP(res.data.otp)
           console.log("Signup successfull")
        }
         
    } catch (error) {
        console.log("Some error occured")
    }
    
}

const handleOtp = async(pin:string)=>{
    try {
        const res = await axios.post("https://apidreamjournal.pythonanywhere.com/api/verify/",{
            email:inputs.email,
            otp:parseInt(pin)
        })
        if(res){
            console.log(res.data.msg)
            navigate("/");

        }
    } catch (error:any){
        let msg = "eroor occured"
        if (error.response && error.response.data && error.response.data.message) {
        msg = error.response.data.message;
        } else if (error.message) {
        msg = error.message;
        }

    console.log(msg);
    }
}

  return (
    <div className="w-screen h-screen flex justify-center items-center">
        {verifyView ? <Verify onComplete={handleOtp}length={4} email={inputs.email} />:<div className=" flex flex-col justify-center items-center h-full max-w-4xl gap-3">
            <div className="text-4xl font-bold">Create an account</div>
           <Inputs label="Your name" placeholder="John" onChange={(e)=>{
            setInputs({
                ...inputs,
                name:e.target.value
                
            })
           }} />
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

           <button onClick={handleSignup} className="bg-black hover:bg-slate-600 w-full text-white rounded-md h-[50px]">
            Signup
           </button>
           <p>Already a Dreamer ? <Link to={"/signin"} className=" underline" >Login</Link></p>
            
        </div> }
    </div>
  )
}

export default Signup