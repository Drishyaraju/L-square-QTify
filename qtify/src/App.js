// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx'
import { StyledEngineProvider } from '@mui/material';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="Navbar">
    <StyledEngineProvider injectFirst><Navbar/></StyledEngineProvider>
    </div>
  );
}

export default App;
