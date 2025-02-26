import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.webp'
import { FaArrowRightFromBracket, FaArrowRightToBracket } from "react-icons/fa6";


const NavBar = () => {

  const links = <>
    <NavLink
      to="/"
      className={({ isActive }) => `pb-1 border-b-2 ${isActive ? "border-blue-500" : "border-transparent"
        } hover:border-blue-500  transition-all`
      }
    >
      TUITION JOBS
    </NavLink>
   

    <NavLink
      to="/tutor_list"
      className={({ isActive }) => `pb-1 border-b-2 ${isActive ? "border-blue-500" : "border-transparent"
        } hover:border-blue-500  transition-all`
      }
    >
      PREMIUM TUTORS
    </NavLink>

    <NavLink
      to="/request-for-tutor"
      className={({ isActive }) => `pb-1 border-b-2 ${isActive ? "border-blue-500" : "border-transparent"
        } hover:border-blue-500  transition-all`
      }
    >
      TUTOR REQUEST
    </NavLink>

    <NavLink
      to="/tuition-list"
      className={({ isActive }) => `pb-1 border-b-2 ${isActive ? "border-blue-500" : "border-transparent"
        } hover:border-blue-500  transition-all`
      }
    >
      COURSES
    </NavLink>
  </>

  return (
    <div className="bg-custom-gradient">
      <nav className="container mx-auto flex justify-between items-center">

        {/* logo */}
        <div>
          <Link to={`/`}><img className="w-[180px] h-[58]" src={logo} alt="" /></Link>
        </div>

        {/* navigation */}
        <div>
          <ul className=" flex  gap-16 text-white font-bold text-sm items-center mt-1">
            {links}
          </ul>
        </div>

        {/* authentication */}
        <div className="text-white flex items-center gap-4">
          <button className="flex items-center gap-2 border border-white px-4 py-2 rounded-sm"><FaArrowRightFromBracket /> <Link to={`/register`}>Register</Link></button>
          <button className="flex items-center gap-2 border border-white px-4 py-2 rounded-sm"><FaArrowRightToBracket /><Link to={`/login`}>Login</Link></button>
         
        </div>
      </nav>
    </div>
  );
};

export default NavBar;