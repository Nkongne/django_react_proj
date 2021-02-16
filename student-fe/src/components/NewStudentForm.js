import React from "react";
import { Button, Form,FormGroup,Input,Label} from "reactstrap";
import axios from "axios";
import { API_URL} from "../constants";
class NewStudentForm extends React.Component{

        state= {
            pk:0,
            nom:"",
            tel:"",
            email:"",
        };
    componentDidMount() {
        if (this.props.student) {
            const {pk, nom, tel, email} = this.props.student;
            this.setState({pk, nom, tel, email})
        }
    }
    onChange=e=>{
        this.setState({[e.target.nom]:e.target.value});

    };
    createStudent=e=>{
        e.preventDefault();
        axios.put(API_URL + this.state.pk,this.state).then(()=>{
            this.props.resetState();
            this.props.toggle();
        });
    };
    defaultIfEmpty=value=>{
        return value==="" ? "":value;

    };
    render() {
        return(
            <form onSubmit={this.props.student ? this.editStudent : this.createStudent}>
                <FormGroup>
                    <label for="nom">Nom:</label>
                    <input
                        type="text"
                        nom="nom"
                        onChange={this.onChange}
                        defaultValue={this.defaultIfEmpty(this.state.nom)}
                    />
                </FormGroup>
                 <FormGroup>
                    <label for="tel">Tel:</label>
                    <input
                        type="text"
                        tel="tel"
                        onChange={this.onChange}
                         defaultValue={this.defaultIfEmpty(this.state.tel)}
                    />
                </FormGroup>
                 <FormGroup>
                    <label for="email">Email:</label>
                    <input
                        type="email"
                        email="email"
                        onChange={this.onChange}
                   defaultValue={this.defaultIfEmpty(this.state.email)}
                    />
                </FormGroup>
                <Button>Enregistrer</Button>
            </form>
        );
    }
}
export default NewStudentForm;