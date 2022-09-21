import "./App.css";
import {Router} from 'react-router-dom';
import Navbar from './components'

function App() {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
    </>
  );
}

export default App;