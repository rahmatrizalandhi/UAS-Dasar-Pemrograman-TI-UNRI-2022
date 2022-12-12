import React from 'react'
import {useState} from 'react';
import './App.css';

function App() {
    const [inputarr,
        setInputarr] = useState([])

    const [inputdata,
        SetInputdata] = useState({title: "", ISBN: "", penulis: ""})

    function changehandle(e) {

        SetInputdata({
            ...inputdata,
            [e.target.name]: e.target.value
        })

    }

    let {title, ISBN, penulis} = inputdata;
    function changhandle() {
        setInputarr([
            ...inputarr, {
                title,
                ISBN,
                penulis
            }
        ])

        console.log(inputdata)
        SetInputdata({title: "", ISBN: "", penulis: ""})

    }
    let delethandle =(i)=>{
        let newdataArr=[...inputarr]
        newdataArr.splice(i,1)
        setInputarr(newdataArr)
    }
    function changhandle2() {
        console.log(inputarr)

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
                    console.log(result)
                })
        })

    }
    return (
        <div className="App">
            <input
                type="text"
                autoComplete='off'
                name='title'
                value={inputdata.title}
                onChange={changehandle}
                placeholder="masukkan judul"/>
            <input
                type="text"
                autoComplete='off'
                name='ISBN'
                value={inputdata.ISBN}
                onChange={changehandle}
                placeholder="masukkan isbn"/>
            <input
                type="text"
                autoComplete='off'
                name='penulis'
                value={inputdata.penulis}
                onChange={changehandle}
                placeholder="masukkan penulis"/>

            <button onClick={changhandle}>tambah
            </button><br/>
            

            <table border={1} width="30%" cellPadding={10}>
                <tbody>
                    <tr>
                        <td>No</td>
                        <th>title </th>
                        <th>ISBN</th>
                        <th>penulis</th>
                        <th>Options</th>
                    </tr>
                    {inputarr.length < 1 ?
                        <tr>
                            <td colSpan={5}>belum ada data!</td>
                        </tr>:
                    inputarr.map((info, ind) => {
                        return (
                            <tr key={ind}>
                                <td>{ind + 1}</td>
                                <td>{info.title}</td>
                                <td>{info.ISBN}</td>
                                <td>{info.penulis}</td>
                                <td><button onClick={()=>delethandle(ind)}>hapus</button></td>
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
