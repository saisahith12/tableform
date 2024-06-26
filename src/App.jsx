import React from 'react';
import Table from './components/Table';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OrganizationForm from './components/OrganizationForm';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Table/>} />
          <Route path='/employee-create' element={<OrganizationForm/>} />
          
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
