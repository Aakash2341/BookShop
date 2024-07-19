import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("user", JSON.stringify(res.data.user));
          }, 3000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);

          toast.error("error :" + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-stone-200 text-black">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").closed()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">LogIN</h3>
            {/*email*/}
            <div className=" mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md  text-black bg-stone-200"
                {...register("email", { required: true })}
              />
              <br />
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
                className="w-80 px-3 py-1 border rounded-md  bg-stone-200  text-black
              "
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className=" text-xs text-red-600">
                  This field is required
                </span>
              )}
            </div>
            {/* button */}

            <div className="flex justify-around mt-5">
              <button className=" bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not Registered?{" "}
                <Link to="/signup">
                  <span className=" underline text-blue-500 cursor-pointer">
                    {" "}
                    SignUp
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
