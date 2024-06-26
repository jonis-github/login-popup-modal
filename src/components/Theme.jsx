import { BiSolidSun, BiSolidMoon  } from "react-icons/bi";

function Theme( { theme, toggleTheme } ) {
    
    return(
        <>
            {
                theme === "dark" ?
                (
                    <BiSolidSun 
                        className="text-2xl cursor-pointer select-none" 
                        onClick={ toggleTheme  } 
                    /> 
                ) 
                :
                (
                    <BiSolidMoon 
                        className="text-2xl cursor-pointer select-none"
                        onClick={ toggleTheme }
                    />
                )
            }
        </>
    )
}

export { Theme }