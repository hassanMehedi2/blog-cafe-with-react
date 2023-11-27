import PropTypes from 'prop-types';
import { IoBookmarksSharp } from "react-icons/io5";
const Blog = ({blog,handleAddBookmarks,handleMarkAsRead}) => {
    const {cover,title,author_img,author,posted_date,reading_time ,hashtag}=blog;
    return (
        <div className='p-4'>
            <img className=' w-full max-h-[450px]' src={cover} alt="" />
            <div className='flex justify-between mt-4'>
                <div className='flex items-center gap-6'>
                    <img className='w-[60px] h-[60px]  rounded-[50%]' src={author_img} alt="" />
                    <div>
                    <h2>{author}</h2>
                    <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>{handleAddBookmarks(blog)}}  
                    className='ml-4 text-red-600' ><IoBookmarksSharp></IoBookmarksSharp> </button>
                </div>
            </div>
            <h1 className='text-4xl font-bold my-4'>{title}</h1>
            <div>
                {hashtag.map((hash,idx) => <span className='mr-3' key={idx} >#{hash}</span>)
                }
            </div>
            <button
            onClick={()=>{handleMarkAsRead(reading_time)}}
            className='text-purple-700'>Mark as read</button>
        </div>
    );
};

Blog.propTypes={
blog:PropTypes.object.isRequired,
handleAddBookmarks: PropTypes.func,
handleMarkAsRead:PropTypes.func
}
export default Blog;