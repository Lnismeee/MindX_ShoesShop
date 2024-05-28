import "./App.css";
import ProductList from "./page/ProductList";
import News from "./Page/News";
import Contact from "./Page/Contact";
import { Routes, Route } from "react-router-dom";
import Header from "./page/theme/Header/Header";
import Footer from "./page/theme/Footer";
import Example1 from "./components/Example";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Example1></Example1>
      <Footer />
    </>
  );
}

export default App;
