import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle, FcPhone } from 'react-icons/fc';
import { FaFacebookSquare } from 'react-icons/fa';

import './Login.css';
import { Auth } from './Auth';

const Login = () => {
    const auth = Auth();
    const [returnUser, setReturnUser] = useState(true);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        if (returnUser) {
            if (data.email, data.password) {
                auth.signInWithEmail(data.email, data.password)
            }
        }else{
            if (data.nem, data.email, data.password) {
                auth.createUser(data.name, data.phone, data.email, data.password)
            }
        }
    };

    
    console.log(auth);
    return (
        <div className="login">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center login-main">
                    <div className="col-md-4 col-sm-12 p-0">
                        <div className="login-form">
                            <h5>Member {returnUser ? "Signin" : "Signup"}</h5>

                            {
                                returnUser ?
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-group">
                                            <input name="email" className="form-control" ref={register({ required: true })} placeholder="Email" />
                                            {errors.email && <span>Email is required</span>}
                                        </div>
                                        <div className="forn-group">
                                            <input name="password" type="password" className='form-control' ref={register({ required: true })} placeholder="Password" />
                                            {errors.password && <span>Password is required</span>}
                                        </div>
                                        <input type="submit" className='btn-brand w-100' value="Sing In" />
                                    </form>

                                    :
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-group">
                                            <input name="name" className="form-control" ref={register({ required: true })} placeholder="Name" />
                                            {errors.name && <span>Name is required</span>}
                                        </div>
                                        <div className="form-group">
                                            <input name="phone" className="form-control" ref={register({ required: true })} placeholder="Phone Number" />
                                            {errors.phone && <span>Phone is required</span>}
                                        </div>
                                        <div className="form-group">
                                            <input name="email" type="email" className="form-control" ref={register({ required: true })} placeholder="Email" />
                                            {errors.email && <span>Email is required</span>}
                                        </div>
                                        <div className="forn-group">
                                            <input name="password" type="password" className='form-control' ref={register({ required: true })} placeholder="Password" />
                                            {errors.password && <span>Password is required</span>}
                                        </div>
                                        <input type="submit" className='btn-brand w-100' value="Sing Up" />
                                    </form>

                            }

                            <div className="d-flex justify-content-between">
                                <button onClick={() => alert('Service not working')}>Forgate Password</button>
                                <button onClick={() => setReturnUser(!returnUser)}>{returnUser ? "Register" : "Sign In" }</button>
                            </div>

                            <hr />

                            {auth.error && <p className="text-danger text-center"><small>{auth.error}</small></p>}

                            <div className="d-flex justify-content-center social-login">
                                <button onClick={() => auth.googleSignIn()}><i className="mr-2"><FcGoogle /></i></button>
                                <button onClick={() => auth.signInWithFb()}><i className="mr-2 text-primary"><FaFacebookSquare /></i></button>
                                <button onClick={() => alert("Under developement")}><i className="mr-2 text-primary"><FcPhone /></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-none d-md-block p-0">
                        <div className="login-banner">
                            <div className="banner-content">
                                <h1 className='section-title-2'>Quick Service <br></br>Resturant</h1>
                                <p className='section-desc-2 font-weight-bold'>Your perfect place to taste delicious food</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;