'use client'
import Image from 'next/image'
import Link from 'next/link'
import { navData } from '../data/navdata'
import NavItem from './NavItem'
import { useEffect, useState } from 'react'
import { DropdownMenu } from './DropDownMenu'
import { IconButton } from '@material-tailwind/react'


const Navbar = () => {
    const [currentHash, setCurrentHash] = useState('Home');
    const [openNav, setOpenNav] = useState(false);

    const changeHash = (pathname) => {
        setCurrentHash(pathname)
    }

    const handleOpenNav = () => {
        setOpenNav(!openNav)
    }

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);



    return (
        <div className='shadow-md sticky top-0 z-50 w-full bg-white '>

            <nav className='flex justify-between custom-container py-1'>
                <Link href="#home" className='px-3 md:px-0'>
                    <Image src="/udoyLogo.png" alt="logo" width={150} height={150} priority={true} onClick={() => setCurrentHash('Home')} />
                </Link>
                <div className='hidden md:block'>
                    <div className='flex gap-14'>
                        {
                            navData.map((item) => {
                                return (
                                    <NavItem
                                        key={item.id}
                                        title={item.name}
                                        path={item.path}
                                        active={currentHash === item.name}
                                        changeHash={changeHash}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                <div className='flex gap-3'>
                    <a
                        href='https://payment.udoyadn.com/'
                        target='_blank'
                        className='px-4 py-2 bg-[#1c9a72] 
                    rounded-md text-white hover:bg-[#2cbc8f]
                    hover:scale-105 transition-all duration-300 mr-5 md:mr-0
                    hidden md:block'

                    >
                        Pay-Bill
                    </a>
                    <a
                        href='https://selfcare.udoyadn.com/Home/Login?ReturnUrl=%2F'
                        target='_blank'
                        className='px-4 py-2 bg-[#1c9a72] 
                    rounded-md text-white hover:bg-[#2cbc8f]
                    hover:scale-105 transition-all duration-300 mr-5 md:mr-0
                    hidden md:block'
                    >
                        Self-Care
                    </a>

                    <div className="flex items-center gap-4 px-7">
                        <IconButton
                            variant="text"
                            className=" md:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
            </nav>

            <DropdownMenu openNav={openNav} handleOpenNav={handleOpenNav} />

        </div>
    )
}

export default Navbar
