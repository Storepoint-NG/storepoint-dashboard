import React from "react";
import Link from "next/link";

const AppFooter = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-10 py-12">
        <div className="grid grid-cols-1 gap-6 sm:flex  item-row w-full justify-between  flex-wrap">
          <a
            href="/"
            className="text-2xl font-bold text-gray-800 transition-colors duration-300 hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
          >
            Storepoint
          </a>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Quick Link
            </p>

            <div className="mt-5 flex flex-col items-start space-y-2">
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-indigo-500  dark:text-gray-300 dark:hover:text-blue-400"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-indigo-500  dark:text-gray-300 dark:hover:text-blue-400"
              >
                Who We Are
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-indigo-500  dark:text-gray-300 dark:hover:text-blue-400"
              >
                Our Philosophy
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Solutions
            </p>

            <div className="mt-5 flex flex-col items-start space-y-2">
              <Link
                href="/signup"
                className="text-gray-600 transition-colors duration-300 hover:text-indigo-500  dark:text-gray-300 dark:hover:text-blue-400"
              >
                Retail & E-Commerce
              </Link>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Contact Us
            </p>

            <div className="mt-5 flex flex-col items-start space-y-2">
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-indigo-500  dark:text-gray-300 dark:hover:text-blue-400"
              >
                +880 768 473 4978
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-indigo-500  dark:text-gray-300 dark:hover:text-blue-400"
              >
                info@storepoint.com
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700 md:my-10" />

        <div className="flex flex-col items-center justify-between sm:flex-row">
          {/* <a
            href="/"
            className="text-2xl font-bold text-gray-800 transition-colors duration-300 hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
          >
            Storepoint
          </a> */}

          <p className="mt-4 text-sm text-gray-500 dark:text-gray-300 sm:mt-0">
            © Copyright 2021. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
