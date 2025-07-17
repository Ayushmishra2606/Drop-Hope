import React from 'react'
import {lazy , Suspense} from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login';
import Signup from './pages/Signup'

const Ngo = lazy(() => import('./pages/NGO-dashboard'))
const User = lazy(() => import('./pages/User-dashboard'))

const MyRoutes = () => {
 return (
    <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/contact' element={<Signup />} />
      <Route path='/about' element={<Signup />} />

      
      <Route
        path='/ngo'
        element={
          <Suspense fallback={<div className="text-center">Loading NGO...</div>}>
            <Ngo />
          </Suspense>
        }
      />
      <Route
        path='/user'
        element={
          <Suspense fallback={<div className="text-center">Loading User...</div>}>
            <User />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default MyRoutes