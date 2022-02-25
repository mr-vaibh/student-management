import React, { useState, useEffect } from 'react'
import axios from 'axios';

import AddStudent from './AddStudent';
import UpdateStudent from './UpdateStudent'
import StudentList from './StudentList';

export default function Student() {
    const [students, setStudents] = useState([])
    const [student, setStudent] = useState({})

    const [searchStr, setSearchStr] = useState('')

    useEffect(() => {
        getStudents();
    }, [])
    
    const getStudents = () => {
        axios
            .get('/webapi/students')
            .then((res) => {
                if (res.data) {
                    setStudents(res.data);
                    console.log(res.data)
                }
            })
            .catch((err) => console.log(err));
    };

    const deleteStudent = (id) => {
        axios
            .delete(`/webapi/students/${id}`)
            .then((res) => {
                if (res.data) {
                    getStudents();
                }
            })
            .catch((err) => console.log(err));
    };
    
    return (
        <>
            <AddStudent getStudents={getStudents} />
            <UpdateStudent data={student} getStudents={getStudents} />

            <input type="text" class="form-control my-3" placeholder="Search..." value={searchStr} onChange={(e) => setSearchStr(e.target.value)} />
             
            <h3>List of students</h3>
            
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Physics</th>
                        <th scope="col">Chemistry</th>
                        <th scope="col">Maths</th>
                        <th scope="col">English</th>
                        <th scope="col">Comp. Sci.</th>
                        <th scope="col" style={{ color: 'red' }}>Percentage</th>
                    </tr>
                </thead>
                
                <StudentList students={students} setStudent={setStudent} searchStr={searchStr} deleteStudent={deleteStudent} />
                
            </table>
        </>
    )
}
