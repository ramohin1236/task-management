/* eslint-disable react/no-unescaped-entities */

import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const {signInUser} =useContext(AuthContext)
    const { register, handleSubmit,  formState: { errors } } = useForm();


    console.log("login state",location.state.from.pathname)

    const onSubmit =async(data) => {
        console.log(data)
        
        signInUser(data.email, data.password)
        .then(result=>{
            const user= result.user;
            navigate(location.state.from.pathname)
            toast.success("Logged in")
            console.log(user);
        })
       
        console.log(errors);
     
    };
    return (
        <div className="hero min-h-screen bg-base-200 ">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <p  className="label-text-alt ">Haven't any account? please 
            <Link  className='text-xl ml-4'to='/registration'>Regestration</Link>
            </p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;