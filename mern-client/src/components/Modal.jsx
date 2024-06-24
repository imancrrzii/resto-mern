import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Modal = () => {
  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
      <div className="modal-box">
        <div className="modal-action flex flex-col justify-center mt-0">
          <form className="card-body" method="dialog">
            <h3 className="font-bold text-lg">Login now</h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label mt-1">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* error */}

            {/* Login btn */}
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-violet-600 text-white">
                Login
              </button>
            </div>
            <p className="text-center my-2 text-sm">
              Don't have an account?{" "}
              <Link to="/register" className="text-violet-600 underline">
                Register now
              </Link>
            </p>
          </form>
          {/* social login */}
          <div className="text-center space-x-3 mb-5 ">
            <button className="btn btn-circle hover:bg-violet-600 hover:text-white">
              <FaGoogle />
            </button>
            <button className="btn btn-circle hover:bg-violet-600 hover:text-white">
              <FaFacebook />
            </button>
            <button className="btn btn-circle hover:bg-violet-600 hover:text-white">
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
