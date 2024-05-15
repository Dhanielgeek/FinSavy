
import { GoTriangleRight, GoTriangleLeft } from "react-icons/go";

import { useDispatch, useSelector } from "react-redux";
import { ChangeBar } from "../Function/Slice";

const Menu = () => {

const ToggleSidebar = useSelector((state:any)=> state.MenuBar)
console.log(ToggleSidebar);

 const dispatch = useDispatch()

  return (
    <>
      <div className={`${ToggleSidebar ? 'w-[20%]' : 'w-[100%]' } h-[screen]`}>
        {/* Sidebar content goes here */}
      </div>
      <div className={`w-${ToggleSidebar ? '85' : '95'}% h-screen bg-pink-500 absolute top-0 right-0 transition-all duration-500`}>
        <div className="w-[50px] h-[50px] bg-gray-500 rounded-full absolute right-[-20px] top-7 flex justify-center items-center">
          {ToggleSidebar ? (
            <GoTriangleRight className="text-4xl" onClick={()=>dispatch(ChangeBar())} />
          ) : (
            <GoTriangleLeft className="text-4xl" onClick={()=>dispatch(ChangeBar())} />
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;
