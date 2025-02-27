import { AiOutlineSearch } from "react-icons/ai";
import img2 from '../../assets/img2.svg'
import { motion } from 'framer-motion';
import { MdOutlineArrowForward } from "react-icons/md";




const TutorSection = () => {
  return (
    <section className="w-[1350px] mx-auto py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        SEARCH TUTORING JOBS
      </h2>
      <p className="text-gray-600 mt-2 text-lg">
        Find Your Tuition Jobs, in your area
      </p>
      <div className="flex flex-row items-center  mt-8 gap-6">
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.img
            src={img2}
            alt="Tutoring Illustration"
            className="w-[648px] h-[432px]"
            animate={{ y: [0, 20, 0] }} // Up & Down Animation
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </div>
        <div className=" text-center w-1/2  flex flex-col items-center">
          <h3 className="text-xl font-bold text-gray-800 ">
            Looking for interesting tuition jobs to excel your teaching
            experience?
          </h3>
          <p className="text-gray-600 mt-2">
            If teaching jobs interest you, then you are on the right place.
            tutorsheba.com, we often have <strong>500+</strong> open home
            tuition jobs that are genuine and <strong>100%</strong> verified.
            Whether you are starting your career as a tuition teacher or an
            expert in your field, we can help you find your next big tuition
            job. You can search and apply to the tuition jobs that best fit
            your skills, favorable location, class, and subjects.
          </p>
          <button className="mt-6 bg-btn2 text-white px-6 py-3 flex items-center gap-2">
            <AiOutlineSearch />
            SEARCH TUITION
            <MdOutlineArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TutorSection;
