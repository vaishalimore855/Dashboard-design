import logo from "./logo.svg";


import Dashboard from "./Components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
function App() {
  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        
      </Routes>
    </BrowserRouter> 
    </>
  );
}

export default App;
