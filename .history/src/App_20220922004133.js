import "./App.css";
import {Router} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <switch ></Switch>
      </Router>
    </>
  );
}

export default App;