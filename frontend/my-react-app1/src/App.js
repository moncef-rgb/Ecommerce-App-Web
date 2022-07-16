//import logo from './logo.svg';
import './App.css';
//import Navbarre from './Component/Navbarre';
import 'bootstrap/dist/css/bootstrap.min.css'
import ListRoutes from './Routes/ListRoutes';
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { CartProvider } from 'react-use-cart';
// import CarouselHome from './Component/CarouselHome';
// import SignIn from './Component/SignIn';
//import{CartProvider, useCart} from 'react-use-cart'


function App() {
  return (
    <div>
      <CartProvider>
        <Router>
          {/* <Navbarre /> */}
          {/* <CarouselHome /> */}
          <ListRoutes />
          <ToastContainer />
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
