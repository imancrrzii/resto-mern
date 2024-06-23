import React from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories'
import '../../App.css'
import SpecialDish from './SpecialDish'
import Testimonial from './Testimonial'
import Services from './Services'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Categories/>
      <SpecialDish/>
      <Testimonial/>
      <Services/>
    </div>
  )
}

export default Home
