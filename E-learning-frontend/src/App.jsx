import React from 'react';
import ComponentsRouter from './ComponentsRouter';
import Navbar from './components/Auth/Navbar';
import Footer from './components/Auth/Footer';
import Banner from './components/Auth/Banner';

function App() {
  return (<>
    <Navbar/>
    <Footer/>
    <Banner/>
    <div className='min-h-screen grid place-content-center bg-gray-100 p-4 sm:p-8 md:p-12 lg:p-16'>
      <ComponentsRouter />
    </div>
    </>
  );
}

export default App;
