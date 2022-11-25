import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Protectroute from './routes/Protectroute';
import Home from './pages/homePage/Home';
import Signup from './pages/signupPage/Signup';
import Login from './pages/loginPage/Login';
import Cart from './pages/CartPage/Cart';
import Themecontext from './pages/Context';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route path="/" element={<Protectroute/>}>
    <Route path="/theam_page" element={<Themecontext/>}/>
    <Route  path="/" element={<Home/>}/></Route>
    <Route  path="/login_page" element={<Login/>}/>
    <Route  path="/signup_page" element={<Signup/>}/>
  
    <Route path="/cart_page" element={<Cart/>}/>
    </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
