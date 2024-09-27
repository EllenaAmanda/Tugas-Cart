import React, { useState } from "react";
import Counter from "./Counter";

function CardItem(props) {
    // {console.log(props.items)}
    const [total, setTotal] = useState(0);

    const updateTotalPrice = (price) => {
        setTotal(price)
    }
    return (
        <div className='border-2 border-indigo-600 px-5 py-3 my-5 grid grid-cols-8 gap-4 items-center rounded font-thin' >
        <img className="h-32" src={props.items.image} />
        <p className="col-span-3 font-medium">{props.items.title}</p>
        <p className="text-center">${props.items.price}</p>
        <Counter
            cartQty={props.cartQty}
            setCartQty={props.setCartQty}
            itemPrice={props.items.price}
            updateTotalPrice={updateTotalPrice}/>
        <div className="grid col-span-2 justify-center text-center">
            <p>Total: </p>
            <p>${total}</p>
        </div>
        
        </div>
    );
}

export default CardItem;
