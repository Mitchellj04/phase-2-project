import './Home.css'
import { useState } from 'react'
import Header from '../Header/Header'
import Content from '../Posts/Content/Content'
import About from '../About/AboutMe'
import Test from "../Test"

function Home({postList, setTitle, title}) {

  

  return (
    <>
      <Header />
      <div className='home'>
        <Content postList={postList} />
        <About />
      </div>
    </>
  )
}

export default Home