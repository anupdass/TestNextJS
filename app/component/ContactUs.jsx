
import { contact } from "../data/contact"

const ContactUs = () => {
    return (
        <div className="bg-gradient-to-t from-green-100 via-green-100 to-white" id="contact">
            <div className="custom-container py-14 text-center md:max-w-4xl">
                <p className="text-4xl font-bold py-4 uppercase">Contact Team Udoy</p>
                <p className="md:px-44 px-6"> We try and sort out any issues before you’re even aware of them. But if you ever need us,
                    there are a bunch of ways you can get in touch.
                </p>

                <div className="flex justify-between flex-wrap mt-6">
                    {
                        contact.map((item) => {
                            return (
                                <Contact key={item.id} item={item} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ContactUs


const Contact = ({ item }) => {
    const { title, Icon, color } = item
    return (
        <a href={item.link}
            className="p-6 bg-white
         hover:shadow-md shadow-sm m-3 md:w-[45%] 
         w-full rounded-md cursor-pointer flex items-center"
            key={item.id}
        >
            {Icon && <Icon color={color} size={25} />}
            <div>
                <p className="text-sm text-start font-semibold pl-4">{item.title}</p>
                <p>{item.icon}</p>
            </div>
        </a>
    )
}