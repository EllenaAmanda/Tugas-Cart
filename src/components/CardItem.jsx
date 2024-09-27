import React from 'react'
import Counter from './Counter'

function CardItem() {
  return (
    <div className='flex'>
        <img/>
        <p>Item Name</p>
        <p>Price</p>
        <Counter />
        <p>Total Price</p>
    </div>
  )
}

export default CardItem