import CardList from "./components/CardList";
import Navbar from "./components/Navbar";
import { useState } from "react"

function App() {
  const [cartQuantity, setCartQuantity] = useState(0)
  
  return (
    <div className="container mx-auto px-10 ">
      
      <Navbar cartQty={cartQuantity} />
      <CardList cartQty={cartQuantity} setCartQty={setCartQuantity}/>
    </div>
  );
}

export default App;
