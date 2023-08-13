"use client";
import { HotelListings } from "@/components/Cards";
import Search from "@/components/utility/Search";
import { SubNav } from "@/components/utility/Subnav";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";


export default function Dashboard() {
  const router = useRouter();
  const { user } = useUser();
  const [Hotel, setHotel] = useState([]);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  useEffect(() => {
    async function fetchHotel() {
      try {
        const fetchedHotels = await axios.get(
          "http://localhost:8080/api/hotels",
          {
            name: user.nickname,
            email: user.email,
          }
        );

        console.log(fetchedHotels);
      } catch (error) {
        console.log(error);
      }
    }

    if (user) fetchHotel();
  }, [user]);


  return (
    <section className="flex justify-center items-center flex-col">
      <SubNav />
      <div className="flex flex-col items-center w-1/2 justify-center mb-4 md:flex-row">
        <Search />
      </div>
      <HotelListings />
    </section>
  );
}
