import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const password = watch("password");
  const role = watch("role");
  const ngoFields = [
    "Education",
    "Healthcare",
    "Environment",
    "Women Empowerment",
    "Child Welfare",
    "Animal Welfare",
    "Disaster Relief",
    "Poverty Alleviation",
    "Others",
  ];
  const navigate = useNavigate();

  const delay = (d) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    await delay(2);
    console.log(data);
    navigate('/login')
  };

  return (
    <>
      <Navbar />
      <div className="h-[100vh] w-[90vw] m-auto flex md:flex-row flex-col-reverse  text-[#64748B] gap-7 mt-5 overflow-y-auto">
        <div className="md:w-1/3 h-[78%] flex flex-col shadow-xl  bg-white rounded-b-xl">
          <div className="bg-[#2563EB] rounded-t-xl">
            <h2 className="text-xl font-bold mb-4 text-center text-white p-3">
              Benefits of being a member
            </h2>
          </div>
          <div className="px-3 py-5 overflow-y-scroll scrollbar-hide">
            <ul className="list-none space-y-2 md:text-[15px] ">
              <li>
                ✔ Register as an NGO or an individual to join the community
              </li>
              <li>
                ✔ Run donation campaigns as an individual to seek help or
                support
              </li>
              <li>
                ✔ Donate food, clothes, or other items directly to NGOs or
                individuals in need
              </li>
              <li>
                ✔ Contribute financially to NGOs and support various social
                causes
              </li>
              <li>
                ✔ Connect and communicate directly with donors and recipients
              </li>
              <li>
                ✔ Build and maintain a personal donation history and track your
                contributions
              </li>
              <li>
                ✔ Discover verified campaigns and trusted NGOs to ensure your
                donations make an impact
              </li>
              <li>✔ Gain exposure for your NGO campaigns to a wide audience</li>
              <li>
                ✔ Take part in discussions and share experiences related to
                donation and social service
              </li>
              <li>
                ✔ Help improve lives and contribute to social change through
                active participation
              </li>
            </ul>
          </div>
        </div>

        <div className="md:w-2/3 w-full md:h-auto h-auto  flex flex-col">
          <h1 className="text-3xl font-bold">Sign Up To get Started</h1>
          <h4 className="mt-5">
            Signing up for an account is free and easy. Fill out the form below
            to get started.
          </h4>
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full"
          >
            <label htmlFor="username" className="mt-7">
              Username (*4-15 Characters)
            </label>
            <input
              type="text"
              placeholder="Username"
              maxLength={15}
              {...register("username", {
                required: "Username is Required",
                pattern: {
                  value: /[A-Za-z0-9]{4,15}$/,
                  message: "Only Use Alphabets and Digits",
                },
              })}
              className="w-3/4 h-9 focus:outline-none rounded-md placeholder:p-4 bg-[#b7caf18f] p-3"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
            <label htmlFor="password" className="mt-7">
              Password (*7-17 Characters)
            </label>
            <input
              type="password"
              maxLength={17}
              minLength={7}
              {...register(
                "password",
                {
                  pattern: {
                    value: /[A-Za-z0-9!@#$%^&*()_+={}\[\]:;"'<>?,./~`-]{7,17}$/,
                    message: "Invalid Format",
                  },
                },
                {
                  required: {
                    value: true,
                    message: "please Enter the password",
                  },
                },
                { minLength: { value: 7, message: "Minimum Seven character" } }
              )}
              placeholder="Password"
              className=" w-3/4 h-9 focus:outline-none rounded-md placeholder:p-4 bg-[#b7caf18f] p-3"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
            <label htmlFor="confirm" className="mt-5">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="w-3/4 h-9 focus:outline-none rounded-md placeholder:p-4 bg-[#b7caf18f] p-3"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
            <label htmlFor="email" className="mt-5">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="email"
              className="w-3/4 h-9 focus:outline-none rounded-md placeholder:p-4 bg-[#b7caf18f] p-3"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <label htmlFor="typ" className="mt-5">
              Join as
            </label>
            <div>
              <label htmlFor="ngo" className="mx-3">
                NGO
              </label>
              <input
                type="radio"
                value="ngo"
                {...register("role", { required: "Please select a role" })}
              />
              <label htmlFor="individual" className="mx-3">
                Individual
              </label>
              <input
                type="radio"
                value="individual"
                {...register("role", { required: "Please select a role" })}
              />
              {errors.role && (
                <p className="text-red-500 text-sm">{errors.role.message}</p>
              )}
            </div>

            {role === "ngo" && (
              <div className="flex flex-col w-full h-[28vh] overflow-y-scroll scrollbar-hide">
                <input
                  type="text"
                  placeholder="NGO Name"
                  {...register("ngoName", { required: "NGO Name is required" })}
                  className="w-3/4 h-9 focus:outline-none rounded-md placeholder:p-4 bg-[#b7caf18f] p-3"
                />
                {errors.ngoName && (
                  <p className="text-red-500 text-sm">
                    {errors.ngoName.message}
                  </p>
                )}
                <label htmlFor="fieldOfWork" className="mt-3">
                  Select NGO Field of Work
                </label>
                <select
                  id="fieldOfWork"
                  {...register("fieldOfWork", {
                    required: "Please select a field of work",
                  })}
                  className="w-2/4 h-9 focus:outline-none rounded-md  bg-[#b7caf18f] p-1"
                  defaultValue=""
                >
                  <option value="" disabled>
                    -- Select Field --
                  </option>
                  {ngoFields.map((field) => (
                    <option key={field} value={field}>
                      {field}
                    </option>
                  ))}
                </select>
                {errors.fieldOfWork && (
                  <p className="text-red-500 text-sm">
                    {errors.fieldOfWork.message}
                  </p>
                )}
                <input
                  type="text"
                  id="city"
                  placeholder="Enter your city"
                  {...register("city", {
                    required: "City is required",
                    pattern: {
                      value: /^[a-zA-Z\s]{2,30}$/, // only letters & spaces, 2–30 characters
                      message: "Enter a valid city name (letters only)",
                    },
                  })}
                  className="w-2/4 h-9 focus:outline-none rounded-md  bg-[#b7caf18f] p-1 mt-5"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city.message}</p>
                )}
                <label htmlFor="Area" className="mt-3">
                  Operational Region
                </label>
                <select
                  id="Area"
                  {...register("Area", {
                    required: "Please select Your Operating Region",
                  })}
                  className="w-2/4 h-9 focus:outline-none rounded-md  bg-[#b7caf18f] p-1"
                  defaultValue=""
                >
                  <option value="" disabled>
                    --Region--
                  </option>
                  <option value="Local">Local</option>
                  <option value="Regional">National</option>
                  <option value="National">National</option>
                </select>
                {errors.Area && (
                  <p className="text-red-500 text-sm">
                    {errors.Area.message}
                  </p>
                )}
              </div>
            )}

            {role === "individual" && (
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  {...register("fullName", {
                    required: "Full Name is required",
                  })}
                  className="w-3/4 h-9 focus:outline-none rounded-md placeholder:p-4 bg-[#b7caf18f] p-3 mt-4"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">
                    {errors.fullName.message}
                  </p>
                )}
                <input
                  type="text"
                  id="city"
                  placeholder="Enter your city"
                  {...register("city", {
                    required: "City is required",
                    pattern: {
                      value: /^[a-zA-Z\s]{2,30}$/, // only letters & spaces, 2–30 characters
                      message: "Enter a valid city name (letters only)",
                    },
                  })}
                  className="w-2/4 h-9 focus:outline-none rounded-md  bg-[#b7caf18f] p-1 mt-5"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city.message}</p>
                )}
              </div>
            )}
            <div className="flex flex-row gap-4  items-center">
            <input
              type="submit"
              disabled={isSubmitting}
              value="Sign Up"
              className="mt-6 h-9 w-18 rounded-md bg-[#9ab7f6] text-white cursor-pointer hover:bg-[#2563EB]"
            />
            <a
              href="/login"
              className="text-blue-600 underline hover:text-blue-800 text-center"
            >
              already have a account?
            </a></div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
