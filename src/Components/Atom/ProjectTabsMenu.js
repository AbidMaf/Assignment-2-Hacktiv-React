import propTypes from 'prop-types';

const style = {
    color: 'rgb(155, 154, 154)',
    marginRight: '8px',
    textDecoration: 'none',
}

const ProjectTabsMenu = (props) => {
    const {icon, text, href, active} = props;

    console.log(props);

    let customStyle = {}
    // Error disini
    if(props.active == true) {
        customStyle = {
            ...style,
            color: '#000',
            fontWeight: 600
        }
    } else {
        customStyle = {
            ...style
        }
    }
    return (
        <li>
            <a href={href} style={customStyle}>{text}</a>
        </li>
    )
}

ProjectTabsMenu.propTypes = {
    text: propTypes.string.isRequired,
    active: propTypes.bool.isRequired,
}

ProjectTabsMenu.defaultProps = {
    active: false,
    href: '#'
};

export default ProjectTabsMenu;
