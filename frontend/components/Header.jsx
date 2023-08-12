"use client"
import Link from "next/link";
import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
export default function Header() {
  // for animation

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: .9,
        staggerChildren: .9
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  const { user } = useUser();
  const router = useRouter();
  const handleButtonClick = () => {
    if (user) {
      router.push('/create'); // Redirect to /create if user exists
    } else {
      router.push('/api/auth/login'); // Redirect to login if user doesn't exist
    }
  };
  return (
    <section>

      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 110,
                  delay: 0,
                }}
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              >
                Find best green hotels
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 110,
                  delay: 0,
                }}
                className="mt-4 text-xl text-gray-500"
              >
                Embark on a Sustainable Journey with GoGreen - Empowering Travel, Inspiring Change, One Step at a Time
              </motion.p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div


                        className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <motion.div


                          variants={container}
                          initial="hidden"
                          animate="visible"
                          className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 container">
                          <img
                            src="https://images.unsplash.com/photo-1606046604972-77cc76aee944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div
                          variants={container}
                          initial="hidden"
                          animate="visible"
                          className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <motion.div
                          variants={container}
                          initial="hidden"
                          animate="visible"
                          className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWxzfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div
                          variants={container}
                          initial="hidden"
                          animate="visible"
                          className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWxzfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div
                          variants={container}
                          initial="hidden"
                          animate="visible"
                          className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://images.unsplash.com/photo-1523699289804-55347c09047d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWxzfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <motion.div
                          variants={container}
                          initial="hidden"
                          animate="visible"
                          className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://images.unsplash.com/photo-1569335468888-1d3e4a5a3595?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div
                          variants={container}
                          initial="hidden"
                          animate="visible"
                          className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.p onClick={handleButtonClick}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                    damping: 10
                    // delay: 0,
                  }}
                  whileHover={{ scale: 1.1 }}

                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700 cursor-pointer"
                >
                  Book Now
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            className="text-center text-lg font-semibold leading-8 text-gray-900">
            Trusted by the world’s most prestigious hoteliers
          </motion.h2>
          <motion.div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              whileHover={{ scale: 1.2 }}
              onHoverStart={e => { }}
              onHoverEnd={e => { }}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              whileHover={{ scale: 1.2 }}
              onHoverStart={e => { }}
              onHoverEnd={e => { }}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              whileHover={{ scale: 1.2 }}
              onHoverStart={e => { }}
              onHoverEnd={e => { }}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              whileHover={{ scale: 1.2 }}
              onHoverStart={e => { }}
              onHoverEnd={e => { }}
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              whileHover={{ scale: 1.2 }}
              onHoverStart={e => { }}
              onHoverEnd={e => { }}
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </motion.div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Experience Unparalleled Luxury:        <br />              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Indulge in a haven of elegance and sophistication at our exquisite hotel. Each moment is a masterpiece of comfort, accompanied by impeccable service. Welcome to a world where luxury knows no bounds.        </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Book Now
                </Link>
                <Link href="#" className="text-sm font-semibold leading-6 text-white">
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src="https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>



    </section >
  )
}
