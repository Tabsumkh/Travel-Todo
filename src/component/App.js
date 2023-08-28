import { useState } from "react"
import Logo from './Logo'
import Form from './Form'
import  PackingList  from "./PackingList"
import Stats  from "./Stats"
//  InitialItems is jus for practising.
// const initialItems = [
//   { id: 1, description: 'Passports', quantity: 2, packed: true },
//   { id: 2, description: 'Socks', quantity: 12, packed: false },
//   { id: 3, description: 'Brush', quantity: 2, packed: true },
//   { id: 4, description: 'Charger', quantity: 12, packed: false },
// ]
// 

export default function App() {
  const [items, setItems] = useState([]) // Yo chei maile suru ma form ma lkehya thiye . Ani form dekhi mathi sareko. 'Lifting State Up'

  function handleAddItems(item) {


    // setItems(function () {
    //   return [...items, item]
    // })

    setItems(items => [...items, item]) //same as above.

  }

  function handleDeleteItems(id) {
    setItems(items => items.filter(item => item.id !== id))
  }

  function handleToggleItem(id) { //again we need id to know which object we need to change. 
    setItems(items => items.map(item => item.id === id ?
      { ...item, packed: !item.packed } : item))    // whenever the item has the id that is equal to the id that we passed in than we create a brand new object based on the current item and then  => packed : !item.packed=> hamile packed ko value chei aile j xa tesko ulto haldinxam. False xa bhane true tru xa bhane false. 
    // If else , for all the other objects we will return current item
  }

  function handleClearList() { 
    const confirmed = window.confirm('Are you sure you want to delete all items ? ') // is user click ok then confirm ko value true else false 
    if (confirmed)  setItems([])
   
  }
  return <div className="app">
    <Logo />
    <Form onAddItems={handleAddItems} /> {/* passing handleAddItems as a props. onAddItems ko satta handleAddItems nai lekhda ni huntyo but yo name chei its kind of naming convention nai, so readability ko lagi. */}
    <PackingList items={items} onDeleteItem={handleDeleteItems} onToggleItem={handleToggleItem} onClearList= { handleClearList} />
    <Stats items={items} />
  </div>

}






