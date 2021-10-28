import React, {useContext} from 'react';
import PanelContext from './../../structure/contexts/panelContext';
import MainContext from './../../structure/contexts/mainContext';

const AddModal = ({handleShowAddModal}) => {
    const {allFoods} = useContext(MainContext);
    const {handleAddFood} = useContext(PanelContext);

    const handleUploadedPhoto = () => {
        let photoFile = document.getElementById('addPhoto').files[0];
        const reader = new FileReader();
        reader.readAsDataURL(photoFile);

        reader.addEventListener('load', ()=>{
            localStorage.setItem('uploadedImage', reader.result);
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let name = document.getElementById("addName").value;
        let price = Number.parseInt(document.getElementById('addPrice').value);
        
        let select = document.getElementById('addCategory');
        let category = select.options[select.selectedIndex].value;

        let iteration = allFoods.length;
        let foodId = allFoods[--iteration].id;
        let id = ++foodId;
        let isItInCart = false;
        let isItInFav = false;
        let orderQuantity = 0;
        let photo = localStorage.getItem('uploadedImage');

        let data = {
            id,
            name,
            price,
            category,
            orderQuantity,
            isItInCart,
            isItInFav,
            photo
        }

        handleAddFood(data);
    }

    return (
    <div id='addModal'>
        <form>
            <div>
                <h3>نام غذا:</h3>
                <input type="text" name="" id="addName" className="form-control" />
            </div>
            <div>
                <h3>قیمت غذا:</h3>
                <input type="text" name="" id="addPrice" className="form-control"/>
            </div>
            <div>
                <h3>تصویر غذا:</h3>
                <input type="file" onChange={handleUploadedPhoto} name='' className="form-control-file" id="addPhoto"/>
            </div>
            <div>
                <h3>دسته بندی:</h3>
                <select className="form-control" name='' id='addCategory'>
                    <option>سنتی</option>
                    <option>فست فود</option>
                    <option>گیاهی</option>
                </select>
            </div>
            <button className='btn btn-success btn-lg' type='submit' onClick={(e)=>{
                handleSubmit(e);
                handleShowAddModal();
            }}>
                ثبت
            </button>
        </form>
        <span onClick={handleShowAddModal} className="closeSpan">
            <i className='fas fa-times'></i>
        </span>
    </div>
     );
}
 
export default AddModal;