import "./App.css";
import { BrowserRouter as Router, Route , Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch >
          <Route path='/' /> 
        </Switch>
      </Router>
    </>
  );
}

export default App;
