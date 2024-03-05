import React from 'react'
import { useState } from 'react'

const App = () => {
 
  let [num , setNum] = useState(0)

  function addNum() {
    
    setNum(num + 1)    

  }
  function subNum() {
   num ===0? console.log("your value is zero") : setNum(num - 1)
   return
  
  }


console.log(num);
  return (
    <>
    <h1>hello world {num}</h1>

    <button onClick={addNum}>Add</button>
    <button onClick={subNum}>Sub</button>
    
    
    
    
    </>
  )
}

export default App







