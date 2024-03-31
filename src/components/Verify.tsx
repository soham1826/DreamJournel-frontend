

import { useRef, useState } from 'react';


// declare type for the props


type InputProps = {
  length?: number;
  onComplete: (pin: string) => void;
  email:string;
};


const Verify = ({ length, onComplete, email }: InputProps) => {
  // if you're not using Typescript, simply do const inputRef = useRef()


  const inputRef = useRef<HTMLInputElement[]>(Array(length).fill(null));


  // if you're not using Typescript, do useState()
  const [OTP, setOTP] = useState<string[]>(Array(length).fill(''));


  const handleTextChange = (input: string, index: number) => {
    const newPin = [...OTP];
    newPin[index] = input;
    setOTP(newPin);


    // check if the user has entered the first digit, if yes, automatically focus on the next input field and so on.


    if (input.length === 1 && index < length - 1) {
      inputRef.current[index + 1]?.focus();
    }


    if (input.length === 0 && index > 0) {
      inputRef.current[index - 1]?.focus();
    }


    // if the user has entered all the digits, grab the digits and set as an argument to the onComplete function.


    if (newPin.every((digit) => digit !== '')) {
      onComplete(newPin.join(''));
    }
  };


  // return the inputs component


  return (
    <div className='flex max-w-4xl flex-col'>
      <div className='text-4xl font-semibold mb-5'>Verify Your Email</div>
      <div className='text-2xl mb-4'>Enter the OTP sent to {email}</div>
      <div className={`grid grid-cols-4 gap-2`}>
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={OTP[index]}
          onChange={(e) => handleTextChange(e.target.value, index)}
          ref={(ref) => (inputRef.current[index] = ref as HTMLInputElement)}
          className={`border-2 border-solid border-slate-800 focus:border-blue-500 p-5 outline-none rounded-md h-[80px] w-[80px]`}
          style={{ marginRight: index === length - 1 ? '0' : '10px' }}
        />
      ))}
    </div>
    </div>
    

  );
};


export default Verify;