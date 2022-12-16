import "./App.css";
import React from "react";
import { getData } from "./util/data";
import { useState } from "react";

function App() {
  const data = getData();
  const [jurnal, setJurnal] = useState(data);
  const [window, setWindow] = useState(false);
  const [tambah, setTambah] = useState(false);

  const toggleModal = () => {
    setWindow(!window);
  };

  return (
    <div className="app-container">
      <h2>Database Jurnal dengan ReactJs</h2>
      <div className="table">
        <table>
          <thead>
            <tr className="table-header">
              <th>ID</th>
              <th>TITLE</th>
              <th>ISBN</th>
              <th>AUTHOR</th>
            </tr>
          </thead>
          <tbody>
            {jurnal.map((data, key) => {
              return (
                <tr key={key}>
                  <td>{data.id}</td>
                  <td>{data.title}</td>
                  <td>{data.isbn}</td>
                  <td>{data.author}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button
        onClick={() => {
          toggleModal();
        }}
      >
        <h4>Buat Jurnal Baru</h4>
      </button>

      {window && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <form>
              <h2>Tambah Jurnal</h2>
              <h5>title :</h5>
              <input type="text" className="input-box" />
              <h5>ISBN :</h5>
              <input type="text" className="input-box" />
              <h5>Author :</h5>
              <input type="text" className="input-box" />
              <div>
                <button className="close-modal" onClick={toggleModal}>
                  CLOSE
                </button>
                <button className="close-modal" onClick={toggleModal}>
                  TAMBAH JURNAL
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
