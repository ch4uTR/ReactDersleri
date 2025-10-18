import { useState } from "react";

// const Items = [
//   {id: 1, title: "Yumurta", quantity: 10, ordered: true},
//   {id: 2, title: "Ekmek", quantity: 2, ordered: true},
//   {id: 3, title: "Süt", quantity: 1, ordered: false},
//   {id: 4, title: "Yumurta", quantity: 30, ordered: true},
//   {id: 5, title: "Zeytin", quantity: 25, ordered: false},
// ]





function Header({ onAddItem }){

  return (
    <>
      <h1 className=""> <i className="fa-solid fa-cart-shopping" style={ {color: "#7FAD39"}}></i>Shopping List</h1>
    </>
  );

}



function Form({ onAddItem }){

  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(1);
 
  

  function handleFormSubmit(e){
    e.preventDefault();

    const newItem = { id: Date.now() , title, quantity, ordered: false};
    onAddItem(newItem);

    setQuantity(1);
    setTitle("");
    console.log(newItem);
  }
  return(
    <>
        <form className="form" onSubmit={ handleFormSubmit}>
          <div className="form-group mt-2">
            <label htmlFor="Name"> Ürün Adı</label>
            <input  id="Name" type="text" className="form-control" placeholder="Ürün adını giriniz..." value = { title } onChange={ (e) => setTitle(e.target.value) }></input>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="Quantity"> Adet</label>
            <select  id="Quantity" className="form-control" value={ quantity } onChange={ (e) => setQuantity(Number(e.target.value))}>
              { 
                Array.from({length: 10}, (v, i) => i + 1).map(num => <option value={ num } key={ num }> { num }</option>)
              }
            </select>
          </div>
          <button type="submit" className="btn btn-success mt-2">Ekle</button>
        </form>
    </>
  );
}


function Table({ items , onDeleteItem, onChangeOrderStatus}){
  return (
    <table className="table mt-3">
      <thead>
        <tr>
          <th>Index</th>
          <th>İsim</th>
          <th>Adet</th>
          <th>Alındı mı?</th>
          <th>Eylem</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <Item key={item.id} {...item} onDeleteItem = { onDeleteItem } onChangeOrderStatus = { onChangeOrderStatus }/>
        ))}
      </tbody>
    </table>
  );
}

function Item(props){
  let orderedStyle = {color: "green", fontWeight: "500", textDecoration : "line-through"};
  let inorderedStyle = {color: "red", fontWeight: "500"};
  let style = props.ordered ?  orderedStyle :  inorderedStyle

  return(
    <>
      <tr>
        <td> { props.id } </td>
        <td style = { style}>  { props.title } </td>
        <td style={ style }> { props.quantity } </td>
        <td style = { style }> { props.ordered ? "Satıldı" : "Satılmadı" } </td>
        <td> <button className= {"btn btn-danger"} onClick={ () => props.onDeleteItem(props) }> { "Sil" }</button></td>
        <td> <button className= { props.ordered ? "btn btn-warning" : "btn btn-success" } onClick={ () => props.onChangeOrderStatus(props)}> { props.ordered ? "Tekrar alınacak olarak işsaretle" : "Alındı olarak işaretle" }</button></td>
      </tr>
    </>
  );
}

function Summary({ isFull, count }) {
  const message = isFull
    ? `Alışveriş sepetinizde ${count} ürün bulunmakta!`
    : "Alışveriş sepetiniz henüz boş!";

  return (
    <footer className="summary">
      {message}
    </footer>
  );
}

  


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


  return (
    <>
      <div className="container mt-5">
        <Header />
        <Form onAddItem = { handleAddItem } />
        <Table items = {items} onDeleteItem={ handleDeleteItem} onChangeOrderStatus = { handleOrderStatusChange }/>
        <Summary isFull = {items.length > 0}  count = {items.length}/>
      </div>
    </>
  );

}

export default App