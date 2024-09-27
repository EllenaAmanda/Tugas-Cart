import React, { useState } from "react";
import Counter from "./Counter";

function CardItem(props) {
    {console.log(props.items)}
    const [total, setTotal] = useState(0);

    const updateTotalPrice = (price) => {
        setTotal(price)
    }
    return (
        <div className='border border-indigo-600 px-5 py-3 my-5 grid grid-cols-5 gap-4' >
        <img className="w-24" src={props.items.image} />
        <p>{props.items.title}</p>
        <p>${props.items.price}</p>
        <Counter
            cartQty={props.cartQty}
            setCartQty={props.setCartQty}
            itemPrice={props.items.price}
            updateTotalPrice={updateTotalPrice}/>
        <p>{total}</p>
        </div>
    );
}

export default CardItem;
