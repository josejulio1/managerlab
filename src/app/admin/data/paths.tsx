import { BiSolidCategory } from "react-icons/bi";
import { FaBook, FaStar, FaUser } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { RiTeamFill } from "react-icons/ri";
import { MdPayment } from "react-icons/md";
import Path from "../interfaces/path";

const paths: Path[] = [
    {
        name: 'Categories',
        href: '/admin/categories',
        icon: <BiSolidCategory />
    },
    {
        name: 'Customers',
        href: '/admin/customers',
        icon: <FaUser />
    },
    {
        name: 'Type Payments',
        href: '/admin/type-payments',
        icon: <MdPayment />
    },
    {
        name: 'Plans',
        href: '/admin/plans',
        icon: <FiPackage />
    },
    {
        name: 'Team',
        href: '/admin/users',
        icon: <RiTeamFill />
    },
    {
        name: 'Valorations',
        href: '/admin/valorations',
        icon: <FaStar />
    },
    {
        name: 'Blog',
        href: '/admin/blogs',
        icon: <FaBook />
    }
];

export default paths;