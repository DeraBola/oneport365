import "./App.css";
import {Router, Switch, R} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch >
          <Route  path='/' /> 
        </Switch>
      </Router>
    </>
  );
}

export default App;