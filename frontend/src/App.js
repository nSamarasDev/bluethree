import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from "./app/store";
import { loadUser } from "./actions/auth";
import Cookies from 'js-cookie'
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Contact from './components/contact-form/CreateContact'
import Dashboard from './components/dashboard/Dashboard'

const token = Cookies.get('token');

if (token) {
  setAuthToken(token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);


  return <Router>
    <Navbar />
    <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/contact" element={<Contact />} />

    <Route
          path="/dashboard"
          element={<PrivateRoute component={Dashboard} />}
    />
    </Routes>
  </Router>
}

export default App;
