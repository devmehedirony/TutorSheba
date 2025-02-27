import { IoArrowForward, IoLocationSharp } from 'react-icons/io5';
import img1 from '../../assets/img1.svg'
import { IoIosSearch } from 'react-icons/io';
import { motion } from "framer-motion";
import BtnGroup from './BtnGroup';


const Hero = () => {
  return (
    <div className="bg-[url('/banner.svg')] bg-center bg-cover bg-no-repeat w-full h-[525px] flex items-center" style={{ clipPath: "polygon(0 0, 100% 0, 100% 83%, 0% 100%)" }}>
      <div className="flex items-center gap-32 justify-between w-[1350px] mx-auto">
        <div className='space-y-8'>
          <h2 className='text-[#800080] text-5xl font-bold    leading-14'>Best <span className="text-[#3C65F5] relative inline-block pb-1 after:content-[''] after:absolute after:w-full after:h-[25px] after:bg-[#3c65f5] after:opacity-10 after:left-0 after:bottom-[-6px] after:-z-10">Tutoring Platform </span> <br />
            for Home & Online Tuitions</h2>
          <p className='text-[#6C757D] text-2xl flex items-center gap-1'><IoLocationSharp /> Find the Right Tutor in Your Area</p>
          
          <motion.button className='hover:border-2 hover:border-[rgb(130, 51, 157)] flex items-center gap-2 px-8 py-4 text-white rounded-4xl text-2xl font-bold bg-btn absolute'
            whileHover={{ scale: 1.1 }} 
            transition={{ duration: 0.3 }} 

          >
            <IoIosSearch /> Find a Tutor <IoArrowForward />
           
          </motion.button>
          
          {/* divition tutor */}
          <div className='mt-35'>
            <h4 className='text-[#4F5E64] text-sm'>Divisional Tutors:</h4>
            <BtnGroup/>
         </div>
        </div>
        <motion.img
          src={img1}
          alt="Animated"
          className='w-[424px] h-[424px]'
          animate={{ y: [0, 20, 0] }} // Up & Down Animation
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
        <div>
  
        </div>
      </div>
   </div>
  );
};

export default Hero;


