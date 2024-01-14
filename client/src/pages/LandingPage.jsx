import React from 'react'

//components import
import PublicNavbar from '../components/LandingPage/PublicNavbar'
import SectionHero from '../components/LandingPage/SectionHero'
import SectionSymptom from '../components/LandingPage/SectionSymptom'
import SectionFeatures from '../components/LandingPage/SectionFeatures'
import SectionAboutUs from '../components/LandingPage/SectionAboutUs'
import Footer from '../components/LandingPage/Footer'

const LandingPage = () => {
  return (
    <>
      <div className='bg-[#f5e7e7] min-h-screen flex flex-col w-full h-full bg-cover bg-fixed bg-center justify-center items-center' style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1487147264018-f937fba0c817?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}>
        <PublicNavbar />
        <SectionHero/>
        <SectionSymptom />
        <SectionFeatures/>
        <SectionAboutUs/>
        <Footer/>
      </div>
    </>
  )
}

export default LandingPage