import { useState } from "react";

function Form({ onAddItem, onDeleteAllItems}){

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
          <button className="btn btn-danger mt-2 ms-3" onClick={ (e) => {e.preventDefault(); onDeleteAllItems()}}>Tüm Ürünleri Sil</button>
        </form>
    </>
  );
}

export default Form