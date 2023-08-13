import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { motion } from "framer-motion";

export const HotelListings = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}

          className="overflow-hidden rounded-md transition-shadow duration-300 bg-white border ">
          <Link href="/" aria-label="Article">
            <Image
              src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              className="object-cover w-full h-64 rounded-md p-2"
              alt=""
              width={500}
              height={500}
            />
          </Link>
          <div className="p-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <Link
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-white transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">Diving to the deep</p>
            </Link>
            <p className="mb-4 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <div className="flex space-x-4 ">
              <Link
                href="#"
                aria-label="Comments"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2 flex py-1">
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
              </Link>
              <Link href='/hotels' className="flex font-bold ">
                book now
                <span className="my-1 px-2">
                  <MdOutlineArrowForwardIos />
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="overflow-hidden transition-shadow duration-300  bg-white rounded-md p-2 border">
          <Link href="/" aria-label="Article">
            <Image
              src="https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              className="object-cover w-full h-64 rounded"
              alt=""
              width={500}
              height={500}
            />
          </Link>
          <div className="p-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              4 Nov 2020
            </p>
            <Link
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-white transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">Conquer the World</p>
            </Link>
            <p className="mb-4 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                aria-label="Comments"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2 flex py-1">
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
              </Link>
              <Link href='/hotels' className="flex font-bold ">
                book now
                <span className="my-1 px-2 ">
                  <MdOutlineArrowForwardIos />
                </span>
              </Link >
            </div>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="overflow-hidden transition-shadow duration-300 bg-white rounded-md border">
          <Link href="/" aria-label="Article">
            <Image
              src="https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-64 rounded-md p-2"
              alt=""
              width={500}
              height={500}
            />
          </Link>
          <div className="p-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              28 Dec 2020
            </p>
            <Link
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-white transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">
                Explore the beautiful
              </p>
            </Link>
            <p className="mb-4 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                aria-label="Comments"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2 flex py-1">
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
              </Link>
              <Link href="/hotels" className="flex font-bold ">
                book now
                <span className="my-1 px-2">
                  <MdOutlineArrowForwardIos />
                </span>
              </Link >
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
