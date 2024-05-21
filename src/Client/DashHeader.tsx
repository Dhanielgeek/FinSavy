import { FaRegBell, FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useSelector } from "react-redux";
import { PiGearSix } from "react-icons/pi";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineClear } from "react-icons/md";
import DashMobile from "./DashMobile";
import { Drawer, Menu, Dropdown } from "antd";

const DashHeader = () => {
  const [ToggleMenu, setToggleMenu] = useState(false);
  const ToggleSidebar = useSelector((state:any) => state.MenuBar);
  console.log(ToggleSidebar);

  const HandleHeaderMenu = () => {
    setToggleMenu(!ToggleMenu);
  };

  const menu = (
    <Menu>
      <Menu.Item key="1" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <AiOutlineUser className="text-2xl" />
        <span className="text-xl">My Profile</span>
      </Menu.Item>
      <Menu.Item key="2" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <PiGearSix className="text-2xl" />
        <span className="text-xl">Account Settings</span>
      </Menu.Item>
      <Menu.Item key="3" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <AiOutlineUser className="text-2xl" />
        <span className="text-xl">Log Out</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="w-[100%] h-[13%] flex justify-between items-center shadow-sm">
      <div className="mobileHeader relative">
        {ToggleMenu ? (
          <MdOutlineClear className="text-2xl cursor-pointer" onClick={HandleHeaderMenu} />
        ) : (
          <IoIosMenu className="text-2xl cursor-pointer" onClick={HandleHeaderMenu} />
        )}
        <Drawer
          title="Dashboard"
          placement="left"
          onClose={HandleHeaderMenu}
          visible={ToggleMenu}
          width={280}
        >
          <DashMobile />
        </Drawer>
      </div>
      <div className="w-[25%] h-[100%] flex justify-center items-center flex-col phone:w-[30%] phone:h-[80%] smallPhone:w-[40%]">
        <p className="text-lg font-medium text-[#CCCC]">Good Morning 🌞</p>
        <h2 className=" text-3xl font-semibold phone:text-2xl">Daniel Ben</h2>
      </div>
      <div className="w-[40%] h-[100%] flex justify-center items-center">
        <div className="w-[50px] h-[50px] rounded-full bg-[#cccc] justify-center flex items-center">
          <FaRegBell className="text-2xl"/>
        </div>
        <div className="w-[30%] h-[100%] justify-center gap-2 items-center flex">
          <div className="w-[55px] h-[55px] bg-[#cccc] rounded-full flex justify-center items-center phone:hidden smallPhone:hidden">
            <p className="text-2xl">DB</p>
          </div>
          <div className="w-[10%] h-[40%] flex relative justify-center items-center phone:w-[20%]">
            <Dropdown overlay={menu} trigger={['click']}>
              <FaCaretDown className="text-2xl cursor-pointer" />
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashHeader;
