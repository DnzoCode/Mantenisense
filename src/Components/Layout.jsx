import Navbar from "./Navbar/Navbar";

export default function Layout({children}) {
  return (
    <div className="w-screen h-screen">
        <Navbar/>
        {children}
    </div>
  )
}