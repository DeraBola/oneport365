import "./App.css";
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Dashbord from "./pages/Dashbord";
import  Admin from "./pages/Admin";
import Customers from "./pages/Customers";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={ Dashbord } />
          <Route path='/admin' com={ Admin } /> 
          <Route path='/customers' component={ Customers } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
