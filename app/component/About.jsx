import Image from "next/image"
import { IoIosWifi } from "react-icons/io";
import { IoLockClosed } from "react-icons/io5";
import { GiNetworkBars } from "react-icons/gi";

const About = () => {
    return (
        <div className="custom-container" id="about">
            <p className="text-4xl font-bold text-center text-green-600 pb-16 pt-16">About Us</p>

            <div className=" md:grid grid-cols-2 items-center">
                <div className="px-6 ">
                    <Image src="/image1.jpg" alt="logo" width={600} height={600} priority={true} className="rounded-md" />
                </div>
                <div className="md:px-16 px-6 mt-8 md:mt-0">
                    <p className="text-3xl md:text-4xl font-bold">We Provide Best Home Network For You.</p>
                    <p className="py-3 text-justify">
                        We are a team of professional Internet Service Providers with 3+ years of experience. We provide
                        high quality internet connectivity services throughout the country. Udoy, ADN Telecom is a
                        concern of ADN Group, a conglomerate comprising 10 companies across diverse industries
                    </p>

                    <div className="py-3 flex items-center gap-6">
                        <div className="bg-green-600 p-3 rounded-full shadow-lg hover:bg-green-800">
                            <IoIosWifi size={40} color="white" />
                        </div>
                        <div>
                            <p className="text-lg font-bold pb-1  hover:text-green-800">A Reliable Connection</p>
                            <p> Creating Trustworthy Links: Building Reliable Connections for Seamless Communication. </p>
                        </div>
                    </div>

                    <div className="py-3 flex items-center gap-6">
                        <div className="bg-green-600 p-3 rounded-full shadow-lg hover:bg-green-800">
                            <IoLockClosed size={40} color="white" />
                        </div>
                        <div>
                            <p className="text-lg font-bold pb-1  hover:text-green-800">Powerful Secure Internet</p>
                            <p> Ensuring Robust Security Measures for a Powerful and Secure Internet Experience, Safeguarding Data and Privacy. </p>
                        </div>
                    </div>

                    <div className="py-3 flex items-center gap-6">
                        <div className="bg-green-600 p-3 rounded-full shadow-lg hover:bg-green-800">
                            <GiNetworkBars size={40} color="white" />
                        </div>
                        <div>
                            <p className="text-lg font-bold pb-1  hover:text-green-800">Flex 4K & 8K streaming</p>
                            <p> Ensuring Robust Security Measures for a Powerful and Secure Internet Experience, Safeguarding Data and Privacy. </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default About