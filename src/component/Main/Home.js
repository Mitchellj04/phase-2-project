import './Home.css'
import { useState } from 'react'
import Header from '../Header/Header'
import Content from './Content/Content'
import About from '../About/About'
import {data} from "./PostData"

function Home() {

  const [dataPost, setDataPost] = useState(data)

  return (
    <>
      <Header />
      <div className='home'>
        <Content dataPost={dataPost} />
        <About />
      </div>
    </>
  )
}

export default Home