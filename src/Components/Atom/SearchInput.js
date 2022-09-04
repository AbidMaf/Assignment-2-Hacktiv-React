let style = {
    backgroundColor: '#f3f3f4',
    borderRadius: '3em',
    padding: '0.46em',
}

const SearchInput = (props) => {
    const {placeholder} = props;
    return (
        <div className="search-bar">
            <span className="search-icon"></span>
            <form action="" className="search-form">
                <input type="text" className="search-input" name="" id="" placeholder="Search"/>
                <input type="submit" value="Submit" hidden />
            </form>
        </div>
    );

}

export default SearchInput;