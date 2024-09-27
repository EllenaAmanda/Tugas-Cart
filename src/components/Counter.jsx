import { useState } from "react"

function Counter(props) {
    const [counter, setCounter] = useState(0)
    const cartQty = props.cartQty
    const setCartQty = props.setCartQty
    function increaseQty() {
        const newCounter = counter + 1
        setCounter(newCounter)
        setCartQty(cartQty + 1)
        // console.log(total)
        props.updateTotalPrice(newCounter * props.itemPrice)
    }

    

    function decreaseQty(){
        if (counter == 0 ) return 
        const newCounter = counter - 1
        setCounter(newCounter)
        setCartQty(cartQty - 1)
        const total = (newCounter)
        // console.log(total)
        props.updateTotalPrice(newCounter * props.itemPrice)
    }
  return (
    <div className="flex">
        <button className="bg-indigo-500 flex-none w-8 rounded h-[30px]" onClick={decreaseQty} >-</button>
        <span className="flex-none w-8 text-center">{counter}</span>
        <button className="bg-indigo-500 flex-none w-8 rounded h-[30px]" onClick={increaseQty}>+</button>
    </div>
  )
}

export default Counter