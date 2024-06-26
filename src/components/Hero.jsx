function Hero( { toggleLoginPopUp } ) {
    return(
        <>
            <main>
                <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
                    <h1 
                        className="md:w-[550px] text-center font-dancing text-4xl sm:text-6xl md:text-8xl text-white mix-blend-difference"
                    >
                        Adopt the pace of nature.
                    </h1>

                    <div className="text-white mix-blend-difference text-2xl">
                        <p>This webapp is a sample project. </p> 
                        <p>
                            Here is the original video 
                            <a 
                                className="text-orange-300" 
                                href="https://www.youtube.com/watch?v=uSQ0wPgoNh0"
                            >
                                {" "}Link
                            </a> 
                        </p>
                        <p>Credit to "The Coding Journey"</p>
                    </div>

                    <button 
                        onClick={ () => toggleLoginPopUp() }
                        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded-full"
                    >
                        Join Now
                    </button>
                </div>
            </main>
        </>
    )
}

export { Hero }