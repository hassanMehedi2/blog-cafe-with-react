import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 p-3">
            <div className="p-1 bg-green-200">
                <h2 className="text-center font-bold text-xl" >Spent time on read : <span>{readingTime}</span> min</h2>
            </div>
            <h2 className="text-center font-bold">Bookmarks : {bookmarks.length}</h2>
            {
            bookmarks.map(bookmark => <Bookmark
            bookmark={bookmark}
            ></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;