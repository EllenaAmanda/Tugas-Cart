import React, { useEffect, useState } from 'react'
import Counter from './Counter'

function CardItem(props) {
    const [items, setItems] = useState([])
    const [total, setTotal] = useState(0)

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

    function updateTotal (price) {
        setTotal(price)
    }
    
  return (
    <div>
        {(items.length == 0) 
        ? 
        <div className="text-center ">
            <span className='text-xl text-slate-400 font-bold'>Loading...</span> 
        </div>
        :
        <div>
            {items.map((items,index) => (
                <div className='border border-indigo-600 px-5 py-3 my-5 grid grid-cols-5 gap-4' key={index}> 
                    <img className='w-24' src={items.image}/>
                    <p>{items.title}</p>
                    <p>${items.price}</p>
                    <Counter cartQty={props.cartQty} setCartQty={props.setCartQty} itemPrice={items.price} updateTotal={updateTotal} />
                    <p>{items.price}</p>
                </div>
            ))}
        </div>
        }
        

        
    </div>
  )
}

export default CardItem