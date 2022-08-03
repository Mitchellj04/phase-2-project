import './Home.css'
import { useState } from 'react'
import Header from '../Header/Header'
import Content from './Content/Content'
import About from '../About/About'

function Home({postList}) {


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