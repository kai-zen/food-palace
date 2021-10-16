import React, {useState} from 'react';
import MainContext from './ContextAPI';
import { allFoodsInfo } from './allFoodsInfo';

const GlobalState = (props) => {
    // همه غذاها
    const [allFoods, setAllFoods] = useState([
        allFoodsInfo.ghormeSabzi,
        allFoodsInfo.gheyme,
        allFoodsInfo.koobide,
        allFoodsInfo.morgheKamel,
        allFoodsInfo.aashReshteh,
        allFoodsInfo.dizi,
        allFoodsInfo.maahi,
        allFoodsInfo.joojeKabab,
        allFoodsInfo.pizza,
        allFoodsInfo.hamburger,
        allFoodsInfo.pasta,
        allFoodsInfo.wrapeMorgh,
        allFoodsInfo.steak,
        allFoodsInfo.steakeMorgh,
        allFoodsInfo.pirashki,
        allFoodsInfo.sokhari,
        allFoodsInfo.homos,
        allFoodsInfo.taco,
        allFoodsInfo.vegeterianPizza,
        allFoodsInfo.pooreSibzamini,
        allFoodsInfo.pancake,
        allFoodsInfo.crap,
        allFoodsInfo.cake,
        allFoodsInfo.sweet,
      ]);

      // غذاهای هر منو
      const sonatiFoods = [...allFoods.filter(eachFood => eachFood.category==='سنتی')];
      const fastfoods = [...allFoods.filter(eachFood => eachFood.category==='فست فود')];
      const giahiFoods = [...allFoods.filter(eachFood => eachFood.category==='گیاهی')];

      // غذاهای مورد علاقه و سبد
      const [favoriteFoods, setFavoriteFoods] = useState([]);
      const [cartFoods, setCartFoods] = useState([]);

      //متود افزودن به مورد علاقه و سبد
      // افزودن به لیست
      const handleAddToList = (element, foodIndex, isFav, isIcon) => {
        if(isFav){
          allFoods[foodIndex].isItInFav = true;
          let currentFavorites = [...favoriteFoods];
          currentFavorites.push(allFoods[foodIndex]);
          let uniqeCurrentFavorites = [...new Set(currentFavorites)];
          setFavoriteFoods(uniqeCurrentFavorites);
          if(isIcon){
            element.style.color = 'red';
          }
        }else{
          allFoods[foodIndex].isItInCart = true;
          let currentCartFoods = [...cartFoods];
          currentCartFoods.push(allFoods[foodIndex]);
          let uniqeCurrentCarts = [...new Set(currentCartFoods)];
          setCartFoods(uniqeCurrentCarts);
          if(isIcon){
            element.style.color = 'green'
          }else{
            element.innerText = 'حذف از سبد'
          }
        }
      };
      // حذف از لیست
      const handleRemoveFromList = (element, foodIndex, isFav, isIcon) => {
        if(isFav){
          allFoods[foodIndex].isItInFav = false;
          let currentFavorites = [...favoriteFoods];
          currentFavorites = currentFavorites.filter(food => food.id !== foodIndex);
          setFavoriteFoods(currentFavorites);
          if(isIcon){
            element.style.color = 'var(--white)'
          }
        }else{
          allFoods[foodIndex].isItInCart = false;
          let currentCartFoods = [...cartFoods];
          currentCartFoods = currentCartFoods.filter(food => food.id !== foodIndex);
          setCartFoods(currentCartFoods);
          if(isIcon){
            element.style.color = 'var(--white)'
          }else{
            element.innerText = 'سفارش'
          }
        }
      };
      const handleToggleToList = (element, foodIndex, isFav, isIcon) =>{
        if(isFav){
          allFoods[foodIndex].isItInFav ? handleRemoveFromList(element, foodIndex, true, isIcon) : handleAddToList(element, foodIndex, true, isIcon)
        }else{
          allFoods[foodIndex].isItInCart ? handleRemoveFromList(element, foodIndex, false, isIcon):handleAddToList(element, foodIndex, false, isIcon)
        }   
      }
      //مدیریت نمایش پاپ آپ
      const [showMenusModal, setShowMenusModal] = useState(false);
      const [showUserModal, setShowUserModal] = useState(false);

      const handleShowMenusModal = () => {
        setShowMenusModal(!showMenusModal);
      }
      const handleShowUserModal = () => {
        setShowUserModal(!showUserModal);
      };
      //اطلاعات کاربر
      const [userInfo, setUserInfo] = useState([
        {
        'age' : '35',
        'name' : 'رضا مولایی',
        'email' : 'rezamoalei@gmail.com'
        }
      ]);
      //کامپوننت محاسبه قیمت
      const handleCalculater = () => {
        let currentCartFoods = [...cartFoods];
        let totalPrice = 0;
        for(let i=0; i<currentCartFoods.length; i++){
          let price = parseInt(currentCartFoods[i].price);
          totalPrice = totalPrice + price;
        }
        if(totalPrice === 0){
          return '--'
        }else{
          return totalPrice;
        }    
      }
    return (
        <MainContext.Provider value={{
            allFoods: allFoods,
            sonatiFoods: sonatiFoods,
            fastfoods: fastfoods,
            giahiFoods: giahiFoods,
            favoriteFoods: favoriteFoods,
            cartFoods: cartFoods,
            handleToggleToList: handleToggleToList,
            showMenusModal: showMenusModal,
            showUserModal: showUserModal,
            handleShowMenusModal: handleShowMenusModal,
            handleShowUserModal: handleShowUserModal,
            userInfo: userInfo,
            handleCalculater: handleCalculater
        }}>
            {props.children}
        </MainContext.Provider>
     );
};
 
export default GlobalState;