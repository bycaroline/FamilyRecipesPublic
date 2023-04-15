import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from './components/firebase'
import { query, collection, onSnapshot, doc, updateDoc, addDoc, getDocs } from 'firebase/firestore'
import NewRece from "./components/NewRece";
import ReadRece from "./components/ReadRece";
import ExampleRece from "./components/ExampleRece";
import './App.css';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Account from "./components/Account";
import { AuthContextProvider } from "./Context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import NavbarSignedIn from "./components/NavbarSignedIn";
import Home from "./components/Home";



const style = {
  bg: `h-screen w-screen p-4 `
}



function App() {


  return (
    <div className={style.bg}>


      <AuthContextProvider >

        <Routes>

          <Route path='/' element={<SignIn />} />

          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
          <Route path='/new-recipe' element={<ProtectedRoute><NewRece /></ProtectedRoute>} />
          <Route path='/all-recipes' element={<ProtectedRoute><ReadRece /></ProtectedRoute>} />
        </Routes>
      </AuthContextProvider>





    </div>
  );
}

export default App;
