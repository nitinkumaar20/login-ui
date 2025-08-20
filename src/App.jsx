import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import AccountSetting from './pages/AccountSetting';
function App() {

  return (
<Router>
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route path="/account-setting" element={<AccountSetting />} />
  </Routes>
</Router>
  )
}

export default App
