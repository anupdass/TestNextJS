
const PackageItem = ({ item }) => {
    const { name, speed, dtheader, details, price, bg } = item
    return (

        <div className={`md:w-[30%] w-full mt-10 bg-[#ffffff] border rounded-lg hover:shadow-md hover:scale-105 duration-300 cursor-pointer  p-6 ${bg ? bg : ''}`}>
            <p className='uppercase text-xl'>{name}</p>
            <p><span className='text-6xl font-bold'>{speed}</span> <span className='font-bold'>MBPS</span></p>
            <p className=' font-semibold py-3'>{dtheader}</p>
            <ul className='list-disc px-4'>
                {
                    details.map((item) => {
                        return (
                            <li className='py-1 text-sm' key={item}>{item}</li>
                        )
                    })
                }
            </ul>
            <p className='border-b-2 bober-b-red-600 py-2 ' ></p>
            <p className='text-2xl font-semibold py-2'>{price}</p>
            <p></p>
        </div>

    )
}

export default PackageItem