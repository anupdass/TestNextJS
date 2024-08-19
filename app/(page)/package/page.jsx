import PackageItem from "@/app/component/PackageItem"
import { pacageList } from "@/app/data/packageList"

const InternetPlane = () => {
    return (
        <div className="bg-gradient-to-t from-green-100 via-green-100 to-white px-6 md:px-0 mt-16" id='packages'>
            <div className="custom-container">
                <h1 className="text-4xl font-bold text-green-600 text-center">Our Packages</h1>
                <div className=" py-14 flex flex-wrap  justify-between">
                    {
                        pacageList.map((item) => {
                            return (
                                <PackageItem key={item.id} item={item} />
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default InternetPlane