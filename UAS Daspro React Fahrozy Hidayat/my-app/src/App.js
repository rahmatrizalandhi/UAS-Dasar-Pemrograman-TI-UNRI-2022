import { useState } from 'react';
import Popup from './AddData';
import './App.css';
import data from './DataTabels.json';

function App() {

  const [databases, setDatabases] = useState(data);
  const [isPrompt, setIsPrompt] = useState(false);
  const Prompt = () => {
     setIsPrompt(!isPrompt);
  }
  const [addFormatData, setAddFormData] = useState({
    title: '',
    ISBN: '',
    AUTHOR: '',
  });

  const [count, setCount] = useState(data.id);
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldTitle = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newformatData = { ...addFormatData};
    newformatData[fieldTitle] = fieldValue;
    setAddFormData(newformatData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
  const incrementCount = () => {
    setCount(count+1);
    };

    const newDatabase = {
      title: addFormatData.title,
      ISBN: addFormatData.ISBN,
      AUTHOR: addFormatData.AUTHOR,
    };

    const newDatabases = [...databases, newDatabase];
    setDatabases(newDatabases);
  }

  return (
    <div className="App">

        <p><b >Database Jurnal dengan menggunakan React JS</b></p>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>ISBN</th>
            <th>AUTHOR</th>
          </tr>
        </thead>
        <tbody>
          {databases.map((database)=> (
          <tr>
            <td>{database.id}</td>
            <td>{database.title}</td>
            <td>{database.ISBN}</td>
            <td>{database.AUTHOR}</td>
          </tr>
          ))}

        </tbody>

      </table>
      <button onClick={Prompt}>Buat Jurnal Baru</button>


      {isPrompt && <Popup
        handleClose={Prompt}
        content={<div>
          <form onSubmit={handleAddFormSubmit}>

            <p>TITLE</p>
            <input type="text" name='title' required="required" onChange={handleAddFormChange}></input>
            <p>ISBN</p>
            <input type="text" name='ISBN' required="required"  onChange={handleAddFormChange}></input>
            <p>AUTHOR</p>
            <input type="text" name='AUTHOR' required="required"  onChange={handleAddFormChange}></input>
            <p/>
            <button type='submit'> Tambah Jurnal</button>
          </form>

          </div>}
          />}

    </div>
  );
}
export default App;