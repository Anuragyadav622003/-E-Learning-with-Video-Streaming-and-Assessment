import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import React from 'react';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Home from './Home';
import QuizzScreen from './components/Quizz/QuizzScreen';

function ComponentsRouter() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/quizz' element={<QuizzScreen/>}/>
      </Routes>
  
  );
}

export default ComponentsRouter;
