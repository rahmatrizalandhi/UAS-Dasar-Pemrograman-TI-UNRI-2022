import React from 'react'
import {useState} from 'react';
import './App.css';


function App() {
    const [inputarr,
        setInputarr] = useState([
          { id: 1, name: "John Doe", ISBN: "3212039120", rollNo:"Takin"},
          { id: 2, name: "Jane Doe", ISBN: "3112132322", rollNo:"ilham"},
          { id: 3, name: "Bob Smith", ISBN: "272323213", rollNo:"wahyu"}
        ])

    const [inputdata,
        SetInputdata] = useState({name: "",ISBN:"", rollNo: ""})

    function changehandle(e) {

        SetInputdata({
            ...inputdata,
            [e.target.name]: e.target.value
        })

    }

    let {name,ISBN, rollNo} = inputdata;
    function changhandle() {
        setInputarr([
            ...inputarr, {
                name,
                ISBN,
                rollNo
            }
        ])

        console.log(inputdata, "input data what we Enter")
        SetInputdata({name: "", ISBN:"", rollNo: ""})

    }
    let delethandle =(i)=>{
        let newdataArr=[...inputarr]
        newdataArr.splice(i,1)
        setInputarr(newdataArr)
    }
    function changhandle2() {
        console.log("Object store in array", inputarr)

        fetch("https://jsonplaceholder.typicode.com/users", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputdata)
        }).then((resp) => {
            resp.JSON()
                .then((result) => {
                    console.log("result", result)
                })
        })

    }
    return (
        <div id="input" className="App">
          <h1>Tabel Jurnal</h1>
            <input
                type="text"
                autoComplete='off'
                name='name'
                value={inputdata.name}
                onChange={changehandle}
                class="input"
                placeholder="Judul"/>
                <br/>
            <input
                type="text"
                autoComplete='off'
                name='ISBN'
                value={inputdata.ISBN}
                onChange={changehandle}
                class="input"
                placeholder="ISBN"/>
                <br/>
            <input
                type="text"
                autoComplete='off'
                name='rollNo'
                value={inputdata.rollNo}
                onChange={changehandle}
                class="input"
                placeholder="Outhor"/>
                <br/>

            <button id="tambah" onClick={changhandle}>Tambah
            </button>
            <br/>
            <br/>
            <br/>
      
            <table  border={1} width="100%"  cellPadding={10}>
                <tbody>
                    <tr id="table">
                        <th>No</th>
                        <th>Judul</th>
                        <th>ISBN</th>
                        <th>Outhor</th>
                        <th>Options</th>
                    </tr>
                    {inputarr.length < 1 ?
                        <tr>
                            <td colSpan={4}>Tidak Ada Data Yang Dimasukkan !</td>
                        </tr>:
                    inputarr.map((info, ind) => {
                        return (
                            <tr key={ind}>
                                <td>{ind + 1}</td>
                                <td>{info.name}</td>
                                <td>{info.ISBN}</td>
                                <td>{info.rollNo}</td>
                                <td><button id="delet" onClick={()=>delethandle(ind)}>Delete</button></td>
                            </tr>
                        )
                    })
}

                </tbody>
            </table>
        </div>
    );
}

export default App;