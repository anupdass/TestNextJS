'use client'
import { useState } from "react"
import { pacageList } from "../data/packageList"
import PackageItem from "./PackageItem"

const PackageList = () => {
    const [showPackage, setShowPackage] = useState(6)
    const handleShowPackage = (cotent) => {
        if (cotent === 'all') {
            setShowPackage(pacageList.length)
        } else {
            setShowPackage(6)
        }
    }
    return (
        <div className="bg-gradient-to-t from-green-100 via-green-100 to-white px-6 md:px-0 mt-16" id='packages'>
            <div className="custom-container pb-10">
                <h1 className="text-4xl font-bold text-green-600 text-center">Our Packages</h1>
                <div className=" md:py-14 flex flex-wrap  justify-between">
                    {
                        pacageList?.slice(0, showPackage).map((item) => {
                            return (
                                <PackageItem key={item.id} item={item} />
                            )
                        })
                    }
                </div>
                {
                    showPackage < pacageList.length ?
                        <div
                            className='p-3 bg-[#1c9a72] 
                   rounded-md text-white hover:bg-[#2cbc8f]
                   hover:scale-105 transition-all duration-300 md:w-1/5 w-1/2
                   cursor-pointer mx-auto text-center mt-10 md:mt-0'
                            onClick={() => handleShowPackage('all')}
                        >
                            View All
                        </div>
                        :
                        <div
                            className='p-3 bg-[#1c9a72] 
                rounded-md text-white hover:bg-[#2cbc8f]
                hover:scale-105 transition-all duration-300 md:w-1/5 w-1/2
                cursor-pointer mx-auto text-center mt-10 md:mt-0'
                            onClick={() => handleShowPackage('')}
                        >
                            View Less
                        </div>
                }
            </div>
        </div>
    )
}

export default PackageList