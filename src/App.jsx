import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './components/context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productinfo/Productinfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllProducts from './pages/allproducts/Allproducts';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/mentoons-project/" element={<Navigate to="/mentoons-project/home" />} />
          <Route path="/mentoons-project/home" element={<Home />} />
          <Route path="/mentoons-project/allproducts" element={<AllProducts />} />
          <Route path="/mentoons-project/contact" element={<Contact />} />
          <Route path="/mentoons-project/about" element={<About />} />
          <Route path="/mentoons-project/order" element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          } />
          <Route path="/mentoons-project/cart" element={<Cart />} />
          <Route path="/mentoons-project/admin" element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path='/mentoons-project/dashboard' element={<Dashboard />} />
          <Route path='/mentoons-project/login' element={<Login />} />
          <Route path='/mentoons-project/signup' element={<Signup />} />
          <Route path='/mentoons-project/productinfo/:id' element={<ProductInfo />} />
          <Route path='/mentoons-project/addproduct' element={
            <ProtectedRouteForAdmin>
              <AddProduct />
            </ProtectedRouteForAdmin>
          } />
          <Route path='/mentoons-project/updateproduct' element={
            <ProtectedRouteForAdmin>
              <UpdateProduct />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/mentoons-project/*" element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  );
}

export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user');
  if (user) {
    return children;
  } else {
    return <Navigate to="/mentoons-project/login" />;
  }
};

const ProtectedRouteForAdmin = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.email === 'bhavnamishra.jbp@gmail.com') {
    return children;
  } else {
    return <Navigate to="/mentoons-project/login" />;
  }
};

export default App;
