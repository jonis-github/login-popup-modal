import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn, FaEye, FaEyeSlash  } from "react-icons/fa";

function SignIn( { handleSignIn } ) {
    const [ showPassword, setShowPassword ] = useState( false )
    
    return(
        <>
            <div className="p-5"    >
                <h1 className="text-2xl text-gray-600 font-semibold text-center mb-4">Create Your Account</h1>
                
                <form className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="username" className="input-label">Username</label>
                        <input type="text" id="username" className="input"/>
                    </div>

                    <div>
                        <label htmlFor="email" className="input-label">Email</label>
                        <input type="email" id="email" className="input"/>
                    </div>

                    <div>
                        <label htmlFor="password" className="input-label">Password</label>
                        
                        <div className="relative">
                            <input 
                                id="password" 
                                className="input pr-8"
                                type={ showPassword ? "text" : "password" }
                            />

                            {
                                showPassword ? 
                                (
                                    <FaEyeSlash 
                                        className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 cursor-pointer" 
                                        onClick={ () => { setShowPassword( !showPassword ) } }
                                    />
                                ) 
                                : 
                                (
                                    <FaEye 
                                        className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 cursor-pointer" 
                                        onClick={ () => { setShowPassword( !showPassword ) } }
                                    />
                                )
                            }
                        </div>
                    </div>
                </form>

                <button className="bg-blue-500 hover:bg-blue-500/80 rounded-full mt-7 text-white py-1 px-5 block w-full">
                    Submit
                </button>

                <p className="text-center text-gray-500 text-sm my-3">or login with</p>

                <div className="flex gap-4 justify-center">
                    <FcGoogle className="text-2xl text-gray-600 grayscale hover:grayscale-0 transition-200" />
                    <FaLinkedinIn className="text-2xl text-gray-600 hover:text-blue-500 transition-200" />
                </div>

                <p 
                    className="text-center text-sm text-gray-500 cursor-pointer hover:text-blue-500 my-3"
                    onClick={ handleSignIn }
                >
                    Already have Account? Login here
                </p>
            </div>
        </>
    )
}

export { SignIn }