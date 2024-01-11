import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(5)

  const addValue = () => {
    setCount(count + 1);

    /*
    Itereview question:
    setCount(count+1);
    setCount(count+1);
    setCount(count+1);

    Q. In above case, on pressing the increment button,how many times the counter will increase?
    Ans - only once because the useState stores (or sends) updates (setCount) in batches and in a batch if all the updates are doing same thing then it will update only once.
    */

    /*
    All the states like setCount are functions that accepts some callback functions
    setCount(() => {})
    setCount((prevCount) => {})
    prevCount - a var that stores last state.
    */

    /*
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);

    Now it's not a bunch of task but we are accepting previous state and updating it every time.

    Now it will update 2 times
    a bit diff syntax : setCount((prevCount) => prevCoumt + 1)
    */
  }

  const decreaseValue = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <h2>Count : {count}</h2>    
      <button
        onClick={addValue}
      >Increment</button> <br/>

      <button
        onClick={decreaseValue}
      >Decrement</button>  
    </>
  )
}

export default App
