import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import store from '../utils/store';
import CartItem from './CartItem';
import {clearCart} from "../utils/cartSlice"

 const Cart = ()=> {
    const cartItems = useSelector((store)=>store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = ()=>{

        dispatch(clearCart());
    }

  return (
    <div>
    <h1 className="font bold text-2xl">Cart Items -{cartItems.length}</h1>
    <button className='bg-green-100 p-2 m-2' onClick={()=>handleClearCart()}>Clear Cart</button>
    <div className='flex'>{cartItems.map(item=> <CartItem key={item.id} {...item} />)}
    </div>
    </div>
  )
}

export default Cart