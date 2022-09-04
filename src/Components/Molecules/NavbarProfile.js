import '../Organism/Navbar.css';
import ButtonPrimary from '../Atom/ButtonPrimary';
import SearchInput from '../Atom/SearchInput';

function NavbarProfile() {
    return (
        <div className="nav-profile">
            <ButtonPrimary
                text="Upload"
            />
            <div className="profile-photo"></div>
            <div className="search-bar">
                <span className="search-icon"></span>
                <SearchInput
                placeholder="Search"
                />
            </div>
        </div>
    )
}

export default NavbarProfile;