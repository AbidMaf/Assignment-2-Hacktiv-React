import './Navbar.css';
import NavbarMenu from '../Molecules/NavbarMenu';
import NavbarProfile from '../Molecules/NavbarProfile';

function Navbar() {
    return(
        <nav>
            <NavbarMenu />
            <NavbarProfile />
        </nav>
    )
}

export default Navbar;
