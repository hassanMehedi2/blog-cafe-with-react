
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const [readingTime , setReadingTime] = useState(0);

  const handleAddBookmarks =(blog) =>{
    const currentBookmark=[...bookmarks,blog];
    setBookmarks(currentBookmark);
  }

  const handleMarkAsRead=time=>{
    setReadingTime(readingTime+time);

  }

  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-screen-xl mx-auto '>
     <Blogs
     handleAddBookmarks={handleAddBookmarks}
     handleMarkAsRead={handleMarkAsRead}
     ></Blogs>
     <Bookmarks
     bookmarks={bookmarks}
     readingTime={readingTime}
     ></Bookmarks>


     </div>
   
      
      
    </>
  )
}

export default App
