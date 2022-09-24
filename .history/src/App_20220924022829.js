import "./App.css";
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Dashbord from "./pages/Dashbord";
import  Admin from "./pages/Admin";
import Customers from "./pages/Customers";
import Shipments from "./pages/Shipments";
import Tracking from "./pages/Tracking";
import Documents from "./pages/Documents";
import Rates from "./pages/Custo";
import Customers from "./pages/Customers";
import Customers from "./pages/Customers";
import Customers from "./pages/Customers";
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
          <Route path='/shipments'  element={ <Shipments /> } />
          <Route path='/tracking'  element={ <Tracking/> } />
          <Route path='/documents'  element={ <Documents /> } />
          <Route path='/rates'  element={ <Rates /> } />
          <Route path='/quotes'  element={ <Quotes /> } />
          <Route path='/invoices'  element={ <Invoices /> } />
          </Routes>
      </Router>
    </>
  );
}

export default App;
