import React from 'react'
import logo from '../assets/images/logo.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-bg-100 flex justify-center shadow-md">
      <div className="m-4 flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row sm:gap-20">
        <Link to={"/"} className="">
          <img src={logo} alt="" className="h-18 sm:h-24" />
        </Link>

        <div className="">
          <h1 className="sm: text-base-2 mb-6 hidden font-bold">
            FRAME RATE BRAZIL
          </h1>

          <div className="text-primary-400 mr-6 flex gap-4 font-semibold">
            <Link>
              <h2>KIT</h2>
            </Link>
            <Link>
              <h2>CPU</h2>
            </Link>
            <Link>
              <h2>RAM</h2>
            </Link>
            <Link>
              <h2>MOBO</h2>
            </Link>
            <Link>
              <h2>SSD</h2>
            </Link>
            <Link>
              <h2>GPU</h2>
            </Link>
            <Link to="/login">
              <h2>login</h2>
            </Link>
          </div>
        </div>

        <div className="text-secondary-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Header
