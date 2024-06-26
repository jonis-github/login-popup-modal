import { useRef, useState } from "react";
import BgImage from "../assets/bg-image.jpg"
import { Login, SignIn } from "."

function LoginPopUpModal( { loginPopUp, toggleLoginPopUp } ) {
    // const [ showPassword, setShowPassword ] = useState( false )
    const [ showSignIn, setShowSignIn ] = useState( false )
    const loginPopupRef = useRef()

    const handleSignIn = () => {
        setShowSignIn( !showSignIn )
    }

    const bgImage = {
        backgroundImage: `url( ${ BgImage } )`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
        // borderRadius: "0 16px 16px 0"
    }

    window.addEventListener( "click", ( e ) => {
        if( e.target === loginPopupRef.current ) {
            toggleLoginPopUp()
        }
        // console.log( loginPopUp.current )
        // console.log( e.target )
    } )

    return(
        <>
          {
            loginPopUp && 
            <div 
                ref={ loginPopupRef }
                className="fixed top-0 w-full h-full z-50 overflow-y-auto bg-white/5 "
            >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-md w-[90%] sm:w-auto bg-white h-[472px]">
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center sm:w-[600px] md:w-[700px] relative ">
                            {/* login form section */}
                            {/* <div className="p-5"    >
                                <h1 className="text-2xl text-gray-600 font-semibold text-center mb-4">Login</h1>
                                
                                <form className="flex flex-col gap-4">
                                    <div>
                                        <label htmlFor="username" className="input-label">Username</label>
                                        <input type="text" id="username" className="input"/>
                                    </div>

                                    <div>
                                        <label htmlFor="username" className="input-label">Password</label>
                                        
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

                                <p className="text-center text-sm text-gray-500 cursor-pointer hover:text-blue-500 my-3">No Account? create Account here</p>
                            </div> */}

                            {
                                showSignIn ? 
                                (
                                    // signup form section
                                    <SignIn handleSignIn={ handleSignIn } />
                                ) 
                                : 
                                ( 
                                    // login form section
                                    <Login handleSignIn={ handleSignIn } /> 
                                )
                            }
                                
                            {/*  login form section  */}
                            

                            {/* image section */}
                            <div style={ bgImage } className="w-full rounded-r-2xl">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
          }  
        </>
    )
}

export { LoginPopUpModal }