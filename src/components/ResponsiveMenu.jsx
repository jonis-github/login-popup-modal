

function ResponsiveMenu( { showMenu, toggleMenu, desktopMenus, toggleLoginPopUp } ) {
    return(
        <>
            <div className={`${ showMenu ? "left-0" : "left-[-100%] z-[-1px]" } z-50 h-[100%] w-[50%] fixed bg-blue-300 transition-all duration-200 sm:hidden`}>
                
                    <ul className="flex flex-col gap-3 mt-2 ">
                        {
                            desktopMenus.map( ( { name, href }, i ) => (
                                <li key={ i } className="hover:bg-blue-900/50 text-center duration-200">
                                    <a 
                                        href={ href } 
                                        onClick={ 
                                            () => {
                                                if( name === "Login" ) { 
                                                    toggleLoginPopUp() 
                                                    toggleMenu()
                                                }
                                            }
                                        }
                                    >
                                        { name }
                                    </a>
                                </li>
                            ) )
                        }
                    </ul>
                
            </div>
        </>
    )
}

export { ResponsiveMenu }