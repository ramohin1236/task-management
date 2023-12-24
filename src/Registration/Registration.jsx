/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";

const Registration = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit =async(data) => {
        console.log(data)
     
    
 
 
       
            
                
     };
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Registration now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form  onSubmit={handleSubmit(onSubmit)} className="card-body">

      <div className="form-control">
        <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register("name", { required: true })} type="name" placeholder="name" className="input input-bordered" />
        </div>

        <div className="form-control">
        <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <p  className="label-text-alt">Forgot password?</p>
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

export default Registration;