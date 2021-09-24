import React from 'react'

const FoodInfo = () => {
    return ( 
        <div id="d2-left-part" className="col-12 col-md-5 col-lg-5 order-md-1">
            <div id="d2-left-part-flex">
                <div id="h1s-div">
                    <h1 id="d2-h1-1" className="my-d-block">قرمه سبزی</h1>
                </div>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیازا
                </p>
                <div id="d2-left-part-flex2">
                    <a href><i className="fas fa-heart" title="افزودن به علاقه مندی ها" /></a>
                    <a href><i className="fas fa-plus" title="افزودن به سبد خرید" /></a>
                    <input type="number" min={1} className="rounded" id="quantity" />
                </div>
            </div>
        </div>
     );
}
 
export default FoodInfo;