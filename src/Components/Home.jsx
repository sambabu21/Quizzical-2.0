import { Link } from "react-router-dom"
import lightBg from "../assets/pattern-light.svg"
import darkBg from "../assets/pattern-dark.svg"

export default function Home({darkMode,toggleDarkMode,setStartGame}){
    return (
        
            <div className="h-screen w-screen relative flex  flex-col justify-center items-center gap-5" style={{backgroundImage:`url(${darkMode?darkBg:lightBg})`,backgroundSize:'cover',backgroundRepeat:'repeat'}}>
                    <h1 className={`text-4xl lg:text-9xl font-semibold flex  ${darkMode?"text-pink-400":"text-pink-950"} mb-5`}>QUIZZICAL</h1>
                    <h3 className={`text-2xl ${darkMode?"text-pink-400":"text-pink-900"} mb-10 font-semibold`}>Tease your brain with random questions from random genres</h3>
                    <Link to="/quiz" onClick={()=>setStartGame(true)} className={`${darkMode?"bg-pink-300 text-black hover:bg-pink-400":'bg-pink-900 text-white hover:bg-pink-700'} p-5 px-10  text-2xl rounded-[10px]`}>Start quiz</Link>
                    <div className="flex gap-3 justify-center items-center mt-10" >
                        <p className={`${darkMode?'text-pink-200':"text-pink-900"} text-lg`}>Light</p>
                        <div 
                             className={`w-[80px] h-[40px] rounded-[20px] ${darkMode?"bg-white border-white":"bg-black border-black"} border-2 flex items-center ${darkMode?"justify-end":"justify-start"}`}
                             onClick={toggleDarkMode}
                        >
                             <div className={`w-[38px] h-[38px] rounded-full ${darkMode?"bg-black":"bg-white"} hover:cursor-pointer`}></div>
                        </div>
                        <p className={`${darkMode?'text-pink-200':"text-pink-900"} text-lg`}>Dark</p>
                    </div>
            </div>
        
    )
}