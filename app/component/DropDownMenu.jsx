'use client'
import React, { useEffect, useState } from "react";

import { navData } from "../data/navdata";
import NavItem from "./NavItem";
import Link from "next/link";

export function DropdownMenu({ openNav, handleOpenNav }) {

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown-menu') && openNav) {
                handleOpenNav(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            // Cleanup the event listener on component unmount
            document.removeEventListener('click', handleClickOutside);
        };
    }, [openNav, handleOpenNav]);

    return (
        <>
            {
                openNav ?
                    <div className='flex flex-col gap-6 p-7'>
                        {
                            navData.map((item) => {
                                return (
                                    <Link key={item.id} href={item.path}
                                        onClick={() => handleOpenNav(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            })
                        }
                        <div>

                            <a
                                href='https://payment.udoyadn.com/'
                                target='_blank'
                                className='px-4 py-2 bg-[#1c9a72] 
                    rounded-md text-white hover:bg-[#2cbc8f]
                    hover:scale-105 transition-all duration-300 mr-5 md:mr-0'
                            >
                                Pay-Bill
                            </a>
                            <a
                                href='https://selfcare.udoyadn.com/Home/Login?ReturnUrl=%2F'
                                target='_blank'
                                className='px-4 py-2 bg-[#1c9a72] 
                    rounded-md text-white hover:bg-[#2cbc8f]
                    hover:scale-105 transition-all duration-300 mr-5 md:mr-0'
                            >
                                Self-Care
                            </a>
                        </div>
                    </div>
                    :
                    null
            }
        </>
    );
}