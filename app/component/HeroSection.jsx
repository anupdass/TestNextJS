import Image from "next/image";
import React from 'react'

const HeroSection = () => {
    return (
        <div className="bg-gradient-to-t from-green-200 via-green-100 to-white  w-full md:h-[600px] py-10 md:p-0"
            id="home"
        >

            <div className="custom-container grid md:grid-cols-2 content-center h-full">
                <div className="p-6">
                    <Image
                        src="/image1.jpeg"
                        alt="logo"
                        width={600}
                        height={600}
                        // objectFit="contain"
                        quality={100}
                        priority={true}
                    />
                </div>
                <div className="p-6 text-end">
                    <Image
                        src="/image2.svg"
                        alt="logo"
                        width={600}
                        height={600}
                        // objectFit="contain"
                        quality={100}
                        priority={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection