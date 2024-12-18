import {useState} from 'react'
import {useLocation, Link} from 'react-router-dom'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../assets/Logo.png'
import '../styles/header.css'


const Header = () => {
    const { pathname } = useLocation()
    const [isExpanded, setIsExpanded] = useState(false)
    const navLinks = [
        {to: '/', title: 'Home'},
        {to: '/construction', title: 'Menu'},
        {to: '/about', title: 'About'},
        {to: '/bookings', title: 'Bookings'}
    ]

    return (
        <header>
            <nav class="grid container nav-bar">
            <Link className="nav-bar-logo" to="/">
            <   img src={Logo} alt="Little Lemon logo" />
            </Link>
            <button class="nav-bar-hamburger"
            type="button"
            onClick={() => {setIsExpanded(!isExpanded)}}
            >
                {isExpanded ? (
                    <FontAwesomeIcon icon={faXmark} />
                ) : (
                    <FontAwesomeIcon icon={faBars} />
                )}
            </button>
            <ul className={(isExpanded)?"nav-bar-links expanded":"nav-bar-links"}>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <Link to={link.to} className={(pathname === link.to)?'active':''}>
                            {link.title}
                        </Link>
                    </li>    
                ))}
            </ul>
            </nav>
        </header>
    )
}

export default Header
