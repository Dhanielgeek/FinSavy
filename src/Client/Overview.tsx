import TradingViewWidgettwo from "../Components/TradingViewOne"
import TradingViewWidget from "../Components/TradingViewTwo"


const Overview = () => {
  return (
    <div className="w-[100%]  h-[88vh] scroll  scrollbar-thin scrollbar-track-transparent overflow-y-scroll phone:scrollbar-none">
      <div className="w-[25%] h-[10%] hidden  justify-start gap-3 items-center px-5  phone:w-[80%] phone:h-[10%] smallPhone:w-[40%] phone:flex">
        <p className="text-xl font-medium text-[#CCCC]">Welcome Back 👋</p>
        <h2 className=" text-3xl font-semibold phone:text-2xl">Daniel Ben</h2>
      </div>
      <div className="w-[100%] h-[10%] flex justify-center items-center phone:hidden smallPhone:hidden">
        <TradingViewWidgettwo/>
      </div>
      <div className="w-[100%] h-[40%] bg-green-500 flex-wrap flex justify-around items-center">
        <div className="w-[29%] h-[45%] bg-white shadow-md rounded-md"></div>
        <div className="w-[29%] h-[45%] bg-white shadow-md rounded-md"></div>
        <div className="w-[29%] h-[45%] bg-white shadow-md rounded-md"></div>
        <div className="w-[29%] h-[45%] bg-white shadow-md rounded-md"></div>
        <div className="w-[29%] h-[45%] bg-white shadow-md rounded-md"></div>
        <div className="w-[29%] h-[45%] bg-white shadow-md rounded-md"></div>
      </div>
      <div className="w-[100%] h-[100%] py-11 px-5 flex justify-center items-center">
        <TradingViewWidget/>
      </div>
    </div>
  )
}

export default Overview