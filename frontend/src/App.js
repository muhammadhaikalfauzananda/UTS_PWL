import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produk from './components/Produk';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Produk />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
