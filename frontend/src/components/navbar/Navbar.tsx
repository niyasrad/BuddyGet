import { useLocation, useNavigate } from "react-router-dom"

import { NavbarLink, NavbarLinks, NavbarLogo, NavbarName, NavbarUser, NavbarWrapper } from "./Navbar.styles"
import logo_small from '../../assets/logo-small.svg'
import { useGlobalContext } from "../../contexts/global.context"

const navigationLinks = [
    {
        name: "Dashboard",
        path: "/dashboard"
    },
    {
        name: "Budget",
        path: "/budget"
    },
    {
        name: "Spends",
        path: "/spends"
    }
]

export default function Navbar() {

    const location = useLocation()
    const navigate = useNavigate()
    const { username, handleLogOut } = useGlobalContext()
    
    return (
        <NavbarWrapper>
            <NavbarLogo
                src={logo_small}
                alt="BuddyGet Logo"
            />
            <NavbarLinks>
            {
                navigationLinks.map((link, index) => (
                    <NavbarLink
                        key={index}
                        href={link.path}
                        current={location.pathname === link.path}
                    >
                        {link.name}
                    </NavbarLink>
                ))
            }
            </NavbarLinks>
            <NavbarUser>
                <NavbarName>{username ? username: "User"}</NavbarName>
                <svg 
                    onClick={() => {
                        handleLogOut!()
                        navigate('/sign-in')
                    }} 
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
            </NavbarUser>
        </NavbarWrapper>
    )
}