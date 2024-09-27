import CardItem from "./CardItem"

function CardList(props) {
  return (
    <div>

        <CardItem cartQty={props.cartQty} setCartQty={props.setCartQty} />
      
    </div>
  )
}

export default CardList