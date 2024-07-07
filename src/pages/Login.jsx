import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { authenticate, login } from "../helper/auth";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await login(data);

      console.log(res, "000");
      if (res.token) {
        toast.success("user logedin");
        return authenticate(res.token, () => {
          return navigate("/");
        });
      } else {
        toast.error(res.error);

        navigate("/login");
      }
    } catch (error) {
      toast.error(error);
      console.log(error, "999");
    }

    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="modal-box">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          <h3 className="font-bold text-lg text-center">Login</h3>
          <div className="space-y-5">
            {/* Email */}
            <div>
              <span className="text-xl ">Email</span>
              <br />
              <input
                type="email"
                placeholder="Email"
                className="my-5 p-2 w-full outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm  text-red-400">
                  This field is required
                </span>
              )}
            </div>
            {/* "Password */}
            <div>
              <span className="text-xl ">Password</span>
              <br />
              <input
                type="password"
                placeholder="Password"
                className="my-5 p-2 w-full outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm  text-red-400">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-gray-500 text-white p-2 hover:bg-slate-800  rounded-md cursor-pointer "
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
