import './Home.css'
import Header from '../Header/Header'
import Content from '../Content/Content'
import About from '../About/About'

const Home = () => {
  return (
    <>
      <Header />
      <div className='home'>
        <Content />
        <About />
      </div>
    </>
  )
}

export default Home