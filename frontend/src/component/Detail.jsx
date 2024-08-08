import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Detail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-stone-200 text-black">
          {/* if there is a button in form, it will close the modal */}
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_3").close()}
          >
            ✕
          </Link>

          <h3 className="font-bold text-lg">LogIn</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
            {/* email */}
            <div className="space-y-2">
              <span>Email</span>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md text-black bg-stone-200"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-xs text-red-600">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* password */}
            <div className="space-y-2 mt-8">
              <span>Password</span>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md bg-stone-200 text-black"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <span className="text-xs text-red-600">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* button */}
            <div className="flex justify-around mt-5">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Detail;
