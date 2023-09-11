import React, {useState} from "react"

function Counter () {
  const [count, setCount] = useState(0)

  function increment () {
    /** this will not work because of how setState works and its nature */
    /*    
     setCount(count + 1)
     setCount(count + 1) 
        
    */
    /** A usefull tip for scenarios like these is to use an anon arrow function */
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
    console.log("Coool!")
  }

  return <button onClick={increment}>I have been clicked {count} times</button>
}

export default Counter
