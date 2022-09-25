import "./App.css";
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' {Dashboard} />
           
        </Routes>
      </Router>
    </>
  );
}

export default App;