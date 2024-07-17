import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="  h-screen flex items-center justify-center bg-white">
        <div className="w-[600px] ">
          <div className=" modal-box text-black bg-white">
            <form onSubmit={handleSubmit(onSubmit)} method="div">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </Link>

              <h3 className="font-bold text-lg">SignUp</h3>
              {/*name*/}
              <div className=" mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="name"
                  placeholder="Enter your Fullname"
                  className="w-80 px-3 py-1 border rounded-md  text-black bg-stone-200"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-xs text-red-600">
                    This field is required
                  </span>
                )}
              </div>
              <div className=" mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md  text-black bg-stone-200"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-xs text-red-600">
                    This field is required
                  </span>
                )}
              </div>
              {/*password*/}
              <div className="  space-y-2 mt-8">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md  bg-stone-200  text-black"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className=" text-xs text-red-600">
                    This field is required
                  </span>
                )}
              </div>
              {/* button */}

              <div className="flex justify-around mt-5">
                <button className=" bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  SignUp
                </button>
                <p>
                  Have Account?{" "}
                  <span
                    className=" underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    {" "}
                    Login
                  </span>
                  <Login></Login>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
