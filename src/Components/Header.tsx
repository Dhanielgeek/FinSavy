import { NavLink } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineClear } from "react-icons/md";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-[100%] h-[10vh] shadow-md flex justify-center items-center phone:justify-around" id="home">
      <div className="w-[15%] h-[100%] flex justify-center items-center phone:w-[50%]">
        <h2 className="logo-name text-2xl font-semibold text-[#4B3BC6]">FinTrading</h2>
      </div>
      <div className="w-[60%] h-[100%] flex justify-center gap-8 font-semibold text-[#07122D] items-center text-[17px] phone:hidden smallPhone:hidden">
        <NavLink to=''>HOME</NavLink>
        <NavLink to=''>ABOUT</NavLink>
        <NavLink to=''>FEATURES</NavLink>
        <NavLink to=''>HOW IT WORKS</NavLink>
        <NavLink to=''>TESTIMONIALS</NavLink>
        <NavLink to=''>PRICING</NavLink>
        <NavLink to=''>CONTACT</NavLink>
      </div>
      <div className="w-[13%] h-full flex justify-center items-center">
        <button className="w-[90%] h-[70%] rounded-sm bg-[#4B3BC6] text-[17px] text-white phone:hidden smallPhone:hidden">
          <Link to='/signup'>GET STARTED</Link>
        </button>
      </div>
      {/* Mobile View */}
      <div className="Mobile relative">
        <motion.div
          whileTap={{ scale: 0.9 }} // Scale down on tap
          onClick={handleToggle}
        >
          {toggle ? 
            <MdOutlineClear className="text-3xl cursor-pointer" />
            :
            <RiMenu3Fill className="text-3xl cursor-pointer" />
          }
        </motion.div>
        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-[22rem] h-[32rem] flex justify-around flex-col items-start bg-[#ffff] absolute top-[99.4%] right-[10px] phone:w-[21rem] smallPhone:w-[16.2rem] MediumPhone:w-[15rem] smallPhone:h-[32rem] smallPhone:right-[40px]"
            >
              <div className="w-[100%] h-[80%] flex justify-center px-3 flex-col gap-7 font-semibold text-[#07122D] items-start text-[20px]">
                <NavLink to='' className='Nav'>HOME</NavLink>
                <NavLink to='' className='Nav'>ABOUT</NavLink>
                <NavLink to='' className='Nav'>FEATURES</NavLink>
                <NavLink to='' className='Nav'>HOW IT WORKS</NavLink>
                <NavLink to='' className='Nav'>TESTIMONIALS</NavLink>
                <NavLink to='' className='Nav'>PRICING</NavLink>
                <NavLink to='' className='Nav'>CONTACT</NavLink>
              </div>
              <div className="w-[50%] h-[12%] flex justify-center items-center px-3">
                <button className="w-[90%] h-[70%] rounded-sm bg-[#4B3BC6] text-[17px] text-white">
                  <Link to='/signup'>GET STARTED</Link>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
