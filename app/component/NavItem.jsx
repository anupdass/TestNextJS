import Link from "next/link"

const NavItem = ({ path, title, active, changeHash }) => {

    return (
        // <div className="text-gray-600 hover:text-[#2cbc8f]">{title}</div>
        <Link href={path} className={`text-xl relative text-gray-600 hover:text-[#2cbc8f] before:absolute before:left-0 before:bottom-[-30px] before:h-[5px] before:rounded-sm before:w-0 before:bg-[#2cbc8f] hover:before:w-full transition-all duration-300 rounded-sm ${active ? 'text-green-500 before:w-full' : ''}`}
            onClick={() => changeHash(title)}
        >
            {title}
        </Link>

    )
}

export default NavItem