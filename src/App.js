import { useState } from "react";
import { Navbar, Hero, LoginPopUpModal } from "./components";

import BgImage from "./assets/bg-image.jpg"

function App() {
  const [ loginPopUp, setLoginPopUp ] = useState( false )

  const toggleLoginPopUp = () => {
    setLoginPopUp( !loginPopUp )
  }

  const bgImage = {
    backgroundImage: `url( ${ BgImage } )`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100%"
  }
  
  return (
    <>
      <div className={ ` ${ loginPopUp ? "blur-sm bg-black/30" : "" }` } >  
        <div style={ bgImage }>  
          <Navbar toggleLoginPopUp={ toggleLoginPopUp } />

          <Hero toggleLoginPopUp={ toggleLoginPopUp } />
        </div>
      </div>

      <LoginPopUpModal 
        loginPopUp={ loginPopUp } 
        toggleLoginPopUp={ toggleLoginPopUp } 
      />
    </>
  );
}

export default App;

// tutorial video of this project: https://www.youtube.com/watch?v=uSQ0wPgoNh0
