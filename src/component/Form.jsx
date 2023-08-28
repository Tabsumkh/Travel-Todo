 import { useState } from "react"
export default function Form({ onAddItems }) {
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState(1)
    // when we open our app , we dont want to show any items.Thus empty array.
  
  
    
    
  
  
    // Mathi app ma sareko yo function !
    // function handleAddItems(item) {
  
    //   // setItems(items => items.push(item))   => we cannot do this kina bhane we would be mutatating arrays. And mutating is not allowed in react.
    //   // setItems((items) => [...items, item]) // instead we return a new array , spread old items array and add new item. This is how we push without mutating.
    //   setItems(function () {
    //     return [...items, item]
    //   })
  
    // }
  
    function handleSubmit(e) {
      e.preventDefault()
  
      if (!description) return
  
  
      const newItem = {
        description,
        quantity,
        packed: false,
        id: Date.now()   //yaha description : description , quantity :  quantity etc hunxa . Tara since they are same name hamile description as mentioned in this object, teti matra lekhda ni hunxa
  
      }
      // console.log(newItem)
  
      onAddItems(newItem)
  
  
      setDescription('')  //when user clicks on Add (submit) button, then yiniharulai default ma haleko.
      setQuantity(1)
    }
  
    return <form className="add-form" onSubmit={handleSubmit} > {/* 
     Aba onChange bhaneko chei tyo text box ma hamro useState le description ko default value '' empty string haleko xa. So tesma change ayo bhane onChange run hunxa jasle tyo text box ma j lekheko xa teslai description ko value halidinxa.*/}
      <h3> What do you need for your 🤩 trip ? </h3>
  
      <select value={quantity} onChange={e => setQuantity(Number(e.target.value))}> {/*Always remember that e.target.value returns a string. Number pani string ma aierako hunxa so convert garna awasyak xa. So maile agadi Number() halde paxi number ma convert hunxa. */}
        {[...Array(20).keys()].map(num => (<option value={num} key={num}> {num}</option>))} {/* Array(20) bhaneko creates a new array with the  length of 20. HOWEVER it hasn't any elements yet. And all its elements are initially undefined.
        .keys() le chei itretor return garxa that produces the keys of an array. In this case the keys are from 0 - 19 (length 20).
        Ani lastly ... spread operator is used to convert the iterator returned by .keys() into an actual array, effectively creating an array with elements from 0 to 19.
        So now we have an array containing numbers from [0,1,2, ,,,,19]. Now we map on it and add select element. Tyo last ma num+1 halnu ko karan chei hamro key 0 dkehi suru hhunxa so 0+1 =1 dekhi start hunxa ra end 19 thyo paia aile 19 + 1 hunxa ani 20 hunxa*/}
      </select>
      <input type='text' placeholder="Item.." value={description} onChange={e => setDescription(e.target.value)} /> {/*Yo chei textBox ma  chadera hamile tala ko button Add ma pani sidhhei onClick function halna miltyo . Tara teso garda, tyo text ma enter click garda kam gardaina enter. Add button ma click garda matra function run huntyo. So yo way alik ramro xa. */}
      <button> Add </button>
    </form>
  
  }
  