import CardItem from "./components/CardItem";
import CardList from "./components/CardList";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
// import { useState } from "react"

function App() {
  // const [cartQuantity, setCartQuantity] = useState(0)
  return (
    <div className="container mx-auto px-4">
      {/* <Counter counter={count} /> */}
      {/* <CardItem /> */}
      <Navbar />
      <CardList />
    </div>
  );
}

export default App;
