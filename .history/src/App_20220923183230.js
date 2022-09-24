import "./App.css";
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Dashboard from "./pages/Dashbord"
import  Admin from "./pages/Admin"import 
 Admin from "./pages/Customers"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={ Dashboard } />
          <Route path='/admin' component={ Admin } /> 
          <Route path='/customers' component={ Admin } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
