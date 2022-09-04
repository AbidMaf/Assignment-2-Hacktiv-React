

const OrganisationItem = (props) => {
    const {profilePict, name, href} = props;
    return(
        <a href={href} title={name} className="clickable-organisation">
            <img className='image-profile' src={profilePict}/>
        </a>
    )
}

export default OrganisationItem;