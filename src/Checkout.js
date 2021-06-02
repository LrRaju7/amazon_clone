import React from 'react'

import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'

import './Checkout.css'

function Checkout() {
    const [{basket, user} , dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src='https://libertv.com/wp-content/uploads/2018/03/BT-Category-Horizontal-Banner-Ad.jpg' alt='banner__ad'/>

                <div>
                    <h4>Hello, {user?.email}</h4>
                    <h2 className='checkout__title'>
                        Your Shopping Basket
                    </h2>
                </div>
                {basket.map(item =>(
                    <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
