
import './App.css';
import Start from './screens/start';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './screens/signin';
import Signup from './screens/signup';
import Home from './screens/home';
import Admin from './screens/admin';
import Formm from './screens/form';
import User from './screens/user';
import Cart from './screens/cart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/form" element={<Formm />} />
          <Route path="/user" element={<User />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
