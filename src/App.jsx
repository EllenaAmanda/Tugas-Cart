import CardList from "./components/CardList";
import Navbar from "./components/Navbar";
import { useState } from "react"

function App() {
  const [cartQuantity, setCartQuantity] = useState(0)
  return (
    <div className="container mx-auto px-4">
      
      <Navbar cartQty={cartQuantity} />
      <CardList />
    </div>
  );
}

export default App;
