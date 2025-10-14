import { backend_response } from "../data";
import Product from "./Product";


export default  function ProductList() {

  // const style = {display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center", border: "2px solid #7Fad39", borderRadius: "10px", padding: "20px"}

  
  
  // const backend_response = [];
  
  return (
    <>
      {
        backend_response.length > 0 ? (
          <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4' id="product-list">


          {
          backend_response
          .filter(p => p.is_active)
          .map((p, index) => (
            <div className='col' key={index}>
               <Product {...p} /> 
            </div>
            
          ))}

        </div>
        ) : 
        (
            <p>There is no available product!</p>
        )
      }     
    </> 
  );
}
