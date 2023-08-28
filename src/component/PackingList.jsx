import { useState } from "react";
import  Item  from "./Item";

export default function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;
  if (sortBy === 'input') sortedItems = items; // default value input mai hunxa. So input ma huda sortedItems ma items ko value basxa. 
  if (sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description)); // description ko value select garim bhane yo run hunxa. So yesma chei item ko paxadi slice use garnu ko karan chei sort() le chei mutate garxa. So slice le copy banauxam ra balla sort use garxam .Now the important part, localCompare. 

  if (sortBy === 'packed') sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  /*
LocaleCompare : It compares the string character by character and returns:
• a negative value if the first string should be sorted before the second.
• a positive value if the first string should be sorted after the second.
• 0 if the strings are considered equal in terms of sort order.
 
The return values are in congruence with the sort() method's sort order.
sort() uses the return value of localeCompare to rearrange the strings in ascending (alphabetical) order. As a result, the array of strings is sorted according to the current locale settings.
 
 */
  return (

    <div className='list' key=''>

      <ul>
        {sortedItems.map(item => (<Item item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={item.id} />))} {/*sortedItems ma hamro sab items xa */} {/* packing list mai hamiai onDeleteItem props chaidaina, tara it is the only way to pass the props down to its Item component. */}


      </ul>

      <div className="actions">

        <select value={sortBy} onChange={e => setSortBy(e.target.value)}> {/* sortyBy ko default value input xa so input ma lekheko data dekhauxa. onChange le maile arko select option choose garey bhane setSortBy ko value e.target.value le j select garyo tei haldinxa.   */}

          <option value='input'> Sort by input order </option>
          <option value='description'> Sort by description </option>
          <option value='packed'> Sort by packed status</option>

        </select>

        <button onClick={onClearList}> Clear List</button>
      </div>

    </div>
  );
}
