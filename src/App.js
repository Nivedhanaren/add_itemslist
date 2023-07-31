import { useState } from "react";
import "./App.css";
import './style.css'

function App() {
  const [items, setItems] = useState([]);
  const [nitems, setNitems] = useState("");
  function onRemoveItem(itemToRemove) {
    const newItems = items.filter((item) => {
      return item !== itemToRemove;
    });
    setItems(newItems);
  }
  function onSubmit(e) {
    e.preventDefault();
    if (!nitems) return;
    const listItems = [...items, nitems];
    setItems(listItems);
    setNitems("");
  }

  return (
    <>
      <h1>Add Shopping List</h1>
      <div className="shopping-list">
        <h2>List to buy</h2>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="item"
            placeholder="Add a new item"
            required
            value={nitems}
            onChange={(e) => setNitems(e.target.value)}
          ></input>
          <button>ADD</button>
        </form>
        <ul>
          {items.map((item, index) => (
            <Item onRemoveItem={onRemoveItem} item={item} key={index}></Item>
          ))}
        </ul>
      </div>
    </>
  );
}
function Item({ onRemoveItem, item }) {
  return (
    <li>
      {item}
      <button className="delete" onClick={() => onRemoveItem(item)}>x</button>
    </li>
  );
}
export default App;
