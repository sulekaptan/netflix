import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './index.css';

function App() {
  return (
      <>
        <Navbar/>    
        <Routes>
          <Route path="/" element={<Home />} />  
        </Routes>  
      </>
  );
}

export default App;
