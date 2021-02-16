import React, {Component, Fragment} from "react";
import {Modal,ModalHeader,Button,ModalFooter} from "reactstrap";
import axios from "axios";
import {API_URL} from "../constants";
class ConfirmRemovalModal extends Component{
    state={
        modal:false
    };
    toggle=()=>{
        this.setState(previous=>({
            modal:!previous.modal
        }));
    };
    deleteStudent=pk=>{
        axios.delete(API_URL +pk).then(()=>{
            this.props.resetState();
            this.toggle();
        });
    };
    render() {
        return(
            <fragment>
                <Button color="danger" onClick={()=>this.toggle()}>
                    Supprimer
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        voulez vous vraiment supprimer l'etudiant?
                    </ModalHeader>
                    <ModalFooter>
                        <Button type="button" onClick={()=>this.toggle()}>Annuler</Button>
                        <Button
                            type ="button"
                            color="primary"
                            onClick={()=>this.deleteStudent(this.props.pk)}
                            >OUI</Button>
                    </ModalFooter>
                </Modal>
            </fragment>
        );
    }
}
export default ConfirmRemovalModal;