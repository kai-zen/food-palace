import React, {useState, useContext} from 'react'
import { Modal } from 'react-bootstrap';
import { isEmpty } from 'lodash';
import './adminPanel.css';
import Foods from '../foods/Foods';
import AddModal from './Modals/AddModal';
import Section4 from '../sections/Section4/Section4';
import LoginContext from '../structure/contexts/loginContext';
import MainContext from './../structure/contexts/mainContext';
import Wave from '../others/Wave';
import { Redirect } from 'react-router';

const AdminPanel = () => {
    const {allFoods} = useContext(MainContext);
    const {loggedInUser} = useContext(LoginContext);
    const[showAddModal, setShowAddModal] = useState(false);

    const handleShowAddModal = () => {
        setShowAddModal(!showAddModal);
    }

    const isLoggedIn = ()=>{
        if(isEmpty(loggedInUser) || loggedInUser.isAdmin === false){
            return <Redirect to='/'/>
        }
    }

    return (
        <div id='adminPanelParent'>
            {isLoggedIn()}
            <div className='container' style={{
                paddingBottom: '30px'
            }}>
                <h1 className='d-block h1'>ADMIN PANEL</h1>
                <button className='btn btn-lg btn-success' id='addNewFood'
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
                <Foods foodsToShow={allFoods} titleOfThisMenu={null} renderFooterOrNot={false}/>
            </div>
            <Wave/>
            <Section4/>
        </div>
     );
}
 
export default AdminPanel;