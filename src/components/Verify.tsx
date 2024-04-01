
import Otpinput from "./OtpInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const navigate = useNavigate();
  const userString : string|null = localStorage.getItem("user");
  let user:any = null ;

  if(userString !== null){
    user = JSON.parse(userString);
  }

  const handleOtp = async(pin:string)=>{
    try {
        const res = await axios.post("https://apidreamjournal.pythonanywhere.com/api/verify/",{
            email:user.email,
            otp:parseInt(pin)
        })
        if(res){
            console.log(res.data.msg)
            navigate("/");

        }
    } catch (error:any){
        let msg = "error occured"
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
      <div className="">
        <Otpinput onComplete={handleOtp} length={4} email={user.email}/>
      </div>
    </div>
  )
}

export default Verify

