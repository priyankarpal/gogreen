"use client"
import { Cards } from "@/components/Cards";
import Search from "@/components/utility/Search";
import { SubNav } from "@/components/utility/Subnav";
// import { useUser } from '@auth0/nextjs-auth0/client';
// import { useRouter } from 'next/navigation'



export default function Dashboard() {
    // const router = useRouter()
    // const { user } = useUser();
    // console.log(user)
    // if (!user) {
    //     router.push("/")
    // }

    return (
        <section className="flex justify-center items-center flex-col">
            <SubNav />
            <div className="flex flex-col items-center w-1/2 justify-center mb-4 md:flex-row">
                <Search />
            </div>
            <Cards />
        </section>
    )
}