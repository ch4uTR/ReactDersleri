import { useState } from "react";
import  Header  from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table";
import Item from "./components/Item";
import Summary from "./components/Summary";



function App(){

  const [items, setItems] = useState([]);
  

  function handleAddItem(item){
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(item){
    setItems((items) => items.filter(i => i.id !== item.id))
  }

  function handleOrderStatusChange(item){
    setItems(items => items.map(i => i.id === item.id ? {...i, ordered: !i.ordered} : i ));
  }

  function handleQuantityChange({item, operator}){
    let newQuantity = operator === "+" ? item.quantity + 1 : item.quantity - 1;
    setItems(items => items.map(i => i.id == item.id ? {...i, quantity: newQuantity} : i));
  }

  function handleDeleteAllItems(){
    setItems([]);
  }


  return (
    <>
      <div className="container mt-5">
        <Header />
        <Form onAddItem = { handleAddItem} onDeleteAllItems={ handleDeleteAllItems } />
        <Table items = {items} onDeleteItem={ handleDeleteItem} onChangeOrderStatus = { handleOrderStatusChange } onQuantityChange = { handleQuantityChange}/>
        <Summary isFull = {items.length > 0}  count = {items.length}/>
      </div>
    </>
  );

}

export default App