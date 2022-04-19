import React from 'react'
import ProductList from '../components/ProductList/ProductList';
import ServiceSP from '../components/ServiceSP';

function Product() {
  return (
    <>
      <ProductList amount={20}/>
      <ServiceSP />
    </>
  )
}

export default Product