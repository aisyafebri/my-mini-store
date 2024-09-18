import './App.css';
import CenteredContent from './CenteredContent';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Logo from './Assets/Pakaian-Logo.png'; // Sesuaikan path file Navbar.jsx


function App() {
  return (
    <div className="App">
     
      <Navbar />
      <CenteredContent />
      <CenteredContent />
      <CenteredContent />
      <Footer />
    </div>
  );
}

export default App;
