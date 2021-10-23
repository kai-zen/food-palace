import React, {useState} from 'react'
import { Modal } from 'react-bootstrap';
import './adminPanel.css'
import AddModal from './AddModal';
import Section4 from '../sections/Section4/Section4';

const AdminPanel = () => {
    const[showAddModal, setShowAddModal] = useState(false);

    const handleShowAddModal = () => {
        setShowAddModal(!showAddModal);
    }

    return (
        <div id='adminPanelParent'>
            <div className='container'>
                <h1 className='d-block'>ADMIN PANEL</h1>
                <button className='btn btn-warning btn-lg btn-dark' id='addNewFood'
                onClick={handleShowAddModal}
                >
                    افزودن غذای جدید
                </button>
                    <Modal
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={showAddModal}>
                        <AddModal handleShowAddModal={handleShowAddModal}/>
                    </Modal>
                <Section4/>
            </div>
        </div>
     );
}
 
export default AdminPanel;