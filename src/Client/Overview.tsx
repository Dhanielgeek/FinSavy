import TradingViewWidgettwo from "./TradingViewOne"

const Overview = () => {
  return (
    <div className="w-[100%] h-[100%] bg-yellow-400">
      <div className="w-[100%] h-[14%] bg-[#ddd5d9] flex justify-between  items-center">
        <div className="w-[40%] h-[100%] justify-center flex items-center smallPhone:w-[100%]">
        <p className="text-3xl font-semibold phone:text-xl">My Dashboard</p>
        </div>
        <div className="w-[70%] h-[100%] smallPhone:hidden  justify-center items-center flex">
          <TradingViewWidgettwo/>
        </div>
      </div>
      <div className="w-[100%] h-[40%] bg-green-500"></div>
    </div>
  )
}

export default Overview