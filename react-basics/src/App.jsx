import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";



export default function App(){ //export ile diğer dosyalardan çapırılabilir hale getiriyorum, tek component -> default
  return (
    <>
      <Header />
      <div className='container mt-3'>
        <ProductList />
        <Footer />
      </div>
    </>
  ); 
}