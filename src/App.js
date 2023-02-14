import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import QrAside from "./components/QrAside";
import './index.media.css'
function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <QrAside/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/cart" element={<Cart />} />
      <Route path="/Shop" element={<Shop />} />
    </Routes>
    
    </BrowserRouter>
   
  );
}

export default App;
