// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import {Navbar} from '../src/components/Navbar'
import {Home} from './components/Home'
import {About} from './components/About'
import {Products} from './components/ProductsDashboard'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element= {<Home/>}></Route>
        <Route path="/about" element= {<About/>}></Route>
        <Route path="/Products" element= {<Products/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
