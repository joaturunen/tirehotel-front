import 'bootstrap/dist/css/bootstrap.css';
import react, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Header from './components/header';
import Login from './pages/login';
import Home from './pages/home';
import NewCustomer from './pages/newCustomer';
import Warehouse from './pages/warehouse';
import Search from './pages/search';
import Customers from './pages/customers';
import CustomerList from './pages/customerlist';
import Customer from './pages/Customer.js';
import Empty from './pages/empty';
import {URL} from './back/Config';



function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <Router>
        <Header/>
        
        <Navbar />
        
        <Routes>
          
          <Route path="/" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/newCustomer" element={<NewCustomer/>}/>
          <Route path="/warehouse" element={<Warehouse/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/customers" element={<Customers />}>
            <Route index element={<CustomerList url={URL}/>}/>
            <Route path=":customer_id" element={<Customer url={URL} />}/>
          </Route>
          <Route path="*" element={<Empty />} />
        </Routes>
        
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
