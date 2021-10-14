import React, {Fragment, useContext} from 'react';
import { Route } from 'react-router';

import Footer from './components/Common/Footer';
import MainNav from './components/Common/Navigation/MainNav';
import FloatingMenu from './components/Common/Navigation/FloatingMenu';
import FirstSection from './components/Section1/FirstSection';
import SecondSection from './components/Section2/SecondSection';
import ThirdSection from './components/Section3';
import FourthSection from './components/Section4/FourthSection';
import Wave from './components/Common/Others/Wave';
import Foods from './components/FoodsComponent/Foods';
import SingleFood from './components/SingleFoodComponent';
import Login from './components/LoginComponent/LoginComponent';
import MainContext from './ContextAPI';
import Cart from './components/Cart';

const App = () => {
  const context = useContext(MainContext);
  return (
      <Fragment>
        <MainNav/>
        <FloatingMenu/>    
        <Route path="/singleFood/:foodId" component={SingleFood} />
        <Route path="/sonati-foods" render={()=><Foods foodsToShow={context.sonatiFoods} titleOfThisMenu='غذاهای سنتی' />} />
        <Route path="/fastfoods" render={()=><Foods foodsToShow={context.fastfoods} titleOfThisMenu='فست فود ها' />}/>
        <Route path="/giahi-foods" render={()=><Foods foodsToShow={context.giahiFoods} titleOfThisMenu='غذاهای گیاهی' />}/>
        <Route path="/favorites" render={()=><Foods foodsToShow={context.favoriteFoods} titleOfThisMenu='مورد علاقه ها' />}/>
        <Route path="/shopping-cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/" exact>
          <FirstSection/>
          <SecondSection/>
          <ThirdSection foodsToShow={context.allFoods}/>
          <Wave/>
          <FourthSection/>
        </Route>
        <Footer/>
      </Fragment>
  );
}
 
export default App;