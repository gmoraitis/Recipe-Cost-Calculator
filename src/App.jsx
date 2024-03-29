// App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Table from './components/Table';
import Footer from './components/Footer';
import './index.css' 


function App() {
  const [rows, setRows] = useState([]);

  return (
    <div className=" container-fluid text-center p-3 bg-dark text-white min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <Header />
      <Form setRows={setRows} />
      <Table rows={rows} setRows={setRows} />
      <Footer />
    </div>
  );
}

export default App;
