import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [ArrInp, setArrInp] = useState([
    { id: 1, title: 'Based Design Mobile Learning Course on Android', ISBN: '1978-0524-2528-6374', author: 'Liranti Rahmelina' },
    { id: 2, title: 'Development of Sales Application Using QR Code', ISBN: '1978-0524-2528-6374', author: 'Ricky Akbar, Husnil Kamil' },
    { id: 3, title: 'Perancangan dan Implementasi Web Service pada Aplikasi Permainan', ISBN: '1978-0524-2528-6374', author: 'Gilang Arsya Priyatna Zaman' },
    { id: 4, title: 'Perancangan Augmented Reality Media Markerless Pol', ISBN: '1978-0524-2528-6374', author: 'Abraham Christover Manuputty' },
    { id: 5, title: 'Pengembangan SIG Berbasis Node JS untuk Pemetaan Mesin dan Tracking', ISBN: '1978-0524-2528-6374', author: 'Rachmat Fajrin' },
  ]);

  const [DataInp, SetDataInp] = useState({
    title: "",
    ISBN: "",
    author: "",
  });

  function HandlChange(e) {
    SetDataInp({
      ...DataInp,
      [e.target.name]: e.target.value,
    });
  }

  let { title, ISBN, author } = DataInp;
  function ChangeHandlChild() {
    setArrInp([
      ...ArrInp,
      {
        title,
        ISBN,
        author,
      },
    ]);
    SetDataInp({ title: "", ISBN: "", author: "" });
  }
  let HandleDelete = (i) => {
    let newInfo = [...ArrInp];
    newInfo.splice(i, 1);
    setArrInp(newInfo);
  };

  return (
    <div className="App">
      <h1>Database Jurnal</h1>
      <input
        type="text"
        autoComplete="off"
        name="title"
        value={DataInp.title}
        onChange={HandlChange}
        placeholder="Masukkan Judul"
        class="input"
      />
      <input
        type="text"
        autoComplete="off"
        name="ISBN"
        value={DataInp.ISBN}
        onChange={HandlChange}
        placeholder="ISBN"
        class="input"
      />
      <input
        type="text"
        autoComplete="off"
        name="author"
        value={DataInp.author}
        onChange={HandlChange}
        placeholder="Author"
        class="input"
      />

      <br />
      <button onClick={ChangeHandlChild} id="but">
        Tambahkan
      </button>
      <br />
      <br />
      <br />

      <table border={3} cellPadding={10} id="table">
        <tbody>
          <tr id="Header">
            <td>No.</td>
            <th>Judul </th>
            <th>ISBN</th>
            <th>Penulis</th>
            <th>Opsi</th>
          </tr>
          {ArrInp.length < 1 ? (
            <tr>
              <td colSpan={4}>Masukkan data!</td>
            </tr>
          ) : (
            ArrInp.map((info, ind) => {
              return (
                <tr key={ind}>
                  <td>{ind + 1}</td>
                  <td>{info.title}</td>
                  <td>{info.ISBN}</td>
                  <td>{info.author}</td>
                  <td>
                    <button onClick={() => HandleDelete(ind)}>Hapus</button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
