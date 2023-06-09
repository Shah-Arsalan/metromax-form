import logo from './logo.svg';
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import { Form } from './Pages/Form/Form';
import { Profiles } from './Pages/Profiles/Profiles';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/profiles" element={<Profiles/>} />
      </Routes>
    </div>
  );
}

export default App;
