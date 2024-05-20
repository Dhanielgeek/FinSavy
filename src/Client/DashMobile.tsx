import Logo from '../assets/1-removebg-preview.png'

const DashMobile = () => {
  return (
    <div className="w-[48.6rem] h-[36.5rem] bg-red-500 absolute top-16 flex-col  smallPhone:w-[30rem] smallPhone:top-[3rem]  smallPhone:h-[24.7rem] flex justify-center items-center">
    <div className="w-[100%] h-[20%] bg-green-500 flex justify-center items-center">
        <img src={Logo} alt="" className='w-[100%] h-[100%] object-contain' />
    </div>
    <div className='w-[100%] h-[80%] bg-pink-500'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    </div>
  )
}

export default DashMobile