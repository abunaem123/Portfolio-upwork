import './App.css';
import Home from './components/Pages/Home/Home';
import { Routes,Route } from "react-router-dom";
import Navbar from './components/Shared/Navbar/Navbar';
import About from './components/Pages/Home/About/About';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
