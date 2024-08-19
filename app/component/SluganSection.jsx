import Image from "next/image"
import { sluganData, } from "../data/sluganData"

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
                    <Image src="/udoy1.gif" alt="logo" width={600} height={600} priority={true} className="rounded-md" />
                </div>
            </div>

        </div>
    )
}

export default SluganSection



const Slug = ({ item }) => {
    const { heading, details, Icon, color } = item
    return (
        // <div className="p-6 bg-black text-white m-5 rounded-md hover:scale-105 transition-all duration-300 cursor-pointer">
        //     {/* <Icon /> */}
        //     <p className="text-2xl font-semibold py-3" key={item.id}>{heading}</p>
        //     <p className="text-sm">{details}</p>
        // </div>


        <div className="p-6 bg-black text-white m-5 rounded-md hover:scale-105 transition-all duration-300 cursor-pointer flex items-center gap-6"        >
            <div className="bg-gray-400 p-6 rounded-full text-center md:block hidden">
                {Icon && <Icon color={color} size={40} />}
            </div>
            <div>
                <p className="text-xl font-semibold py-3" key={item.id}>{heading}</p>
                <p className="text-sm">{details}</p>
            </div>
        </div>

    )
}