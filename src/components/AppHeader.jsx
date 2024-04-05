import React, { useState } from "react";
import Link from "next/link";
import { useUser } from "@supabase/auth-helpers-react";

const Header = () => {
  const user = useUser();
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <div className="relative flex flex-wrap items-center justify-between w-full bg-white group py-7 shrink-0">
      <div className="text-2xl font-bold text-indigo-800 transition-colors duration-300 hover:text-gray-700 dark:text-white dark:hover:text-gray-300">
        {/* <img
          className="h-8"
          src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-nav-0.png"
          alt="logo"
        /> */}
        Storepoint
      </div>
      <div className="items-center justify-between hidden gap-12 text-black md:flex">
        <a
          className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900"
          href="#"
        >
          Product
        </a>
        <a
          className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900"
          href="#"
        >
          Features
        </a>
        <a
          className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900"
          href="#"
        >
          Pricing
        </a>
        <a
          className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900"
          href="#"
        >
          Company
        </a>
      </div>
      <div className="items-center hidden gap-8 md:flex">
        {user ? (
          <Link href="/store">
            <button className="flex items-center px-7 py-3 text-sm font-semibold rounded-lg bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-300">
              View Store
            </button>
          </Link>
        ) : (
          <>
            <Link href="/login">
              <button className="flex items-center text-sm font-normal text-gray-800 hover:text-gray-900 transition duration-300">
                Log In
              </button>
            </Link>

            <Link href="/signup">
              <button className="flex items-center px-7 py-3 text-sm font-semibold rounded-lg bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-300">
                Register
              </button>
            </Link>
          </>
        )}
      </div>
      <button
        // onClick="(() => { this.closest('.group').classNameList.toggle('open')})()"
        onClick={() => {
          setOpenSideMenu(!openSideMenu);
        }}
        className="flex md:hidden"
      >
        {openSideMenu ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        )}
      </button>

      {openSideMenu && (
        <div className="absolute  flex md:hidden transition-all duration-300 ease-in-out flex-col items-start shadow-main justify-center w-full gap-3 overflow-hidden bg-white py-4 px-4 rounded-2xl max-h-64 top-full">
          <a
            className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900"
            href="#"
          >
            Product
          </a>
          <a
            className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900"
            href="#"
          >
            Features
          </a>
          <a
            className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900"
            href="#"
          >
            Pricing
          </a>
          <a
            className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900"
            href="#"
          >
            Company
          </a>

          {user ? (
            <Link href="/store">
              <button className="flex items-center px-7 py-3 text-sm font-semibold rounded-lg bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-300">
                View Store
              </button>
            </Link>
          ) : (
            <>
              <Link href="/login">
                <button className="flex items-center text-sm font-normal text-black">
                  Log In
                </button>
              </Link>

              <Link href="/signup">
                <button className="flex items-center px-7 py-3 text-sm font-semibold rounded-lg bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-300">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
