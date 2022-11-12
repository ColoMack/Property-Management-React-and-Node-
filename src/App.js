import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

//PAGES
import Register from './Pages/Register.js';
import Login from './Pages/Login.js';
import Dashboard from './Pages/Dashboard.js';
import Property from './Pages/Property.js';
import Tenant from './Pages/Tenant.js';
import Profile from './Pages/Profile.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/property" element={<Property />} />
        <Route path="/tenant" element={<Tenant />} />
        <Route path="/profile" element={<Profile />} />
        </Routes>     
      </BrowserRouter>
    </div>
  );
}

export default App;
