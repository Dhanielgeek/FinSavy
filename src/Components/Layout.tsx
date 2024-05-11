import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { useState, useEffect } from "react"
import { FaArrowUp, FaArrowDown } from "react-icons/fa"
import { Link } from 'react-scroll'
import { motion } from "framer-motion"

const PeoplePaid = () => {
  const context = [
    { Country: 'New Zealand', Amount: 6000 },
    { Country: 'Cyprus', Amount: 5000 },
    { Country: 'Norway', Amount: 2000 },
    { Country: 'Spain', Amount: 9000 },
    { Country: 'London', Amount: 6000 },
    { Country: 'Ohio', Amount: 6000 },
    { Country: 'Atlanta', Amount: 125000 },
    { Country: 'Netherlands', Amount: 7000 },
    { Country: 'South Korea', Amount: 23000 }
  ];

  const [currentEntry, setCurrentEntry] = useState(context[0]);
  const [isVisible, setIsVisible] = useState(true);  // State to control visibility

  useEffect(() => {
    const changeInterval = setInterval(() => {
      setCurrentEntry(prevEntry => {
        const nextIndex = (context.indexOf(prevEntry) + 1) % context.length;
        const nextEntry = context[nextIndex];
        setIsVisible(true); // Make visible when the data changes
        setTimeout(() => setIsVisible(false), 7000); // Hide after 7 seconds
        return nextEntry;
      });
    }, 7000);  

    return () => {
      clearInterval(changeInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }} // Initial opacity when component mounts
      animate={{ opacity: isVisible ? 1 : 0 }} // Animate opacity based on isVisible state
      transition={{ duration: 0.5 }} // Animation duration
    >
      {isVisible && (
        <div className="w-[20rem] h-[5rem] text-center rounded-lg bg-white shadow-xl fixed bottom-20 right-5 flex justify-center items-center">
          <p className="text-lg">Someone from <b>{currentEntry.Country}</b> just earned <span className="text-[#0238ea]">${currentEntry.Amount}</span></p>
        </div>
      )}
    </motion.div>
  );
};


const Arrow = () => {
  const [scroll, setScroll] = useState(false);

  const onScroll = () => {
    if (window.scrollY >= 30) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-3 right-4 w-[50px] h-[50px] rounded-lg bg-purple-500 flex justify-center items-center cursor-pointer">
      { !scroll ? <Link to='footer' smooth={true} duration={1000}><FaArrowDown /></Link> :
        <Link to='home' smooth={true} duration={1000}><FaArrowUp /></Link>
      }
    </div>
  );
};

const Layout = () => {
  return (
    <>
      <PeoplePaid />
      <Arrow />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
