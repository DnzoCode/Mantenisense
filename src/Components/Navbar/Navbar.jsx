import Link from "next/link";
import { BiMenu,BiCalendarCheck } from "react-icons/bi";

export default function Navbar() {
  return (
    <div className="flex w-screen h-16">
        <div className="flex w-screen justify-around items-center md:w-1/2">
        
            <img src="..//vercel.svg" alt="" style={{height: "7rem", width: "7rem"}}/>
        </div>
        <div className="flex justify-center items-center mr-auto w-2/4 md:hidden ">
            <BiMenu style={{height: "3rem" , width: "3rem"}}/>
        </div>

        <div className="flex w-1/2 items-center hidden md:flex md:justify-around">
           
            <div className="flex md:justify-around w-full">
                <Link href="/" className="w-full ">
                    <button className="flex justify-center items-center h-10 w-full text-center">
                        Home
                    </button>
                </Link>
                <Link href={"/events"} className="flex w-full">
                    
                    <button className="flex justify-center items-center bg-slate-600 rounded text-white h-10 w-full text-center hover:bg-slate-800 transition-all">
                    <BiCalendarCheck style={{marginRight: "1em"}}/>
                        Calendario
                    </button>
                </Link>
                <Link href="/" className="w-full ">
                    <button className="flex justify-center items-center h-10 w-full text-center">
                        Contact
                    </button>
                </Link>
            </div>
            
        </div>

    </div>
  )
}