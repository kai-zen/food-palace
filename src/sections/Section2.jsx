import React, { useContext, useEffect } from 'react';
import MainContext from '../structure/contexts/mainContext';

const Section2 = () => {
  const { allFoods, handleToggleToList } = useContext(MainContext);

  const setIconColors = () => {
    let heartIcon = document.getElementById('d2-heart-icon');
    let cartIcon = document.getElementById('d2-cart-icon');
    if (allFoods[3].isItInFav && heartIcon) {
      heartIcon.style.color = 'red';
    } else {
      heartIcon.style.color = 'var(--white)';
    }
    if (allFoods[3].isItInCart && cartIcon) {
      cartIcon.style.color = 'green';
    } else {
      cartIcon.style.color = 'var(--white)';
    }
  };

  useEffect(() => {
    setIconColors();
  });

  const categories = ['فست فود', 'گیاهخواری', 'سنتی ایرانی'];
  return (
    <div id="div2">
      <img
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          maxWidth: '25%',
        }}
        src="Images/offer.png"
        alt=""
      />
      <div className="container">
        {/* نمایش دسته بندی ها */}
        <div className="categoriesElementRow row">
          <div className="categoriesElement offset-1 col-10 offset-md-6 col-md-6 offset-xl-7 col-xl-5">
            <input
              type="radio"
              className="catRadio"
              name="hi"
              id="d2cat1"
              hidden
            />
            <label htmlFor="d2cat1" className="label">
              {categories[0]}
            </label>
            <input
              type="radio"
              className="catRadio"
              name="hi"
              id="d2cat2"
              hidden
            />
            <label htmlFor="d2cat2" className="label">
              {categories[1]}
            </label>
            <input
              type="radio"
              defaultChecked
              className="catRadio"
              name="hi"
              id="d2cat3"
              hidden
            />
            <label htmlFor="d2cat3" className="label">
              {categories[2]}
            </label>
          </div>
        </div>
        <div className="row">
          {/* کروسل دوم */}
          <div id="d2-right-part" class="col-12 col-md-7 col-lg-7 order-md-2">
            <div id="d2-slideshow">
              <div id="d2-carousel">
                <div class="carousel-inner rounded-circle">
                  <div class="d2-carousel-item">
                    <img
                      class="d2-carousel-img w-100"
                      src={allFoods[3].photo}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* اطلاعات غذا */}
          <div
            id="d2-left-part"
            className="col-12 col-md-5 col-lg-5 order-md-1"
          >
            <div id="d2-left-part-flex">
              <div id="h1s-div">
                <h1 id="d2-h1-2">{allFoods[3].name}</h1>
              </div>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از ه لازم است، و
                برای شرایط فعلی تکنولوژی مورد نیازا
              </p>
              <div id="d2-left-part-flex2">
                <label className="d2leftPartIcons">
                  <i
                    className="fas fa-heart"
                    id="d2-heart-icon"
                    onClick={(event) =>
                      handleToggleToList(
                        event.target,
                        allFoods[3].id,
                        true,
                        true
                      )
                    }
                  />
                </label>
                <label className="d2leftPartIcons">
                  <i
                    className="fas fa-shopping-cart"
                    id="d2-cart-icon"
                    onClick={(event) =>
                      handleToggleToList(
                        event.target,
                        allFoods[3].id,
                        false,
                        true
                      )
                    }
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
