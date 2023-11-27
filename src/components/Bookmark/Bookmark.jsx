
const Bookmark = ({bookmark}) => {
    const {title}= bookmark;
    return (
        <div className= "m-3 p-2 rounded-md bg-white">
            <h2 className="text-xl font-bold">{title}</h2>
            
        </div>
    );
};

export default Bookmark;