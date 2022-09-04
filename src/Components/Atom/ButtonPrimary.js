let style = {
    backgroundColor: '#ea4c89',
    color: '#fff',
    padding: '0.46em 1em',
    fontWeight: 600,
    border: 'none',
    borderRadius: '0.5vw',
    textDecoration: 'none',
}

const ButtonPrimary = (props) => {
    const {href, text} = props;
    return (
        <a style={style} className="upload-btn" href={href}>{text}</a>
    )
}

ButtonPrimary.defaultProptype = {
    href: '#'
}

export default ButtonPrimary;