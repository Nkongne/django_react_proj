import React, {Component} from "react";
import {table} from "reactstrap";
import NewStudentModal from "./NewStudentModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";
class StudentList extends Component{
    render() {
        const students=this.props.students
        return (
            <table dark>
                <thead>
                <tr>
                    <th>Nom</th>
                      <th>Tel</th>
                      <th>Email</th>
                      <th>Date Inscription</th>
                      <th></th>
                </tr>
                </thead>
                <tbody>
                {!students|| students.length<=0?(
                    <tr>
                        <td colSpan="6" align="center">
                            <b>Ops, pas d'etudiant</b>
                        </td>
                    </tr>
                ):(
                    students.map(student=>(
                        <tr key={student.pk}>
                            <td>{student.nom}</td>
                             <td>{student.tel}</td>
                             <td>{student.email}</td>
                             <td>{student.dateInscription}</td>
                            <td align="center">
                                <NewStudentModal
                                    create={false}
                                    student={student}
                                    resetState={this.props.resetState}
                                    />
                                    &nbsp;&nbsp;
                                <ConfirmRemovalModal
                                    pk={student.pk}
                                    resetState={this.props.resetState}
                                    />

                            </td>
                        </tr>
                    ))
                    )}
                </tbody>
            </table>

        );
    }
}
export default StudentList;
