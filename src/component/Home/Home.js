import './Home.css'
import { useState } from 'react'
import Header from '../Header/Header'
import Content from '../Posts/Content/Content'
import About from '../About/AboutMe'

function Home({postList, setPostList}) {

  return (
    <>
      <Header />
      <div className='home'>
        <Content postList={postList} setPostList={setPostList} />
        <About />
      </div>
    </>
  )
}

export default Home