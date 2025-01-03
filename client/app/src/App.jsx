import Cart from "./pages/Cart";
import Homepage from "./pages/Homepage";
import Login from "./pages/login";
import Recommendation from "./pages/Recommendation";
import Register from "./pages/register";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/recommend" element={<Recommendation />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
