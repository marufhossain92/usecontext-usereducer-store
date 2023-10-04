import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Navbar from "./components/Navbar";
import { StoreProvider } from "./context-and-reducer/StoreContext";

function App() {
  return (
    <StoreProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
}

export default App;
