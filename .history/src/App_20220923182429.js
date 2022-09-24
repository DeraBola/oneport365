import "./App.css";
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Dashboard from "./pages/"
import  Admin from "./pages"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' component={ Dashboard } />
          <Route path='/admin' component={ Admin } /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
