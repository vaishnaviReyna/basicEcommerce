import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Protectroute from './routes/Protectroute';
import Home from './pages/homePage/Home';
import Signup from './pages/signupPage/Signup';
import Login from './pages/loginPage/Login';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route path="/" element={<Protectroute/>}>
    <Route  path="/" element={<Home/>}/></Route>
    <Route  path="/login_page" element={<Login/>}/>
    <Route  path="/signup_page" element={<Signup/>}/>
    </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
