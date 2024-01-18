import React, { useEffect, useState } from "react";
import fruits from "./Components/data";

function App() {
  const[fruit, setFruit]= useState("")
  const[suggesstions, setSuggestions]= useState([])

  // Here fruit is initially an empty string, and item.startsWith(fruit) will return true for all items in the
  // fruits array because every string starts with an empty string. Hence, all fruits are included in the 
  // suggestions array and displayed on the page.Once a user starts typing, fruit will no longer be an empty 
  // string, and item.startsWith(fruit) will only return true for fruits that start with the user’s input, 
  // updating suggestions accordingly.

  useEffect(()=>{
    setSuggestions(fruits.filter((item)=>(
      item.startsWith(fruit)
    )))
  }, [fruit])

  function handleInputChange(e){
    setFruit(e.target.value);
  }
  return (
    <div>
      <input type="text" placeholder="Search fruit..." onChange={handleInputChange} ></input>
      <ul>
        {
          suggesstions.map((item)=>(
            <li>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App;
