import { useEffect, useState } from "react"
import natureLogo from "../assets/nature-logo.png"

import { ResponsiveMenu, Theme } from ".";
import { LuMenu, LuMenuSquare  } from "react-icons/lu";

const desktopMenus = [
    {
        name: "Home",
        href: "#",
    },
    {
        name: "About",
        href: "#",
    },
    {
        name: "Contact",
        href: "#",
    },
    {
        name: "Login",
        href: "#",
    },
]

function Navbar( { toggleLoginPopUp } ) {
    const [ theme, setTheme ] = useState( localStorage.getItem( "theme" ) ? localStorage.getItem( "theme") : "light" )
    const [ showMenu, setShowMenu ] = useState( false )
    const element = document.documentElement

    const toggleTheme = () => {
        setTheme( theme === "light" ? "dark" : "light" )
    }

    const toggleMenu = () => {
        setShowMenu( !showMenu )
    }

    useEffect( () => {
        if( theme === "dark" ) {
            element.classList.add( "dark" )
            localStorage.setItem( "theme", "dark" )
        } else {
            element.classList.remove( "dark" )
            localStorage.removeItem( "theme" )
        }
    }, [ theme ] )

    return(
        <>
        
            <div className="sticky top-0 z-50 ">
                <header className="bg-white/80 shadow-lg py-3 text-gray-800 dark:bg-slate-900 dark:text-white">
                    <div className="container">
                        <nav className="flex justify-between items-center">
                            <a href="#" className=" font-bold text-3x">
                                <img src={ natureLogo } alt="Logo not found" className="h-10 inline mr-1"/>Banora
                            </a>

                            {/* desktop menu */}
                            <div className="hidden sm:block ">
                                <ul className="flex justify-center items-center gap-4">
                                    {
                                        desktopMenus.map( ( { name, href }, i ) => (
                                            <li key={ i }>
                                                <a 
                                                    href={ href } 
                                                    onClick={ () => {
                                                        if( name === "Login" ) { toggleLoginPopUp() }
                                                    } }
                                                    className="hover:text-yellow-500 px-4 py-4 inline-block select-none"
                                                >
                                                    { name }
                                                </a>
                                            </li>
                                        ) )
                                    }
                                    <Theme theme={ theme } toggleTheme={ toggleTheme } />
                                </ul>

                                
                            </div>

                            {/* mobile menu */}
                            <div className="flex items-center gap-3 sm:hidden">
                                {/* <ul>
                                    <li>
                                        <a 
                                            href="#" 
                                            className="text-gray-700 hover:text-gray-900 px-4 py-4 inline-block select-none font-semibold text-xl"
                                        >
                                            Login
                                        </a>
                                    </li>
                                </ul> */}

                                {
                                    showMenu ? 
                                    (
                                        <LuMenuSquare 
                                            size={ 30 } 
                                            onClick={ toggleMenu }
                                        />
                                    ) 
                                    : 
                                    (
                                        <LuMenu 
                                            size={ 30 } 
                                            onClick={ toggleMenu }
                                        />
                                    )
                                }

                                <Theme theme={ theme } toggleTheme={ toggleTheme } />
                            </div>
                        </nav>
                    </div>
                </header>
            </div>

            <ResponsiveMenu 
                showMenu={ showMenu } 
                toggleMenu={ toggleMenu }
                desktopMenus={ desktopMenus } 
                toggleLoginPopUp={ toggleLoginPopUp }
            />
        </>
    )
}

export { Navbar }