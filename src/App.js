import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Protectroute from './routes/Protectroute';
import Home from './pages/homePage/Home';
import Signup from './pages/signupPage/Signup';
import Login from './pages/loginPage/Login';
import Cart from './pages/CartPage/Cart';
import Update from './pages/updatePage/Update';
import CreatePost from './pages/createpostPage/CreatePost';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Routes>

    <Route path="/" element={<Protectroute/>}>
    <Route  path="/" element={<Home/>}/>
    </Route>

    <Route  path="/login_page" element={<Login/>}/>
    <Route  path="/signup_page" element={<Signup/>}/>
    
    <Route path="/cart_page" element={<Cart/>}/>
    <Route path="/update_page/:id" element={<Update/>}/>
    <Route path="/createpost_page" element={<CreatePost/>}/>

    </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
