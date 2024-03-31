import { ChangeEvent } from "react"


const Inputs = ({label , placeholder, onChange}: {label:string,placeholder:string, onChange:(e:ChangeEvent<HTMLInputElement>)=> void}) => {
  return (
    <div className="w-full">
        <label className="block mb-2 text-lg font-medium text-gray-900">{label}</label>
        <input onChange={onChange} type="text"id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg block w-full p-3 " placeholder={placeholder} required />
        </div>
  )
}

export default Inputs