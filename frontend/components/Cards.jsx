"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineStar } from "react-icons/ai";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import axios from "axios";
import BASE_URL from "@/constants/url";

export const HotelListings = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    async function fetchUserId() {
      try {
        const fetchedHotels = await axios.get(`${BASE_URL}/api/hotels`);

        setHotels(fetchedHotels.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUserId();
  }, []);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {hotels.map((hotel) => (
          <Link
            key={hotel._id}
            href={`/hotels/${hotel._id}`}
            className="overflow-hidden flex items-start justify-between flex-col rounded-md transition-shadow duration-300 bg-white border h-[40rem]"
          >
            <img
              src={hotel.image}
              className="object-cover w-full h-64 rounded-md p-2"
              alt=""
              width={500}
              height={500}
            />
            <div className="p-5">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                13 Jul 2020
              </p>
              <Link
                href="/"
                aria-label="Article"
                className="inline-block mb-3 text-green transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-7 ">
                  {hotel.hotelName}
                </p>
              </Link>
              <p className="mb-4 text-gray-700">
                {hotel.description.substring(0, 150) + "..."}
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
              </div>
            </div>
            <div className="p-5">
              <button
                className="flex font-bold text-white
                p-5 text-center uppercase items-center justify-center bg-blue-500"
              >
                book now
                <span className="my-1 px-2">
                  <MdOutlineArrowForwardIos />
                </span>
              </button>
            </div>
          </Link>
        ))}
        {/* <div className="overflow-hidden transition-shadow duration-300  bg-white rounded-md p-2 border">
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
        </div> */}
      </div>
    </div>
  );
};
