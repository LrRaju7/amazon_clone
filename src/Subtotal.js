import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer';

import { useStateValue } from './StateProvider'

import './Subtotal.css'

function Subtotal() {
    const [{basket}] = useStateValue();

    console.log(getBasketTotal(basket))
    return (
        <div className='subtotal'>
            <CurrencyFormat value={getBasketTotal(basket)} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <>
                        <p>
                        Subtotal ({basket?.length} items):  <strong>{value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                        <input type='checkbox'/>This order contains a gift
                        </small>
                    </>} decimalScale={2}/>

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
