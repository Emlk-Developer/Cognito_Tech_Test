import Products from "./ui/Products/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import GlobalStyle from './globalStyles';


function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
