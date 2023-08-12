"use client"
import { useState } from "react"
import { GoHomeFill } from "react-icons/go"
import { BsFillCartDashFill } from "react-icons/bs"
import { IoCall } from "react-icons/io5"
import { HiLogin } from "react-icons/hi"
import { BiSolidTreeAlt } from "react-icons/bi"
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Auth0 implementation
  const { user } = useUser();
  // console.log(user)
  // /api/auth/logout
  const renderLogoutLink = () => {
    if (user) {
      return (
        <Link href="/profile">
          <Image src={user.picture} width={50} height={50} alt={`profile image of ${user.nickname}`} className='rounded-full' />
        </Link>
      );
    }
    return (


      <a
        href="/api/auth/login"
        aria-label="Login"
        title="Login"
        className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400 text-2xl"
      >
        <HiLogin />
      </a>

    );
  };

  // for loged in users
  const logedinuser = () => {
    if (user) {
      return (
        <Link href="/dashboard" className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400 text-2xl"
        > <BsFillCartDashFill />
        </Link>
      );
    }
    return null;
  };
  return (

    <div className="px-10 py-5 mx-auto border-b border-gray-500 bg-transparent backdrop-blur-sm sticky z-10 top-0 text-black">
      <div className="relative flex items-center justify-between ">
        <Link className="inline-flex items-center text-2xl font-bold" href='/' >GoGreen <span className="text-3xl"><BiSolidTreeAlt /></span></Link>

        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400 text-2xl"
            >
              <GoHomeFill />
            </a>
          </li>
          <li className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400 text-2xl"
          >
            {logedinuser()}
          </li>
          <li>
            <a
              href="/contact"
              aria-label="Product pricing"
              title="Product pricing"
              className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400 text-2xl"
            >
              <IoCall />
            </a>
          </li>
          <li
            className="tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400 text-2xl"

          >
            {/* Auth0 function call */}
            {renderLogoutLink()}
          </li>

        </ul>



        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50 "
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-black" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <svg
                        className="w-8 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        stroke="currentColor"
                        fill="none"
                      >
                        <rect x="3" y="1" width="7" height="12" />
                        <rect x="3" y="17" width="7" height="6" />
                        <rect x="14" y="1" width="7" height="6" />
                        <rect x="14" y="11" width="7" height="12" />
                      </svg>
                      <span className="ml-2 text-xl font-bold tracking-wide text-black-800 uppercase">
                        Company
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline "
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-black" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="/"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Product
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="About us"
                        title="About us"
                        className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        About us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        aria-label="Sign up"
                        title="Sign up"
                      >
                        Sign up
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
