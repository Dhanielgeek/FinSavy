import { GoTriangleRight, GoTriangleLeft } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import Logo from '../assets/1-removebg-preview.png'
import { ChangeBar } from "../Function/Slice";

const Menu = () => {

const ToggleSidebar = useSelector((state:any)=> state.MenuBar)
console.log(ToggleSidebar);

const dispatch = useDispatch()


  return (
    <>
      <div className={`${ToggleSidebar ? "w-[200px]" : "w-[100px]" } h-screen`}>
        <div className={`${ToggleSidebar ? "w-[200px]" : "w-[100px]"} h-screen fixed flex-col items-center`}>
          <div className="w-[100%] h-[15%] flex bg-pink-500 justify-center items-center">
            <img src={Logo} alt="" className="w-[70%] h-[80%] object-contain" />
            <div className=" my-6 w-full justify-end flex absolute -mr-3  text-[#023E8A] hover:cursor-pointer">
              {
                ToggleSidebar? (
                  <GoTriangleLeft
                    className="w-[20px] h-[20px] text-red cursor-pointer"
                    onClick={() => dispatch(ChangeBar())}
                  />
                ) : (
                  <GoTriangleRight
                    className="w-[20px] h-[20px] text-red cursor-pointer"
                    onClick={() => dispatch(ChangeBar())}
                  />
                )
              }
            </div>
          </div>
          <div className="w-[100%] h-[90%] bg-black flex justify-around 
          flex-col items-center ">
            <div className="w-[100%] h-[20%] bg-red-600">
            
            </div>
            <div className="w-[100%] h-[20%] bg-red-600">hello</div>
            <div className="w-[100%] h-[20%] bg-red-600">hello</div>
            <div className="w-[100%] h-[20%] bg-red-600">hello</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
