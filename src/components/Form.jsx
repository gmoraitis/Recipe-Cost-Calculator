// components/Form.js
import React, { useState } from 'react';
import Table from './Table';

function Form() {
  const [rows, setRows] = useState([]);

  const addTableRow = () => {
    setRows(prevRows => [...prevRows, {
      name: '',
      pricePerKilo: '',
      gramPerPortion: '',
      pricePerPortion: ''
    }]);
  };

  const removeTableRow = (indexToRemove) => {
    setRows(prevRows => prevRows.filter((row, index) => index !== indexToRemove));
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedRows = [...rows];
    updatedRows[index][name] = value;
    setRows(updatedRows);
  };

  return (
    <div>
      <form>
        <div>
          <button type="button" className="btn btn-outline-success" onClick={addTableRow}>Add Row</button>
        </div>
        <div>
        {rows.length > 0 && <Table rows={rows} removeTableRow={removeTableRow} handleInputChange={handleInputChange} />}
        </div>
        
      </form>
    </div>
  );
}

export default Form;
