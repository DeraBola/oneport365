import "./App.css";
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route  >
          <Route path='/' /> 
        </Switch>
      </Router>
    </>
  );
}

export default App;
