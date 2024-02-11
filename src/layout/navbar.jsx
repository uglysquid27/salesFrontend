import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link as ScrollLink } from "react-scroll";
React

function navbar() {


  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // Set this if you want the animation to occur only once
    });
  }, []);

  const [isDropdown, setIsDropdown] = useState(false)

  const handleDropdown = () => {
    setIsDropdown(!isDropdown)
  }

  const animationDuration = 100; // milliseconds

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 0) {
        navbar.classList.add("bg-gray-100")
        navbar.classList.remove("bg-transparent");
      } else {
        navbar.classList.remove("bg-gray-700");
        navbar.classList.add("bg-transparent");
      }
    });
  })
  return (
    <>
      <div className="z-10 fixed navbar lg:py-4 lg:px-24 bg-transparent">
        <div className="lg:navbar-start max-lg:hidden">
          <Link to="/" className="text-center column-1">
            <div className="bg-blend-difference logo w-full font-bold text-md text-gray-900" data-aos="fade-right" data-aos-delay="0">
              AHMAD FARREL
            </div>
            <div className="text-xs font-semibold text-gray-800" data-aos="fade-right" data-aos-delay="200">
              WEB DEVELOPER
            </div>
          </Link>
        </div>
        <div className="navbar-start">
          <div onClick={handleDropdown} className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {isDropdown && (
              <ul data-aos="fade-down"
                tabIndex={0}
                className="mr-8 menu-sm dropdown-content mt-1 z-[1] p-2 shadow bg-indigo-400 w-52 text-base-100 font-semibold"
              >
                <li>
                  <ScrollLink to="home" smooth={true} duration={500} className="text-link font-medium mx-1.5 sm:mx-6" style={{ cursor: "pointer" }} >
                    Home
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="about" smooth={true} duration={500} className="text-link font-medium mx-1.5 sm:mx-6" style={{ cursor: "pointer" }} >
                    About
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="expert" smooth={true} duration={500} className="text-link font-medium mx-1.5 sm:mx-6" style={{ cursor: "pointer" }} >
                    Expertise
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="project" smooth={true} duration={500} className="text-link font-medium mx-1.5 sm:mx-6" style={{ cursor: "pointer" }} >
                    Project
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="contact" smooth={true} duration={500} className="text-link font-medium mx-1.5 sm:mx-6" style={{ cursor: "pointer" }} >
                    Contact
                  </ScrollLink>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="md:hidden max-sm:navbar-end overflow-hidden">
          <Link to='/' className="btn btn-ghost column-1">
            <div className="bg-blend-difference logo w-full font-bold text-md text-gray-900 hover:text-gray-600">AHMAD FARREL</div>
          </Link>
        </div>

        <div className="hidden md:block navbar-end container lg:flex text-gray-900 capitalize dark:text-gray-700">
          <ScrollLink to="home" smooth={true} duration={500} className="text-link font-medium mx-1.5 sm:mx-6" data-aos="fade-down" data-aos-delay="200" style={{ cursor: "pointer" }} >
            01.Home
          </ScrollLink>

          <ScrollLink to="about" smooth={true} duration={500} className="text-link font-medium mx-1.5 sm:mx-6" data-aos="fade-down" data-aos-delay="300" style={{ cursor: "pointer" }} >
            02.About
          </ScrollLink>

          <ScrollLink to="expert" smooth={true} duration={500} className="text-link font-medium mx-1.5 sm:mx-6" data-aos="fade-down" data-aos-delay="300" style={{ cursor: "pointer" }} >
            03.Expertise
          </ScrollLink>

          <ScrollLink to="project" smooth={true} duration={500} className="text-link font-medium mx-1.5 sm:mx-6" data-aos="fade-down" data-aos-delay="400" style={{ cursor: "pointer" }} >
            04.Project
          </ScrollLink>

          <ScrollLink to="contact" smooth={true} duration={500} className="text-link font-medium mx-1.5 sm:mx-6" data-aos="fade-down" data-aos-delay="500" style={{ cursor: "pointer" }} >
            05.Contact
          </ScrollLink>
        </div>
      </div>
    </>
  );
}

export default navbar;
