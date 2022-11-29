import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthProvider';
import { saveUser } from '../../Hooks/SaveUser';
import useToken from '../../Hooks/UseToken';
import './SignUp.css';



const Signup = () => {
    const { createUser, signInWithGoogle, updateUser } = useContext(AuthContext);
    // const [toggle, setToggle] = useState(false);    
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [signUpError, setSignUPError] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();
    if(token){
        navigate('/')
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const role =  form.role.value;
       
        setSignUPError('');
        createUser(email, password)
            .then(result => {
                const user = result.user;
                // saveUser(userB)
                toast.success('User Created Successfully.')
                const userInfo = {
                    displayName: name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(name, email, role)
                    })
                    .catch(error => console.error(error))
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
           form.reset();
    }
    const saveUser = (name, email, role) =>{
        const user ={name, email, role};
        fetch('https://carbs-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            setCreatedUserEmail(email);
        })
    }
    const googleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
                setCreatedUserEmail(user?.email)
                // const userB = {
                //     email: user?.email,
                //     name: user?.displayName,
                //     role: "buyer",
                // }
                saveUser(user?.displayName, user?.name);
                toast.success('You are now our registered customer')
            })
            .catch(error => console.error(error))
    }
    return (

        <div className='flex justify-center items-center pt-8'>
            <div className='flex flex-col max-w-md p-6 rounded-md login text-white'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Register</h1>
                </div>
                <form onSubmit={handleSubmit} noValidate='' action='' className='space-y-12 ng-untouched ng-pristine ng-valid'>
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm text-start'>
                                Name
                            </label>
                            <input type='text' name='name' id='name' placeholder='Enter Your Name Here' className='w-full px-3 py-2 border rounded-md border-white text-black' data-temp-mail-org='0' />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm text-start'>
                                Email address
                            </label>
                            <input type='email' name='email' id='email' placeholder='Enter Your Email Here' className='w-full px-3 py-2 border rounded-md border-white text-black' data-temp-mail-org='0' />
                        </div>
                        <div>
                            <div className='flex justify-between mb-2'>
                                <label htmlFor='password' className='text-sm text-start'>
                                    Password
                                </label>
                            </div>
                            <input type='password' name='password' id='password' placeholder='password' className='w-full px-3 py-2 border rounded-md text-black' />
                        </div>
                        <div className='form-control w-full max-w-xs'>
                            <label className="label"> <span className="label-text text-white">Choose Role</span></label>
                            <select  type="role" name="role" className='w-full border py-2 max-w-xs mt-3 rounded-xl text-black'>
                                <option value="seller">Seller</option>
                                <option value="buyer">Buyer</option>
                            </select>
                        </div>
                        {/* <div className="form-control mt-2">
                            <label className="cursor-pointer label">
                                <span className="label-text text-white">Seller</span>
                                <input type="checkbox" onClick={() => setToggle(!toggle)} className="checkbox checkbox-success" />
                            </label>
                        </div> */}
                    </div>
                    <div className='space-y-2'>
                        <div>
                            <button style={{ border: '1px solid white' }}
                                type='submit'
                                className='w-full px-8 py-3 font-semibold rounded-md  hover:text-white text-white hover:border-none'
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </form>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 '></div>
                    <p className='px-3 text-sm'>
                        Signup with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 '></div>
                </div>
                <div className='flex justify-center space-x-4'>
                    <button onClick={googleSignIn} aria-label='Log in with Google' className='p-3 rounded-sm'>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' className='w-5 h-5 fill-current'>
                            <path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'></path>
                        </svg>
                    </button>
                </div>
                <p className='px-6 text-sm text-center text-white'>
                    Already have an account yet?{' '}
                    <Link to='/login' className='hover:underline text-white'>
                        Sign In
                    </Link>

                </p>
            </div>
        </div>
    );
};

export default Signup;