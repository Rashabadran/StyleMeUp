
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from './Components/layout'
import Home from './Components/User/Home/Home';
import ContactUs from './Components/User/ContactUs/ContactUs';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/contactUs" element={<ContactUs/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
