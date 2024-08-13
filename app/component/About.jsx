import Image from "next/image"

const About = () => {
    return (
        <div className="custom-container" id="about">
            <p className="text-4xl font-bold text-center text-green-600 pb-16">About Us</p>

            <div className=" md:grid grid-cols-2">
                <div className="px-6">
                    <Image src="/image1.jpeg" alt="logo" width={600} height={600} priority={true} />
                </div>
                <div className="md:px-16 px-6 mt-8 md:mt-0">
                    <p className="text-4xl font-bold">We Provide Best Home Network For You.</p>
                    <p className="py-3 text-justify">
                        We are a team of professional Internet Service Providers with 3+ years of experience. We provide
                        high quality internet connectivity services throughout the country. Udoy, ADN Telecom is a
                        concern of ADN Group, a conglomerate comprising 10 companies across diverse industries
                    </p>
                    <div className="py-3">
                        <p className="text-lg font-bold pb-1">A Reliable Connection</p>
                        Creating Trustworthy Links: Building Reliable Connections for Seamless Communication.
                    </div>
                    <div className="py-3">
                        <p className="text-lg font-bold pb-1">Powerful Secure Internet</p>
                        Ensuring Robust Security Measures for a Powerful and Secure Internet Experience, Safeguarding Data and Privacy.
                    </div>
                    <div className="py-3">
                        <p className="text-lg font-bold pb-1">Flex 4K & 8K streaming</p>
                        Ensuring Robust Security Measures for a Powerful and Secure Internet Experience, Safeguarding Data and Privacy.
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About