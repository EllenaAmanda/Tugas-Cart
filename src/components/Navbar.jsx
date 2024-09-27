function Navbar(props) {
  return (
    <div>
        <header>
            <nav className="flex justify-between">
                <h3>My Store</h3>
                <span>Cart{props.cartQty}</span>
            </nav>
        </header>
    </div>
  )
}

export default Navbar