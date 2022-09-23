import "./App.css";
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/dashboard' /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
