
function Sculpture(props){

    return (

        <div className="card shadow-sm">
            <img className="card-img-top p-2 p-md-3 border-bottom" src= { props.url } alt= { props.alt }></img>
            <div className="card-body">
                <h2 className='card-title fs-4 mb-1'>{props.name}</h2>
                <p className='text-muted small mb-2'>{props.artist} </p>
                <p id="description" className="card-text"> { props.description } </p>
            </div>
        </div>

    );
}

export default Sculpture