import Cards from '../../components/cards/Index'
import React, { useState, useEffect } from 'react';
import './styles.css'
export default function Home(){
    const [StudedName, setStudedName] = useState()
    const [students, setStudents] = useState([])
    const [ID, SETID] = useState(0)
    const [user, setUser] = useState({name: '', avatar: ''})
    function addStudents(){
        SETID(ID + 1)
        const newStudent = {
            name: StudedName,
            time: new Date().toLocaleTimeString("pt-br",{
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            }),
            ids: ID,
        }
    setStudents(prevState => [...prevState, newStudent])
    }

    useEffect(()=> {
        fetch('https://api.github.com/users/ryan1235')
        .then(res => res.json())
        .then(data =>{
            setUser({
                name: data.name,
                avatar: data.avatar_url
            })
        })
    },[])

    return(
        <div className='conteiner'>
         <header>
          <h1>Lista de presença</h1>
          <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil do usuario" />
          </div>
         </header>
         <input type="text" placeholder='digite o nome..' onChange={e=> setStudedName(e.target.value)}/>
         <button onClick={addStudents}>Adicionar</button>
         {
             students.map(student => <Cards key={student.ids} id={student.ids} name={student.name} time= {student.time}/>) 
         }
         </div>
    )
}