import Image from "next/image";
import React from 'react'
import { CarouselCustomNavigation } from "./HeroSection2";

const HeroSection = () => {
    return (
        <div className="bg-gradient-to-t from-green-200 via-green-100 to-white  w-full md:h-[85vh] h-52 "
            id="home"
        >


            <div className="h-full">
                {/* <div className="p-6">
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
                </div> */}
                <CarouselCustomNavigation />
            </div>
        </div>
    )
}

export default HeroSection