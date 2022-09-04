const style = {
    color: '#4D44C6',
    backgroundColor: 'rgba(77, 68, 198, .1)',
    borderRadius: '50vw',
    padding: '0.24em 1em 0em 1em',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: '200%',
    textTransform: 'uppercase',
}

const Badge = (props) => {
    const {text, type} = props;
    let customStyle = {}
    if (type == "account-status") {
        customStyle = {
            ...style,
        }
    } else if(type == "project-visibility") {
        customStyle = {
            ...style,
            fontSize: '0.6em',
            padding: '0 0.8em',
            fontFamily: 'Helvetica 65 light, sans-serif'
        }
    }
    return (
        <span style={customStyle}>{text}</span>
    );
}

Badge.defaultProps = {
    type: 'account-status'
};

export default Badge;