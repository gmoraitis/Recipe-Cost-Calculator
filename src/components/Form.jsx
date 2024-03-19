// components/Form.js
import React, { useState } from 'react';
//We import the Table component, which we'll use to display the table in our form. (?its coming in?)
import Table from './Table';

function Form() {
  //We use the useState hook to create a state variable rows, 
  //which will hold the data for each row in our table. Initially, it's set to an empty array.
  const [rows, setRows] = useState([]);

  //This function is responsible for adding a new row to the table 
  //when the "Add Row" button is clicked. It updates the rows state by 
  //adding a new object with empty values for each field.
  const addTableRow = () => {
    setRows(prevRows => [...prevRows, {
      name: '',
      pricePerKilo: '',
      gramPerPortion: '',
      pricePerPortion: ''
    }]);
  };

  //This function removes a row from the table when the "Remove" button is clicked. 
  //It filters out the row to be removed based on its index in the rows array.
  const removeTableRow = (indexToRemove) => {
    setRows(prevRows => prevRows.filter((row, index) => index !== indexToRemove));
  };

  //This function handles input changes in the table rows. 
  //It updates the corresponding field in the rows state based on the input's name and value.
  const handleInputChange = (index, event) => {
    console.log('the index:',index, 'the event',event)
    const { name, value } = event.target;
    console.log('the name: ', name, 'the value: ', value)
    const updatedRows = [...rows];
    console.log('const updateRows with ... ', updatedRows )
    updatedRows[index][name] = value;
    console.log('updatedRows[index][name] = value;',updatedRows[index][name] )
    setRows(updatedRows);
  };

  //We render a form element containing a button 
  //to add rows and the Table component to display the table.
  return (
    <div className='container'>
        <div className='mb-3'> 
          <button type="button" className="btn btn-outline-success" onClick={addTableRow}>Add Row</button>
        </div>
        <div className='row'>
          {rows.length > 0 && <Table rows={rows} removeTableRow={removeTableRow} handleInputChange={handleInputChange} />}
        </div>
    </div>
  );
}

export default Form;
