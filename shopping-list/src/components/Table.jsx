import Item from "./Item";

function Table({ items , onDeleteItem, onChangeOrderStatus, onQuantityChange}){
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
          <Item key={item.id} {...item} onDeleteItem = { onDeleteItem } onChangeOrderStatus = { onChangeOrderStatus } onQuantityChange = { onQuantityChange }/>
        ))}
      </tbody>
    </table>
  );
}

export default Table