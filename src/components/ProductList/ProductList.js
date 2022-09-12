import React, { useEffect, useState } from 'react'
import './ProductList.scss'
// import axios from 'axios'
import ProductModal from '../ProductModal/ProductModal'
import ShowPicture from '../ShowFicture/ShowPicture'
// import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addNewCart } from '../../actions/cart'
import {Data} from '../../Data'


function ProductList() {
    // let navigate = useNavigate();
    const [products, setProducts] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [showimg, setShowimg] = useState(false)
    const [product, setProduct] = useState('')
    // useEffect(() => {
    //     (async() => {
    //         const res = await axios.get('http://localhost:8080/products')
    //         const data = await res.data
    //         let count = 0
    //         const productList = data.filter(() => {
    //             count ++
    //             return count <= amount
    //         })
    //         setProducts(productList)
    //         //localStorage.setItem('products', JSON.stringify(productList))
    //     })()
    // }, [])
    useEffect(() => {
        setProducts(Data)
    },[])

    const handleClick = product => {
        setShowModal(true)
        setProduct(product)
    }
    const handleClickShow = product => {
        setShowimg(true)
        setProduct(product)
    }

    const cart = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log(cart);

    const handleAddCart = (item) => {
    const action = addNewCart(item)
    dispatch(action)
    console.log(cart);
    }

    // const handleToCart = () => {
    //     navigate('/cart');
    // }
  return (
    <div className='product'>
        <div className='product__title'>
            <h2>NEW ARRIVALS</h2>
        </div>
        <div className='product__list'>
            {
                products.map((product)=> {
                    product.quantity = 1;
                    return (
                    <div className='product__item' key={product.id}>
                        <div className="product__item-top">
                            <img src={product.img} className='product__item-img' alt=''/>
                            <div className="product__item-button">
                                <button onClick={() => handleClickShow(product)}>Zoom</button>
                                <button onClick={() => handleClick(product)}>View</button>
                            </div>
                        </div>
                        <span className='product__item-name'>{product.name}</span>
                        <span className='product__item-price'>${product.price}</span>
                        <button className='product__item-btn' onClick={() => handleAddCart(product)}>ADD TO CART</button>
                    </div>
                );})
            }
            {
                showModal && <ProductModal product={product} setShowModal={setShowModal} />
            }
            {
                showimg && <ShowPicture product={product} setShowimg={setShowimg} />
            }
        </div>

    </div>
  )
}

export default ProductList