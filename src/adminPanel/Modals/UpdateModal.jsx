import React, {useContext, useEffect} from 'react'
import PanelContext from './../../structure/contexts/panelContext';

const UpdateModal = ({foodInfo, setShowUpdateModal, setShowSingleFoodModal}) => {
    const {handleUpdateFood} = useContext(PanelContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        let name = document.getElementById("updateName").value;
        let price = Number.parseInt(document.getElementById('updatePrice').value);
        
        let select = document.getElementById('updateCategory');
        let category = select.options[select.selectedIndex].value;

        let data = {
            name,
            price,
            category,
        }

        handleUpdateFood(foodInfo.id, data);
    }

    const handleCloseUpdateModal = ()=>{
        setShowUpdateModal(false);
        document.getElementById('singleFoodModal').style.opacity = '1'; 
    }

    useEffect(()=>{
        document.getElementById("updateName").value = foodInfo.name;
        document.getElementById('updatePrice').value = foodInfo.price;
        let select = document.getElementById('updateCategory');
        select.options[select.selectedIndex].value = foodInfo.category;
    }, [])

    return ( 
        <div id='updateModal' style={{
            backgroundColor: 'lightblue'
        }}>
        <form>
            <div>
                <h3>نام غذا:</h3>
                <input type="text" name="" id="updateName" className="form-control"/>
            </div>
            <div>
                <h3>قیمت غذا:</h3>
                <input type="text" name="" id="updatePrice" className="form-control"/>
            </div>
            <div>
                <h3>دسته بندی:</h3>
                <select className="form-control" id='updateCategory'>
                    <option>سنتی</option>
                    <option>فست فود</option>
                    <option>گیاهی</option>
                </select>
            </div>
            <button className='btn btn-info btn-lg' type='submit' onClick={(event)=>{
                handleCloseUpdateModal();
                setShowSingleFoodModal(false);
                handleSubmit(event);
            }}>
                ثبت
            </button>
        </form>
        <span onClick={handleCloseUpdateModal} className="closeSpan">
            <i className='fas fa-times'></i>
        </span>
    </div>
     );
}
 
export default UpdateModal;