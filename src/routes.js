import React from 'react';
import { Route, Routes, BrowserRouter} from "react-router-dom";

import Repositories from './pages/Repositories/Repositories';
import Home from './pages/Home/Home';

export default function App() {
    return (
        
        <BrowserRouter>

           <Routes>
               
               <Route path='/' element={<Home/>} />
               <Route path='/repositories' element={<Repositories/>} />

           </Routes>
        
        </BrowserRouter>
        
    
        
    )
}   