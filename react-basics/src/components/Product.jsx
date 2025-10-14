import Swal from 'sweetalert2';

function handleAddToCartClick() {
  Swal.fire({
    title: "Successful!",
    text: "Item added to your cart",
    icon: "success",
    confirmButtonText: "Continue Shopping"
  });
}

export default function Product(props) {
  if (!props.is_active) return null;

  return (
    <div className='card shadow'>
      <img
        className='card-img-top p-2 p-md-3 border-bottom'
        src={props.imageUrl}
        alt={props.title}
      />
      <div className='card-body'>
        <h2 className='card-title'>{props.title}</h2>
        <p className='card-text'>{props.description}</p>

        <div className="d-flex align-items-center gap-2">
          <span className='badge text-bg-primary'>{props.price}</span>
          <button
            className="btn btn-success btn-sm"
            onClick={handleAddToCartClick}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
