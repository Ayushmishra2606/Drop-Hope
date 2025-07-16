import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";

const Signup = () => {

    const{
        register,
        handleSubmit,
        watch,
        formState:{ errors , isSubmitting },
      } = useForm()

      const delay = (d) =>{
      return new Promise((res , rej)=>{
        setTimeout(() => {
          res()
        },d*1000);
      })
    }

    const onSubmit = async (data) =>{
      await delay(2)
      console.log(data)
    }

  return (
    <>
      <Navbar />
      <div className="h-[85vh] w-[90vw] m-auto flex md:flex-row flex-col-reverse items-center text-[#64748B] gap-7">
        <div className="md:w-1/3 h-[90%] flex flex-col shadow-xl  bg-white rounded-b-xl">
        <div className="bg-[#2563EB] rounded-t-xl">
          <h2 className="text-xl font-bold mb-4 text-center text-white p-3">Benefits of being a member</h2></div>
          <div className="px-3 py-5 overflow-y-scroll scrollbar-hide">
          <ul className="list-none space-y-2 md:text-[15px] ">
            <li>✔ Register as an NGO or an individual to join the community</li>
            <li>
              ✔ Run donation campaigns as an individual to seek help or support
            </li>
            <li>
              ✔ Donate food, clothes, or other items directly to NGOs or individuals in need
            </li>
            <li>
              ✔ Contribute financially to NGOs and support various social causes
            </li>
            <li>
              ✔ Connect and communicate directly with donors and recipients
            </li>
            <li>
              ✔ Build and maintain a personal donation history and track your contributions
            </li>
            <li>
              ✔ Discover verified campaigns and trusted NGOs to ensure your donations make an impact
            </li>
            <li>✔ Gain exposure for your NGO campaigns to a wide audience</li>
            <li>
              ✔ Take part in discussions and share experiences related to donation and social service
            </li>
            <li>
              ✔ Help improve lives and contribute to social change through active participation
            </li>
          </ul></div>
        </div>

        <div className="md:w-2/3 w-full md:h-[90%]  flex flex-col">
        <h1 className="text-3xl font-bold">Sign Up To get Started</h1>
        <h4 className="mt-5">Signing up for an account is free and easy. Fill out the form below to get started.</h4>
        <form action="" onSubmit={handleSubmit(onSubmit)}className='flex flex-col w-full'>
        <label htmlFor="username" className="mt-7">Username</label>
        <input type="text" placeholder="Username" name="" id="" className="w-3/4 h-9 focus:outline-none rounded-md placeholder:p-4 bg-[#b7caf18f] p-3"/>
        <label htmlFor="password"className="mt-7">Password(*7-17 Characters)</label>
         <input type="password" {...register('password' ,{pattern:{
          value: /[A-Za-z0-9!@#$%^&*()_+={}\[\]:;"'<>?,./~`-]{7,17}$/,
          message:"Invalid Format",
        }} ,{required:{value:true , message:"please Enter the password"} }, {minLength: {value:7 , message:"Minimum Seven character"}})}   placeholder='Password' className=' w-3/4 h-9 focus:outline-none rounded-md placeholder:p-4 bg-[#b7caf18f] p-3'/>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
        <input type="submit" disabled={isSubmitting} value="Sign Up" className='mt-6 h-9 w-18 rounded-md bg-[#9ab7f6] text-white cursor-pointer hover:bg-[#2563EB]'/>
        <a href="/register" className='text-blue-600 underline hover:text-blue-800'> already have a account?</a>
        </form>
        </div>
    
        
      </div>
      <Footer/>
    </>
  );
};

export default Signup;
