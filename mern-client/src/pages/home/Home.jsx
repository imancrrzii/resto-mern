import React from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories'
import '../../App.css'
import SpecialDish from './SpecialDish'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Categories/>
      <SpecialDish/>
    </div>
  )
}

export default Home
