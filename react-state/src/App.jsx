import { sculptureList } from "./data.js";
import { useState } from "react";





function App(){

  const [index, setIndex] = useState(0) //Bir değişken ve o değişkeni değiştirecek bir metot tanımlıyoruz //Parametre olarak değişkenin başlangıç değerini atıyoruz
  const [showMore, setShowMore] = useState(false);

  let sculpture = sculptureList[index];

  function handlePreviousClick(){
    setIndex((index -1 + sculptureList.length) % sculptureList.length);
    setShowMore(false);
  }

  function handleNextClick(){
    setIndex((index + 1) % sculptureList.length);
    setShowMore(false);
  }

  function handleMoreClick(){
    setShowMore(!showMore);
  }

  return (
    <> 
      <div className='container d-flex align-items-center gap-2'>
        <div className="card shadow-sm">
            <img className="card-img-top p-2 p-md-3 border-bottom" src= { sculpture.url } alt= { sculpture.alt }></img>
            <div className="card-body">
                <h2 className='card-title fs-4 mb-1'>{sculpture.name}</h2>
                <p className='text-muted small mb-2'>{sculpture.artist} </p>
                { showMore && <p id="description" className="card-text"> { sculpture.description } </p> }
            </div>
        </div>
        <div className="d-flex align-items-center gap-2">
          <button onClick={ handlePreviousClick }>Previous</button>
          <button onClick={ handleMoreClick }>{ showMore ? "Show Less" : "Show More"}</button>
          <button onClick={ handleNextClick }>Next</button>
        </div>
        <p>
          ({index + 1} of {sculptureList.length})
        </p>
      </div>
    </>
  );

}


export default App