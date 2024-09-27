import CardItem from "./CardItem"

function CardList(props) {
  return (
    <div>
      {/* {console.log(props.cartQty)} */}
        <CardItem cartQty={props.cartQty} setCartQty={props.setCartQty} />
        
    </div>
  )
}

export default CardList