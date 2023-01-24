import React, { useEffect, useState } from 'react'
import { fetchPost } from '../../api'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'

const Home = () => {
  const [posts, setPosts] = useState<any[]>([])

  useEffect(()=>{
    fetchPost().then((data)=>{      
      let result = data?.data.users
    //  let result = data?
     
      setPosts(result)
    })
  }, [])
// console.log(posts);

  return (
    <>
        <Header />

 <div className='home'>
        <Posts  posts={posts} />
        <Sidebar />
    </div>
    </>
   
  )
}

export default Home