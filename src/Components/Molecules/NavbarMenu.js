import '../Organism/Navbar.css';
import logo from '../Assets/dribbble-logo.svg';

function NavbarMenu() {
    return (
        <div className="nav-menus">
                <a href="#" className="logo">
                    <img src={logo} alt="" srcset="" />
                </a>
                <ul className="nav-links">
                    <li>
                        <a href="#" className="nav-link"><span>Inspiration</span></a>
                    </li>
                    <li>
                        <a href="#" className="nav-link"><span>Find Work</span></a>
                    </li>
                    <li>
                        <a href="#" className="nav-link active"><span>Learn Design</span></a>
                    </li>
                    <li>
                        <a href="#" className="nav-link active">Go Pro</a>
                    </li>
                    <li>
                        <a href="#" className="nav-link active"><span>Design Files</span></a>
                    </li>
                    <li>
                        <a href="#" className="nav-link active"><span>Hire Designers</span></a>
                    </li>
                </ul>
            </div>
    )
}

export default NavbarMenu;