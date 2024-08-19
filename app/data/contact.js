import { FaWhatsapp, FaFacebookMessenger, FaInstagram } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail, } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";


export const contact = [
    {
        id: 1,
        title: 'Text Hi to 16631',
        Icon: FaWhatsapp,
        link: 'tel:16631',
        color: 'green'
    },
    {
        id: 2,
        title: 'Call 16631',
        link: 'tel:16631',
        Icon: IoCall,
        color: 'red'
    },
    {
        id: 3,
        title: 'Message us in Facebook ',
        link: 'https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F103578872533332%2F%3Fmessaging_source%3Dsource%253Apages%253Amessage_shortlink%26source_id%3D1441792%26recurring_notification%3D0',
        Icon: FaFacebookMessenger,
        color: 'blue'
    },
    {
        id: 4,
        title: 'Email Us',
        link: 'mailto:info@udoyadn.com',
        color: 'red',
        Icon: MdOutlineEmail
    },
    {
        id: 5,
        title: 'Instragram Message',
        Icon: FaInstagram,
        color: 'red',
        link: '#'
    },
    {
        id: 6,
        title: 'Hot Line 24/7',
        color: 'black',
        Icon: RiCustomerService2Fill,
        link: 'tel:16631'
    }
]