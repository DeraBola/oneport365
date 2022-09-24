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
          <Route path='/' exact element={<Dashbord /> } />
          <Route path='/admin' element={ <Admin /> } /> 
          <Route path='/customers'  element={ <Customers /> } />
          <Route path='/customers'  element={ <Customers /> } />
          <Route path='/customers'  element={ <Customers /> } />
          <Route path='/customers'  element={ <Customers /> } />
          <Route path='/customers'  element={ <Customers /> } />
          <Route path='/customers'  element={ <Customers /> } />
          <Route path='/customers'  element={ <Customers /> } />
          <Route path='/customers'  element={ <Customers /> } />
          
      </Router>
    </>
  );
}

export default App;
