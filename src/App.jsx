import CardItem from "./components/CardItem";
import CardList from "./components/CardList";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
// import { useState } from "react"

function App() {
  // const [count, setCounter] = useState(0)
  return (
    <>
      {/* <Counter counter={count} /> */}
      {/* <CardItem /> */}
      <Navbar />
      <CardList />
    </>
  );
}

export default App;
