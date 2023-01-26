import React, { useEffect, useState } from 'react'
// import { fetchPost } from '../../api'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'
import { useLocation } from 'react-router-dom';
import { fetchPost } from '../../api'

const Home = () => {
  const [posts, setPosts] = useState<any[]>([])
  const {search} = useLocation()
  console.log(search)

  useEffect(()=>{
    fetchPost().then((data)=>{      
      let result = data?.data.users
    //  let result = data?
    console.log(result);
    
     
      setPosts(result)
    })
  }, [search])
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

