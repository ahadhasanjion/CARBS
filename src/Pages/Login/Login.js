import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useLocation} from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../Hooks/UseToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location =useLocation();
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }


    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }
    const googleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('LOg In Successfully')
                navigate('/')

            })
            .catch(error => console.error(error))
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 login'>
                <h2 className='font-bold text-center text-white text-3xl'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-white">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-white'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-white">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-white'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn hover:bg-white hover:text-red-600 w-full mt-4 login text-white outline-none border-hidden' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-white'>{loginError}</p>}
                    </div>
                </form>
                <p className='text-white text-center mt-5'>New to CARBS ? <Link className='text-white' to="/signup">Create new Account</Link></p>
                <div className="divider text-white">OR</div>
                <button onClick={googleSignIn} class="inline-block w-full rounded border border-red-600 px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-red-600 focus:outline-none focus:ring">
                    SIGN UP WITH GOOGLE
                </button>
            </div>
        </div>
    );
};

export default Login;