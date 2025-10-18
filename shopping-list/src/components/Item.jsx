function Item(props){
  let orderedStyle = {color: "green", fontWeight: "500", textDecoration : "line-through"};
  let inorderedStyle = {color: "red", fontWeight: "500"};
  let style = props.ordered ?  orderedStyle :  inorderedStyle
  let buttonClass =  "btn btn-light shadow-sm" ;

  return(
    <>
      <tr>
        <td> { props.id } </td>
        <td style = { style}>  { props.title } </td>
        <td> <button className= { buttonClass } onClick={ () => props.onQuantityChange({item: props, operator: "-"})}>-</button> { props.quantity } <button className= { buttonClass } onClick={ () => props.onQuantityChange({item: props, operator: "+"})}>+</button></td>
        <td style = { style }> { props.ordered ? "Alındı" : "Alınmadı" } </td>
        <td> <button className= {"btn btn-danger"} onClick={ () => props.onDeleteItem(props) }> { "Sil" }</button></td>
        <td> <button className= { props.ordered ? "btn btn-warning" : "btn btn-success" } onClick={ () => props.onChangeOrderStatus(props)}> { props.ordered ? "Tekrar alınacak olarak işsaretle" : "Alındı olarak işaretle" }</button></td>
      </tr>
    </>
  );
}

export default Item