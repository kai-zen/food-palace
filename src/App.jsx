import React, {Fragment, useState} from 'react';
import { Route } from 'react-router';
import { allFoodsInfo } from './allFoodsInfo';

import Footer from './components/Common/Footer';
import MainNav from './components/Common/MainNav';
import FloatingMenu from './components/Common/FloatingMenu';
import FirstSection from './components/FirstSection/FirstSection';
import SecondSection from './components/SecondSection/SecondSection';
import ThirdSection from './components/ThirdSection/ThirdSection';
import FourthSection from './components/FourthSection/FourthSection';
import Wave from './components/Common/Wave';
import Foods from './components/FoodsComponent/Foods';
import SingleFood from './components/SingleFoodComponent/SingleFoodComponent';
import Login from './components/LoginComponent/LoginComponent';

const App = () => {
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

  const sonatiFoods = [...allFoods.filter(eachFood => eachFood.category==='sonati')];
  const fastfoods = [...allFoods.filter(eachFood => eachFood.category==='fastfood')];
  const giahiFoods = [...allFoods.filter(eachFood => eachFood.category==='giahi')];

  const [favoriteFoods, setFavoriteFoods] = useState([]);
  const [cartFoods, setCartFoods] = useState([]);
  return (
      <Fragment>
        <MainNav/>
        <FloatingMenu/>    
        <Route path="/singleFood" component={SingleFood} />
        <Route path="/foods" render={()=><Foods foodsToShow={allFoods}/>} />
        <Route path="/sonati-foods" render={()=><Foods foodsToShow={sonatiFoods} titleOfThisMenu='غذاهای سنتی'/>} />
        <Route path="/fastfoods" render={()=><Foods foodsToShow={fastfoods} titleOfThisMenu='فست فود ها'/>} />
        <Route path="/giahi-foods" render={()=><Foods foodsToShow={giahiFoods} titleOfThisMenu='غذاهای گیاهی'/> } />
        <Route path="/favorites" render={()=><Foods foodsToShow={favoriteFoods} titleOfThisMenu='مورد علاقه ها'/>} />
        <Route path="/shopping-cart" render={()=><Foods foodsToShow={cartFoods} titleOfThisMenu='سبد خرید'/>} />
        <Route path="/login" component={Login} />
        <Route path="/" exact>
          <FirstSection/>
          <SecondSection/>
          <ThirdSection foodsToShow={allFoods}/>
          <Wave/>
          <FourthSection/>
        </Route>
        <Footer/>
      </Fragment>
  );
}
 
export default App;