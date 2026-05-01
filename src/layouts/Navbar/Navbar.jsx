import Logo from "./Logo";
import AOS from 'aos';
import "aos/dist/aos.css";
import '../../App.css';
import { useEffect } from "react";
// import { Link } from "react-router";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";

const Navbar = () => {
useEffect( ()=>{
   AOS.init({
    duration: 1000,
    once : true,
    easing : "ease-out-cubic",
    offset : 120
   })
}, [])


  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 w-full z-999 border-b 
        border-gray-50/10 transition-all duration-300 bg-black`}
      >
        <nav className="relative container mx-auto px-4 py-5 centered-row justify-between">
          <div className="centered-row gap-10 relative">
            <Link to="/" data-aos="fade-center" data-aos-delay="100">
              <Logo />
            </Link>
              <NavMenu className={"lg:flex hidden"} />
          </div>
          <div className="lg:centered-row gap-10 hidden">
            <p className="text-white text-2xl font-barlow! font-medium
            tracking-wide" data-aos="fade-center" data-aos-delay="500">
              +234 7059803461
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
