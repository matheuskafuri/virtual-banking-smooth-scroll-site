import React, {useState} from 'react'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjectOne, homeObjectTwo, homeObjectThree } from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSideBar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} handleSideBar={handleSideBar} />
      <Navbar handleSideBar={handleSideBar} />
      <HeroSection />
      <InfoSection {...homeObjectOne}/>
      <InfoSection {...homeObjectTwo}/>
      <Services />
      <InfoSection {...homeObjectThree}/>
      <Footer />
    </>
  )
}

export default Home;
