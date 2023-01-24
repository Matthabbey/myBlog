import React, { useEffect, useState } from 'react'
import { fetchPost } from '../../api'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'

const Home = () => {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    fetchPost()
  }, [])



  return (
    <>
        <Header />

 <div className='home'>
        <Posts />
        <Sidebar />
    </div>
    </>
   
  )
}

export default Home