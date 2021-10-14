import React, {useContext} from 'react';
import MainContext from '../../ContextAPI';

const FoodInfo = () => {
    const context = useContext(MainContext);
    let handleToggleToList = context.handleToggleToList;
    return ( 
        <div id="d2-left-part" className="col-12 col-md-5 col-lg-5 order-md-1">
            <div id="d2-left-part-flex">
                <div id="h1s-div">
                    <h1 id="d2-h1-1" className="my-d-block">قرمه سبزی</h1>
                </div>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیازا
                </p>
                <div id="d2-left-part-flex2">
                    <label className='d2leftPartIcons'>
                        <i className="fas fa-heart" onClick={(event)=>handleToggleToList(event.target, '0', true, true)}/>
                    </label>
                    <label className='d2leftPartIcons'>
                        <i className="fas fa-shopping-cart" onClick={(event)=>handleToggleToList(event.target, '0', false, true)}/>
                    </label>
                </div>
            </div>
        </div>
     );
}
 
export default FoodInfo;