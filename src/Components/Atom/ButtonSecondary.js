const style = {
    fontFamily: 'Helvetica 65 Medium, sans-serif',
    padding: '0.46em 1em',
    borderRadius: '0.5vw',
    boxShadow: '0px 0px 0px 1px #e7e7e9 inset',
    color: '#000',
    textDecoration: 'none',
    cursor: 'ponter'
}

const ButtonSecondary = (props) => {
    const {text, href} = props;
    return (
        <a href={href} style={style}>{text}</a>
    );
}

export default ButtonSecondary;