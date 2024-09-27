function Counter() {
    
  return (
    <div className="flex">
        <button className="bg-indigo-500 flex-none w-8">-</button>
        <span className="flex-none w-8 text-center">0</span>
        {/* <span className="flex-none w-8 text-center">{prop.counter}</span> */}
        <button className="bg-indigo-500 flex-none w-8">+</button>
    </div>
  )
}

export default Counter