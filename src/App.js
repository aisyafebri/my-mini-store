import React from 'react';
import Navbar from './Component/Navbar';
import NavBawah from './Component/NavBawah';
import CenteredContent from './Component/CenteredContent';
import Footer from './Footer/Footer';


const App = () => {
  return (
    <div className="my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden bg-white-500 pb-[66px]">
      <Navbar />
      <CenteredContent />
      <NavBawah />
      <Footer />
    </div>
  );
};

export default App;