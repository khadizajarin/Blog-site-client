/* eslint-disable react/no-unescaped-entities */
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Title = () => {
    return (
        <div className="flex flex-col justify-center items-center lg:h-screen ">
           <div className="font-bold text-7xl text-[#263A29] mt-4">
                TaleCraft 
           </div>
           <div className="font-bold text-3xl text-[#263A29]">
                Where Pens Converge
           </div>
          <Link to="/login"> <button className="btn btn-wide bg-[#41644A] m-4">Welcome Back <FaSignInAlt></FaSignInAlt> </button> </Link>
           Don't have an account yet?
           <Link to="/register"><button className="btn btn-wide bg-[#41644A] m-4">Create an Account <FaUserPlus></FaUserPlus> </button> </Link>
        </div>
    );
};

export default Title;