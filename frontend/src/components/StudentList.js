import React from 'react'

export default function StudentList({ students, setStudent, searchStr, deleteStudent }) {
    return (
        <tbody>
            {
                students.filter(student => student.name.toLowerCase().match(searchStr)).map((each, index) => (
                    <tr key={index + 1}>
                        <th scope="row">{index + 1}</th>
                        <td>{each.name}</td>
                        <td>{each.physics}</td>
                        <td>{each.chemistry}</td>
                        <td>{each.maths}</td>
                        <td>{each.english}</td>
                        <td>{each.cs}</td>
                        <td>{(each.physics + each.chemistry + each.maths + each.english + each.cs) / 5} %</td>
                        <td>
                            <i
                                className="fa-solid fa-pen-to-square"
                                data-bs-toggle="modal"
                                data-bs-target="#updateModal"
                                onClick={() => setStudent({
                                    _id: each._id,
                                    name: each.name,
                                    maths: each.maths,
                                    physics: each.physics,
                                    chemistry: each.chemistry,
                                    english: each.english,
                                    cs: each.cs,
                                })}
                            ></i>
                        </td>
                        <td><i className="fa-solid fa-trash" onClick={() => deleteStudent(each._id)}></i></td>
                    </tr>
                ))
            }
        </tbody>
    )
}
