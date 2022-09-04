import './Project.css';

let imageStyle = {
    backgroundColor: '#000',
    backgroundSize: 'cover',
    width: '100%'
}

const Project = (props) => {
    const {title, description, image, availibility, language} = props;
    console.log('props => ', props)
    return (
        <div className="project-item">
            <div className="image-preview" style={imageStyle}></div>
            <div className="project-header">
                <h3 className="title">{title}</h3>
                <span className="visibility">{availibility}</span>
            </div>
            <p className="project-description">
                {description}
            </p>
            <div className="project-footer">
                <div className="language">
                    <i className="language-icon"></i>
                    <span className="language-name">{language}</span>
                </div>
            </div>
        </div>
    );
}

export default Project;