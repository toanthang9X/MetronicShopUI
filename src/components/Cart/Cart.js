import React from "react";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {increaseCart,removeCart,decreaseCart} from '../../actions/cart'
import './style.scss'

const Cart = () => {
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };
  const total = cart.reduce(addition, 0);

  const handleRemoveCart = (item) => {
    const action = removeCart(item)
    dispatch(action)
  }
  const handleIncreaseCart = (item) => {
    const action = increaseCart(item)
    dispatch(action)
  }
  const handleDecreaseCart = (item) => {
    const action = decreaseCart(item)
    dispatch(action)
  }
  return (
    <div className="cartcontainer">
      <Link to="/product">
        <TiArrowBack />
      </Link>
      <div className="cart">
        {cart.map((item) => {
          return (
            <div className="cart__cad" key={item.id}>
              <div className="cart__info">
                <img src={item.img} alt="cart" />
                <h4>{item.name}</h4>
                <p> price: ksh. {item.price}</p>
                <p>amount : ksh.{item.price * item.quantity}</p>
                <button
                  onClick={() => handleRemoveCart(item)}
                >
                  remove
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleIncreaseCart(item)}
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() => {
                    if (item.quantity > 1) {
                      handleDecreaseCart(item)
                    } else {
                      handleRemoveCart(item)
                    }
                  }}
                >
                  -
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {total > 0 && <h2>total:{total}</h2>}
    </div>
  );
};

export default Cart;
