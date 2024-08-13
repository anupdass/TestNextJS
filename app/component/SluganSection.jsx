import Image from "next/image"
import { sluganData } from "../data/sluganData"

const SluganSection = () => {
    return (
        <div className="custom-container p-4" >
            <p className="md:text-6xl text-4xl font-semibold text-center py-10  md:py-16 uppercase md:px-48 px-6  leading-tight">
                UDOY Internet
                Don’t Suffer The Buffer
            </p>

            <div className=" md:grid grid-cols-2 md:items-center">
                <div className="md:px-6 mt-8 md:mt-0">
                    {
                        sluganData.map((item) => {
                            return (
                                <Slug key={item.id} item={item} />
                            )
                        })
                    }
                </div>
                <div className="px-6 mt-8 md:mt-0">
                    <Image src="/image1.jpeg" alt="logo" width={600} height={600} priority={true} />
                </div>
            </div>

        </div>
    )
}

export default SluganSection



const Slug = ({ item }) => {
    const { heading, details } = item
    return (
        <div className="p-6 bg-black text-white m-5 rounded-md hover:scale-105 transition-all duration-300 cursor-pointer">
            <p className="text-2xl font-semibold py-3" key={item.id}>{heading}</p>
            <p className="text-sm">{details}</p>
        </div>
    )
}