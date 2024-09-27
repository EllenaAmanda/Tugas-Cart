import React, { useEffect, useState } from 'react'
import Counter from './Counter'

function CardItem() {
    const [items, setItems] = useState([])

    useEffect( () => {
        getCart()
    }, [])
    
    const getCart = async() => {
        try{
            let URL = "https://fakestoreapi.com/products?limit=5"
            const response = await fetch(URL)
            const result = await response.json()

            setItems(result)

        }catch(e){
            console.log(e)
        }
        
    }
  return (
    <div>

        {console.log(items)}
        {items.map((items,index) => (
            <div> 
                <img className='w-24' src={items.image}/>
                <p>{items.title}</p>
                <p>${items.price}</p>
                <Counter />
                <p>Total Price</p>
            </div>
        ))

        }

        
    </div>
  )
}

export default CardItem