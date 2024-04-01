import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="text-4xl " >Welcome to dream Journel</div>
        <div>Meeting you really soon !</div>
        <div className="flex flex-row gap-2 ">
          <Link to={"/signup"} className="bg-black rounded-md text-white p-3 mt-2 hover:bg-slate-700">Signup</Link>
          <Link to={"/signin"} className="bg-black rounded-md text-white p-3 mt-2 hover:bg-slate-700">Signin</Link>
          
        </div>
    </div>
  )
}

export default Home