import React from 'react'
import ProductList from '../components/ProductList/ProductList'
import ServiceSP from '../components/ServiceSP'
import Slider from '../components/Slider'
function Home() {
  return (
    <>
      <Slider />
      <ProductList amount={10} />
      <ServiceSP />
    </>
  )
}

export default Home