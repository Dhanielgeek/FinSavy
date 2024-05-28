import { FaRegBell, FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useSelector } from "react-redux";
import { PiGearSix } from "react-icons/pi";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineClear } from "react-icons/md";
import DashMobile from "./DashMobile";
import { Drawer } from "antd";

const DashHeader = () => {
  const [ToggleMenu, setToggleMenu] = useState(false);
  const ToggleSidebar = useSelector((state:any) => state.MenuBar);
  console.log(ToggleSidebar);

  const HandleHeaderMenu = () => {
    setToggleMenu(!ToggleMenu);
  };

 const [ShowMenu, setShowMenu] = useState(false)

 const HandleShowMenu = () => {
   setShowMenu(!ShowMenu)
 }

  return (
    <div className="w-[100%] h-[13%] flex  justify-between items-center shadow-sm">
      <div className="mobileHeader relative">
        {ToggleMenu ? (
          <MdOutlineClear className="text-2xl cursor-pointer" onClick={HandleHeaderMenu} />
        ) : (
          <IoIosMenu className="text-2xl cursor-pointer" onClick={HandleHeaderMenu} />
        )}
        <Drawer
          placement="left"
          onClose={HandleHeaderMenu}
          visible={ToggleMenu}
          width={280}
          
        >
          <DashMobile closeDrawer={HandleHeaderMenu} />
        </Drawer>
      </div>
      <div className="w-[25%] h-[100%] flex justify-center items-center flex-col  phone:hidden smallPhone:hidden">
        <p className="text-lg font-medium text-[#CCCC]">Good Morning 🌞</p>
        <h2 className=" text-3xl font-semibold phone:text-2xl">Daniel Ben</h2>
      </div>
      <div className="w-[30%] h-[100%] flex justify-center items-center">
        <div className="w-[30%] h-[100%]  justify-center gap-2 items-center phone:w-[70%] flex">
        <div className="w-[45px] h-[45px] rounded-full bg-[#cccc] justify-center flex items-center">
          <FaRegBell className="text-2xl text-blue-500"/>
        </div>
          <div className="w-[45px] h-[45px] bg-[#cccc] rounded-full flex justify-center items-center phone:hidden smallPhone:hidden">
            <p className="text-2xl font-semibold text-white">DB</p>
          </div>
          <div className="w-[10%] h-[40%] flex relative justify-center items-center phone:w-[20%]">
            <FaCaretDown className="text-2xl cursor-pointer" onClick={HandleShowMenu}/>
            {
              ShowMenu ? (
                <div className="w-[15rem] h-[13rem] flex justify-around items-start px-2 flex-col bg-white shadow-md absolute top-12 right-[-37px]">
                  <div className="w-[70%] h-[20%] gap-3 flex justify-start items-center">
                    <AiOutlineUser className="text-2xl"/>
                    <p className="text-xl">My Profile</p>
                  </div>
                  <div className="w-[70%] h-[20%] justify-start gap-2 flex items-center">
                    <PiGearSix className="text-2xl"/>
                    <p className="text-xl">Account Settings</p>
                  </div>
                  <div className="w-[70%] h-[20%] justify-start gap-2 flex items-center">
                    <AiOutlineUser className="text-2xl"/>
                    <p className="text-xl">Log Out</p>
                  </div>
                </div>
              ) : null
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashHeader;
