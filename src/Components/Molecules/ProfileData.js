import './ProfileData.css';
import ButtonSecondary from '../Atom/ButtonSecondary';
import Badge from '../Atom/Badge';

function ProfileData() {
    return (
        <div className="container-profile-data">
            <section className="profile">
                <div className="profile-picture"></div>
                <div className="profile-info">
                    <h1 className="name">Abid Mafahim</h1>
                    <span className="location">West Java, Indonesia</span>
                    <div className="buttons">
                        <ButtonSecondary
                        href="#"
                        text="Edit Profile" 
                        />
                        <ButtonSecondary
                        href="#"
                        text="..."
                        />
                        <Badge
                        text="Limited Account"
                        type="account-status"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProfileData;