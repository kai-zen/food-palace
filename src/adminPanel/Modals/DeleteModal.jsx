import React, {useContext} from 'react'
import PanelContext from './../../structure/contexts/panelContext';

const PanelDeleteModal = ({setShowDeleteModal, foodId, setShowSingleFoodModal, setClickedFoodIndex}) => {
    const {handleDeleteFood} = useContext(PanelContext);

    const handleCloseDeleteModal = ()=>{
        setClickedFoodIndex(0);
        setShowDeleteModal(false);
        document.getElementById('singleFoodModal').style.opacity = '1'; 
    }

    return ( 
        <div style={{
            padding: '30px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            height: '200px',
            justifyContent: 'space-around',
            backgroundColor: 'pink'
        }}>
            <h2>آیا از حذف {foodId}این تصمیم اطمینان دارید؟</h2>
            <button className='btn btn-danger btn-lg w-50 mx-auto' onClick={()=>{
                handleCloseDeleteModal();
                setShowSingleFoodModal(false);
                handleDeleteFood(foodId);
            }}>حذف</button>
            <span onClick={handleCloseDeleteModal} className="closeSpan"><i className='fas fa-times'></i></span>
        </div>
     );
}
 
export default PanelDeleteModal;