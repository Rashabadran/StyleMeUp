import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from './layout';
import Home from './User/Home/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
