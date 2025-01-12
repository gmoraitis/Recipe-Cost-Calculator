import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="container-fluid text-center p-3 bg-dark text-white min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
