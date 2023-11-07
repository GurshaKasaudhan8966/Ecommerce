
import './App.css';
import HPage from './customer/Pages/HomePages/HPage';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import DeliveryAddressForm from './customer/components/Checkout/DeliveryAddressForm';
import Footer1 from './customer/components/Footer/Footer1';
import Nav from './customer/components/Navigations/Nav';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
      <Nav/>
      <div>
        {/* <HPage/> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        <Checkout/>
        {/* <DeliveryAddressForm/> */}
      </div>
      <Footer1/>
      <h1>ghsgdhshdjshj</h1>
    </div>
  );
}

export default App;
