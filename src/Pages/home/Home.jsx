import React from 'react'
import Banner from './Banner'
import Catergory from './Catergory'
import Products from './Products'
import Collections from './Collections'
import BestSellers from './BestSellers'
import Newsletter from './Newsletter'
import Footer from './Footer'
import Sidebar from './Sidebar'
import NaavBar from '../../Components/NaavBar'

const Home = ({setLoggedIn}) => {
  return (
    <div>
      <NaavBar setLoggedIn={setLoggedIn}/>
      <Banner/>
      <Catergory/>
      <Products/>
      <Collections/>
      <BestSellers/>
      <Newsletter/>
      <Footer />


    </div>
  )
}

export default Home
