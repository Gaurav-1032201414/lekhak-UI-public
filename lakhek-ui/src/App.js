import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Loading from './pages/Loading';
import Assistant from './pages/LekhakAssistant';
import Rewards from './pages/Rewards';
import Pricing from './pages/Pricing';
import Signup from './pages/SignUp';
// import Login from './pages/Login';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} /> 
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<Loading />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
