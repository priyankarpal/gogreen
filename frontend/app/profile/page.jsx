'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Profile() {
    const { user, error, isLoading } = useUser();
    const renderLogoutLink = () => {
        if (user) {
            return (
                <Link href="/api/auth/logout">Log out</Link>
            );
        }
        return (
            <a
                href="/api/auth/login"
                aria-label="Login"
                title="Login"
                className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400 text-2xl"
            >
            </a>
        );
    };
    return (

        <section className='flex justify-center item-center'>
            {isLoading || error ? <div className='h-[30rem]'>Loading...</div> : (
                <div className="mt-6 border-t border-gray-100 w-[50%] h-[40rem]">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 "> <Image src={user.picture} width={100} height={100} alt={`profile image of ${user.nickname}`} className='rounded-full' />   </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.nickname}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.email}</dd>
                        </div>
                        <div className="border my-5 bg-red-600 text-white rounded-md p-2 w-20 hover:bg-red-500 cursor-pointer " typeof='button' aria-label='logout button'>
                            {renderLogoutLink()}
                        </div>
                    </dl>
                </div>

            )}
        </section>
    )
}