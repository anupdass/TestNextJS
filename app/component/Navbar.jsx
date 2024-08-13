
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { navData } from '../data/navdata'
import NavItem from './NavItem'
import { useState } from 'react'

const Navbar = () => {
    const [currentHash, setCurrentHash] = useState('Home');

    const changeHash = (pathname) => {
        setCurrentHash(pathname)
    }

    return (
        <div className='shadow-md sticky top-0 z-50 w-full bg-white '>
            <nav className='flex justify-between custom-container '>
                <Link href="#home">
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
                <button
                    className='px-4 py-2 bg-[#1c9a72] 
                    rounded-md text-white hover:bg-[#2cbc8f]
                    hover:scale-105 transition-all duration-300 mr-5 md:mr-0
                    hidden md:block'
                >
                    Self-Care
                </button>
            </nav>
        </div>
    )
}

export default Navbar
