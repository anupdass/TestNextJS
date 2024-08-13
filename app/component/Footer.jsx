import Image from "next/image"
import { navData } from "../data/navdata"
import Link from "next/link"

const Footer = () => {
    return (
        <div className="custom-container">
            <div className="md:grid md:grid-cols-8   py-20 ">
                <div className="col-span-2 ">
                    <Image src="/udoyLogo.png" alt="logo" width={250} height={50} priority={true} />
                </div>

                <div className="col-span-3 mt-5 md:mt-0 px-5">
                    <p className="font-bold pb-2 border-b-4 rounded-sm border-b-green-400 inline-block" >Address</p>
                    <p className="pt-5 pb-3  hover:ml-3 transition-all hover:scale-105">House-11, NAVANA SHEFALI, 5TH FLOOR, 5-D,
                        ROAD-14, GULSHAN-1, Dhaka-1213
                    </p>
                    <p className="pb-3  hover:ml-3 transition-all hover:scale-105">Call: 16631</p>
                    <p className=" hover:ml-3 transition-all hover:scale-105">Email : info@udoyadn.com</p>
                </div>

                <div className="col-span-2 mt-5 md:mt-0 px-5">
                    <p className="font-bold mb-5 border-b-4 rounded-sm border-b-green-400 inline-block">Quick Link</p>
                    <ul>
                        {
                            navData.map((item) => {
                                return (
                                    <li key={item.id} className="pb-3 hover:ml-3 transition-all hover:scale-105 duration-400">
                                        <Link href={item.path}>{item.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="col-span-1 mt-5 md:mt-0 px-5">
                    <p className="font-bold mb-3 border-b-4 rounded-sm border-b-green-400 inline-block">Follow Us</p>
                    <ul>
                        <li className="py-3">Facebook</li>
                        <li className="py-3">Twitter</li>
                        <li className="py-3">Instagram</li>
                    </ul>
                </div>
            </div>

            <p className="text-center pb-10 text-gray-500">Copyright ©{new Date().getFullYear()} All Rights Reserved.</p>
        </div>
    )
}

export default Footer