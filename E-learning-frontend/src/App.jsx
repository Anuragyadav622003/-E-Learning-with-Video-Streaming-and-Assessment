import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';
import ComponentsRouter from './ComponentsRouter';
import Navbar from './components/Auth/Navbar';


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center container mx-auto p-4">
          <ComponentsRouter />
        </main>
      </div>
    </BrowserRouter>

  );
}

export default App;
