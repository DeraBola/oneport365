import "./App.css";
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Dashboard from "./pages"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' comp{ Dashboard } />
           
        </Routes>
      </Router>
    </>
  );
}

export default App;
