import React, {useEffect, useContext, useState} from 'react';
import { Modal } from 'react-bootstrap';
import PanelDeleteModal from '../adminPanel/Modals/DeleteModal';
import UpdateModal from '../adminPanel/Modals/UpdateModal';
import LoginContext from '../structure/contexts/loginContext';
import MainContext from '../structure/contexts/mainContext';
import './singleFood.css'

const SingleFoodModal = ({setShowSingleFoodModal, foodInfo}) => {
    const context = useContext(MainContext);
    const {loggedInUser} = useContext(LoginContext);

    const handleToggleToList = context.handleToggleToList;

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleShowDeleteModal = () => {
        setShowDeleteModal(true);
        document.getElementById('singleFoodModal').style.opacity = '0.5'; 
    }

    const [showUpdateModal, setShowUpdateModal] = useState(false);

    const handleShowUpdateModal = () => {
        setShowUpdateModal(true);
        document.getElementById('singleFoodModal').style.opacity = '0.5'; 
    }

    const panelOptions = () => {
        if(loggedInUser && loggedInUser.isAdmin){
            return (
                <div>
                    <button className='btn btn-lg btn-danger m-1' onClick={handleShowDeleteModal}>حذف غذا</button>
                    <Modal
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        show={showDeleteModal}>
                        <PanelDeleteModal setShowDeleteModal={setShowDeleteModal} />
                    </Modal>
                    <button className='btn btn-lg btn-warning m-1' onClick={handleShowUpdateModal}>ویرایش غذا</button>
                    <Modal
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        show={showUpdateModal}>
                        <UpdateModal setShowUpdateModal={setShowUpdateModal} foodInfo={foodInfo}/>
                    </Modal>
                </div>
            )
        }else{
            return null;
        }
    }

    useEffect(() => {
        if(foodInfo.isItInFav){
            document.getElementById('heartIcon').style.color = 'red';
        };
        if(foodInfo.isItInCart){
                document.getElementById('cartIcon').style.color = 'green';
        };
    });

    return ( 
        <div id="singleFoodModal">
            <img src={`/Images/${foodInfo.category}/${foodInfo.name}.jpg`} alt="" className='rounded-circle' style={{
                border: '2px solid black'
            }}/>
            <p className="singleFoodModalP">نام غذا: {foodInfo.name}</p>
            <p className="singleFoodModalP">قیمت: {foodInfo.price} تومان</p>
            <p className="singleFoodModalP">تعداد سفارشات: {foodInfo.orderQuantity} بار</p>
            <div className="singleFoodIcons">
                <span className="iconStyle d3IconStyle" id='heartIcon'>
                    <i className="fas fa-heart" onClick={(event)=>handleToggleToList(event.target, foodInfo.id, true, true)}>
                    </i>
                </span>
                <span className="iconStyle d3IconStyle" id='cartIcon'>
                    <i className="fas fa-shopping-cart" onClick={(event)=>handleToggleToList(event.target, foodInfo.id, false, true)}>
                    </i>
                </span>
            </div>
            <span onClick={()=>setShowSingleFoodModal(false)} className="closeSpan"><i className='fas fa-times'></i></span>
            {panelOptions()}
        </div>
     );
}
 
export default SingleFoodModal;