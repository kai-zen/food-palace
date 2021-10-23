import React from 'react'

const AddModal = ({handleShowAddModal}) => {
    return (
    <div id='addModal'>
        <form>
            <div>
                <h3>نام غذا:</h3>
                <input type="text" name="" id="" className="form-control" />
            </div>
            <div>
                <h3>قیمت غذا:</h3>
                <input type="text" name="" id="" className="form-control"/>
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
        </form>
        <span onClick={handleShowAddModal} className="closeSpan">
            <i className='fas fa-times'></i>
        </span>
    </div>
     );
}
 
export default AddModal;