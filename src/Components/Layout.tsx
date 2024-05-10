import {  Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { useState } from "react"
import { FaArrowUp, FaArrowDown } from "react-icons/fa"
import { Link } from 'react-scroll'






const Arrow = ()=>{
  const [scroll, setscroll] = useState<boolean>(false)

  const onScroll = ()=>{
    if(window.scrollY >= 30){
      setscroll(true)
    }else{
      setscroll(false)
    }
  }
  window.addEventListener('scroll',onScroll)

  return(
    <div className=" fixed bottom-3 right-4 w-[50px] h-[50px] rounded-lg bg-purple-500 flex justify-center items-center cursor-pointer">{
      !scroll ? <Link to ='footer' smooth={true} duration={1000}> <FaArrowDown/> </Link>
      
      : <Link to ='home' smooth={true} duration={1000}>
        <FaArrowUp/>
      </Link>
    }</div>
  )
}








const Layout = () => {
  return (
    <>
    <Arrow/>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout