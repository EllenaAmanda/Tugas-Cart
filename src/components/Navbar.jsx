import cartIcon from "../assets/cart.svg"

function Navbar(props) {
  return (
    <div className="py-3 border-b-2 border-indigo-500">
        <header>
            <nav className="flex justify-between">
                <h3 className="font-bold text-3xl text-indigo-500">My Store</h3>
                <div className="flex it">
                    <img src={cartIcon} className="w-8"/><span className="bg-red-600 rounded-full h-6 w-6 text-center text-white text-sm">{props.cartQty}</span>
                </div>
                
            </nav>
        </header>
    </div>
  )
}

export default Navbar