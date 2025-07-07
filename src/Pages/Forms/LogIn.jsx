import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle, FaUser } from 'react-icons/fa';
import { Link, redirect, useLocation, useNavigate } from 'react-router-dom';
import { HiKey, HiMail, HiOutlineKey, HiOutlineMail } from 'react-icons/hi';
import { PropagateLoader } from 'react-spinners';
import { AuthContext } from '../../provider/AuthProvider';
import useToken from '../../hooks/useToken';
import { toast } from 'react-toastify';

const LogIn = () => {
    // useTitle('LogIn');
    const [formError, setFormError] = useState('');
    const { setUser, loginUser, loginWithGoogle } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm('');
    const [loading, setLoading] = useState(false);
    const [showAdminInfo, setShowAdminInfo] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const handleToken = useToken();


    const onSubmit = (data) => {
        loginUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                setUser(user);

                // generate a secret token;
                handleToken(user.email);
                toast.success("Logged in successfully")
                navigate(from, { replace: true });
            })
            .catch((err) => toast.error(`${err.message}`));
    };

    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then((result) => {
                const user = result.user;
                const userInfo = {
                    name: user.displayName,
                    email: user.email,
                    role: "buyer",
                };
                fetch("htthttps://ti-server-585b.onrender.com/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(userInfo),
                })
                    .then((res) => res.json())
                    .then(() => {
                        handleToken(user.email);
                        toast.success("Logged in successfully");
                        navigate(from, { replace: true });
                    })
                    .catch((err) => toast.error(`${err.message}`));
            })
            .catch((err) => toast.error(`${err.message}`));
    };


    return (


        <div className="hero min-h-screen py-6 mx-auto w-full flex justify-center items-center">
            <div className="grid lg:grid-cols-2 gap-6 w-full max-w-4xl shadow-lg p-8  rounded-lg">
                <div className=" lg:flex flex-col items-center justify-center p-4 ">
                    <FaUser className='text-3xl mx-auto ' />
                    <h1 className="text-3xl font-bold text-center">Login now!</h1>
                    <p className="py-6">Create your student account today!</p>
                    <div className='mx-auto'>
                        <button onClick={() => setShowAdminInfo(!showAdminInfo)} className="text-md text-secondary flex items-center justify-center">Admin Login Info ▼</button>
                        {showAdminInfo && (
                            <div className='text-xs p-2 border rounded-md mt-2 bg-gray-100'>
                                <p><HiOutlineMail className='inline mr-1' /> ad@min.com</p>
                                <p><HiOutlineKey className='inline mr-1' /> iamAdmin</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="card w-full ">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2 className='text-2xl font-semibold text-center'>LogIn</h2>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: 'Email is required' })} placeholder="Your email" className="input input-bordered w-full" />
                                {errors.email && <p className='text-error'>{errors.email.message}</p>}
                            </div>
                            <div className="form-control w-full mt-2">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: 'Password is required',
                                    pattern: { value: /(?=.*[a-z])(?=.*[A-Z])/, message: 'Password must contain uppercase and lowercase letters' },
                                    minLength: { value: 6, message: 'Password must be at least 6 characters long' }
                                })} placeholder="Your Password" className="input input-bordered w-full mb-2" />
                                {errors.password && <p className='text-error'>{errors.password.message}</p>}
                            </div>
                            {/* <label className="mt-1">Forgot password? <span onClick={handlePasswordReset} className="link-hover link-error cursor-pointer">Reset it</span></label> */}
                            <button
                                type="submit"
                                className='w-full btn my-3  font-bold bg-secondary text-gray-100 hover:bg-sky-500 shadow-md '
                                disabled={loading}>
                                {loading ? <PropagateLoader color='blue' size={10} /> : "LogIn"}
                            </button>
                            
                            {formError && <p className='text-error'>{formError}</p>}
                            <p>New to Last Book? <Link className='text-secondary link-hover' to='/register'>Register</Link></p>
                       
                       {/* Google Login Button */}
                            <button
                                onClick={handleLoginWithGoogle}
                                className='mt-2 w-full btn border border-sky-500 font-bold text-sky-500 hover:text-gray-200
                                          hover:bg-sky-500 shadow-md '
                                disabled={loading}>
                                {loading ? <PropagateLoader color='blue' size={10} /> : <>
                                    <FaGoogle className=' text-lg mr-2' /> Continue With Google
                                </>}
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogIn
