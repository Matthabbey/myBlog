import React from 'react'
import Post from '../post/Post'
import './posts.css'


interface Props{
  posts: any[]
}

const Posts: React.FC<Props> = ({posts}) => {
  
  return (
    <div className='posts'>
      {posts.map((p: any)=>
        <Post key={p._id} post={p}/>
      )}
      
    </div>
  )
}

export default Posts