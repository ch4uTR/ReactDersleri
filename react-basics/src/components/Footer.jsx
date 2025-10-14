export default function Footer(){

  // const hour = new Date().getHours();
  const hour = 8;
  const openingHour = 10;
  const closingHour = 20;
  const isOpen = hour >= openingHour && hour <closingHour;
  console.log(isOpen);


  return (
    <footer>
      {
        isOpen ?  (
        <p>You can order until {closingHour} PM!</p>
        ) :
        (
          <p>The store will be opened at {openingHour} AM!</p>
        )
      }
      
    </footer>
  );


}