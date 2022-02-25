import React, { useState } from 'react'
import axios from 'axios';

export default function AddStudent({ getStudents }) {
    const initValues = {
        name: "",
        physics: 0,
        chemistry: 0,
        maths: 0,
        english: 0,
        cs: 0
    }

    const [student, setStudent] = useState(initValues)

    const addStudent = () => {
        if (student.name && student.name.length > 0) {
            axios
                .post('/webapi/students', student)
                .then((res) => {
                    if (res.data) {
                        getStudents();
                        setStudent(initValues);
                        document.querySelector('#closeAddModal').click()
                    }
                })
                .catch((err) => console.log(err));
        } else {
            console.log('Name field required');
        }
    };

    const handleInputChange = e => {
        let { name, value } = e.target;

        if (name !== "name") {
            try {
                value = parseInt(value)
            } catch {
                value = 0
            }
        }

        setStudent({
            ...student,
            [name]: value
        })
    }

    return (
        <>
            <button type="button" className="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#addModal">Add new student</button>

            <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content" style={{ minWidth: "600px" }}>
                        <div className="modal-header">
                            <h5 className="modal-title">Enter student details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" name="name" value={student.name} id="name" onChange={handleInputChange} />
                                </div>
                                <div className="row justify-content-center">
                                    <div className="mb-3 col-2">
                                        <label htmlFor="maths" className="form-label">Maths</label>
                                        <input type="number" className="form-control" name="maths" value={student.maths} id="maths" onChange={handleInputChange} />
                                    </div>
                                    <div className="mb-3 col-2">
                                        <label htmlFor="physics" className="form-label">Physics</label>
                                        <input type="number" className="form-control" name="physics" value={student.physics} id="physics" onChange={handleInputChange} />
                                    </div>
                                    <div className="mb-3 col-2">
                                        <label htmlFor="chemistry" className="form-label">Chemistry</label>
                                        <input type="number" className="form-control" name="chemistry" value={student.chemistry} id="chemistry" onChange={handleInputChange} />
                                    </div>
                                    <div className="mb-3 col-2">
                                        <label htmlFor="english" className="form-label">English</label>
                                        <input type="number" className="form-control" name="english" value={student.english} id="english" onChange={handleInputChange} />
                                    </div>
                                    <div className="mb-3 col-2">
                                        <label htmlFor="cs" className="form-label">CS</label>
                                        <input type="number" className="form-control" name="cs" value={student.cs} id="cs" onChange={handleInputChange} />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" id="#closeAddModal" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={addStudent}>Add New</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
