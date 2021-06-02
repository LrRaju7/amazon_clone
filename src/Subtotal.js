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
            <CurrencyFormat 
                renderText={(value) =>(
                    <>
                        <p>
                        Subtotal ({basket?.length} items):  <strong>${getBasketTotal(basket)}    </strong>
                        </p>
                        <small className='subtotal__gift'>
                        <input type='checkbox'/>This order contains a gift
                        </small>
                    </>
                )}
                decimalScale = {2}
                Value = {getBasketTotal(basket)}
                displayType = {"text"}
                thousandSeparator = {true}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
