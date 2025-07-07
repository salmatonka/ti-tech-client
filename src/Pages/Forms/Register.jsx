import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaUser, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FadeLoader, PropagateLoader } from 'react-spinners';
import useToken from '../../hooks/useToken';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';
const Register = () => {
  // useTitle('SignUp');
  const [formError, setFormError] = useState('');
  const [loading, setLoading] = useState(false);
  const { createUser, updateUser, setUser, loginWithGoogle } = useContext(AuthContext);
  const { register, formState: { errors }, handleSubmit } = useForm('');
  const navigate = useNavigate();
  const handleToken = useToken();

  const submitHandler = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        const userInfo = {
          name: data.name,
          email: data.email,
          role: data.role,
        };
        fetch("https://ti-server-585b.onrender.com/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((result) =>
            console.log(result)
          )
          .catch((err) => toast.error("Oops", `${err.message}`, "error"));
        setUser(userInfo);
        handleToken(data.email);
        toast.success("Logged in successfully")
        navigate('/');
        window.location.reload();

        // update user
        updateUser(data.name)
          .then(() => { })
          .catch((err) => {
            toast.error(("Oops", `${err.message}`, "error"))
            toast.success("Registered successfully")
          })
      })
      .catch((err) => toast.error(("Oops", `${err.message}`, "error")));
  };



  // Saving User 
  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        const userInfo = {
          name: user.displayName,
          email: user.email,
          role: "buyer",
        };
        fetch("https://ti-server-585b.onrender.com/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((result) => console.log(result))
          .catch((err) => console.error(err))
      })
      .catch((err) => toast.error(("Opps!", `${err.message}`, "error")));
  };




  return (
    <div className="hero min-h-screen py-10 mx-auto w-full flex justify-center items-center">
      <div className="grid lg:grid-cols-2 gap-6 w-full max-w-4xl shadow-lg p-8 border border-sky-500 border-opacity-30 rounded-lg">
        {/* Left Section - Sidebar */}
        <div className="hidden lg:flex flex-col items-center justify-center p-4 border-r border-gray-300">
          <FaUser className='text-6xl text-sky-500 mb-4' />
          <h1 className="text-3xl font-bold text-center text-sky-500">Register Now!</h1>
          <p className="text-gray-500 text-sm text-center">Join us and explore amazing features!</p>
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-4/5 mx-auto">
          <form onSubmit={handleSubmit(submitHandler)} className="space-y-3">
            {/* Role Selection */}
            <div>
              <label className="label text-sm">Register As:</label>
              <select {...register("role", { required: 'Role is required' })} className="select select-bordered w-full text-sm">
                <option value="admin">Admin</option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </div>

            <div>
              <label className="label text-sm">Name</label>
              <input type="text" {...register("name", { required: 'Name is required' })} className="input input-bordered w-full text-sm" />
              {errors.name && <p className='text-error text-xs'>{errors.name.message}</p>}
            </div>
            <div>
              <label className="label text-sm">Email</label>
              <input type="email" {...register("email", { required: 'Email is required' })} className="input input-bordered w-full text-sm" />
              {errors.email && <p className='text-error text-xs'>{errors.email.message}</p>}
            </div>

            {/* Password Field */}
            <div>
              <label className="label text-sm">Password</label>
              <input type="password" {...register("password", {
                required: 'Password is required',
                pattern: { value: /(?=.*[a-z])(?=.*[A-Z])/, message: 'Must contain Uppercase & Lowercase' },
                minLength: { value: 6, message: 'Minimum 6 characters' }
              })} className="input input-bordered w-full text-sm" />
              {errors.password && <p className='text-error text-xs'>{errors.password.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className='w-full btn bg-sky-500 text-white hover:bg-sky-600 border border-sky-500'
              disabled={loading}>
              {loading ? <PropagateLoader size={15} color="blue" /> : "Register"}
            </button>

            {/* Form Error */}
            {formError && <p className='text-error text-xs text-center'>{formError}</p>}

            {/* Login Link */}
            <p className="text-center text-sm">
              Already have an account? <Link className='text-sky-500' to='/logIn'>Login</Link>
            </p>

            {/* Divider */}
            <div className='divider text-xs'>OR</div>

            {/* Google Login Button */}
            <button
              onClick={handleLoginWithGoogle}
              className='w-full btn border border-sky-500 font-bold text-sky-500 hover:text-gray-200
               hover:bg-sky-500 shadow-md '
              disabled={loading}>
              {loading ? <PropagateLoader color='blue' size={10} /> :<>
              <FaGoogle className=' text-lg mr-2' /> Continue With Google
              </>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};


export default Register
