import { Route, Routes, Link } from "react-router-dom";
import Form from "./components/Form";
import Home from "./pages/Home";
import CounterPage from "./pages/CounterPage";

function App() {
  return (
    <div className="App"> 
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </ul>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/counter" element={<CounterPage/>}/>
        <Route path="/register" element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
