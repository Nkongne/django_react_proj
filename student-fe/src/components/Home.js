import React , {Component} from "react";
import {Col, Container, Row} from "reactstrap";
import StudentList from "./StudentList";
import NewStudentModal from "./NewStudentModal";
import axios from "axios";
import {API_URL} from "../constants";

class Home extends Component{
    state={
        students:[]
    };
    componentDidMount() {
        this.resetState();
    }
    getStudents=()=>{
    axios.get(API_URL).then(res=>this.setState({students:res.data}));

    };
    resetState=()=>{
        this.getStudents();
    };
    render() {
        return(
            <container style={{marginTop: "20px"}}>
                <row>
                    <Col>
                        <StudentList
                            students={this.state.students}
                            resetState={this.resetState}
                            />
                    </Col>
                </row>
                 <row>
                    <Col>
                        <NewStudentModal create={true} resetState={this.resetState}/>

                    </Col>
                </row>
            </container>

        );
    }
}
export default Home;