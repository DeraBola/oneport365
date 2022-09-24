import "./App.css";
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Dashboard from "./pages/Dashbord"
import  Admin from "./pages/Admin"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={ Dashboard } />
          <Route path='/admin' exact component={ Admin } /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
