import React from 'react'

const UpdateModal = ({foodInfo, setShowUpdateModal}) => {

    const handleCloseUpdateModal = ()=>{
        setShowUpdateModal(false);
        document.getElementById('singleFoodModal').style.opacity = '1'; 
    }

    return ( 
        <div id='updateModal' style={{
            backgroundColor: 'lightblue'
        }}>
        <form>
            <div>
                <h3>نام غذا:</h3>
                <input type="text" name="" id="" className="form-control" value={foodInfo.name}/>
            </div>
            <div>
                <h3>قیمت غذا:</h3>
                <input type="text" name="" id="" className="form-control" value={foodInfo.price}/>
            </div>
            <div>
                <h3>تصویر غذا:</h3>
                <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
            </div>
            <div>
                <h3>دسته بندی:</h3>
                <select className="form-control">
                    <option>سنتی</option>
                    <option>فست فود</option>
                    <option>گیاهی</option>
                </select>
            </div>
            <button className='btn btn-info btn-lg' type='submit'>
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