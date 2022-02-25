import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function UpdateStudent({ data, getStudents }) {
    const [student, setStudent] = useState(data);

    useEffect(() => {
        return setStudent(data)
    }, [data])

    const updateStudent = (id) => {
        if (student.name && student.name.length > 0) {
            axios
                .post(`/webapi/students/${id}`, student)
                .then((res) => {
                    if (res.data) {
                        getStudents();
                        document.querySelector('#closeUpdateModal').click()
                    }
                })
                .catch((err) => console.log(err));
        } else {
            console.log('Name field required');
        }
    };
    
    const handleInputChange = e => {
        let {name, value} = e.target;

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
        <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content" style={{ minWidth: "600px" }}>
                    <div className="modal-header">
                        <h5 className="modal-title">Update student details</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" name="name" value={student.name} onChange={handleInputChange} />
                            </div>
                            <div className="row justify-content-center">
                                <div className="mb-3 col-2">
                                    <label htmlFor="maths" className="form-label">Maths</label>
                                    <input type="number" className="form-control" id="maths" name="maths" value={student.maths} onChange={handleInputChange} />
                                </div>
                                <div className="mb-3 col-2">
                                    <label htmlFor="physics" className="form-label">Physics</label>
                                    <input type="number" className="form-control" id="physics" name="physics" value={student.physics} onChange={handleInputChange} />
                                </div>
                                <div className="mb-3 col-2">
                                    <label htmlFor="chemistry" className="form-label">Chemistry</label>
                                    <input type="number" className="form-control" id="chemistry" name="chemistry" value={student.chemistry} onChange={handleInputChange} />
                                </div>
                                <div className="mb-3 col-2">
                                    <label htmlFor="english" className="form-label">English</label>
                                    <input type="number" className="form-control" id="english" name="english" value={student.english} onChange={handleInputChange} />
                                </div>
                                <div className="mb-3 col-2">
                                    <label htmlFor="cs" className="form-label">CS</label>
                                    <input type="number" className="form-control" id="cs" name="cs" value={student.cs} onChange={handleInputChange} />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" id="closeUpdateModal" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={() => updateStudent(student._id)}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
