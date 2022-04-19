import React from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
    const { productId } = useParams()

    const products = JSON.parse(localStorage.getItem('products')) || []
    const a = products.find((product)=>{
     return product.id === +productId
    })
    console.log(a)

  return (
    <div>Detail</div>
  )
}

export default Detail