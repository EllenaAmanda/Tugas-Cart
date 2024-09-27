import CardItem from "./CardItem"
import React, { useEffect, useState } from "react";

function CardList(props) {
  const [items, setItems] = useState([]);
  

  useEffect(() => {
    getCart();
  }, []);

  const getCart = async () => {
    try {
      let URL = "https://fakestoreapi.com/products?limit=5";
      const response = await fetch(URL);
      const result = await response.json();

      setItems(result);
    } catch (e) {
      console.log(e);
    }
  };

  function updateTotal(price) {
    setTotal(price);
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
                <div key={index}> 
                    <CardItem cartQty={props.cartQty} setCartQty={props.setCartQty} items={items}/>
                    {/* {console.log(items)} */}
                </div>
            ))}
        </div>
        }
      
    </div>
  )
}

export default CardList