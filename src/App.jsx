import React, {Fragment, useContext} from 'react';
import { Route } from 'react-router';

import MainNav from './navigation/MainNav';
import FirstSection from './sections/Section1/FirstSection';
import SecondSection from './sections/Section2';
import ThirdSection from './sections/Section3';
import FourthSection from './sections/Section4/FourthSection';
import Foods from './components/FoodsComponent/Foods';
import SingleFood from './components/SingleFoodComponent';
import LoginComponent from './components/LoginComponent/LoginComponent';
import MainContext from './structure/contexts/mainContext';
import Cart from './components/FoodsComponent/ShoppingCart';
import Footer from './others/Footer';
import NavState from './navigation/NavState';
import Wave from './others/Wave';
import LoginState from './components/LoginComponent/LoginState';
import LoginContext from './structure/contexts/loginContext';

const App = () => {
  const context = useContext(MainContext);
  const loginContext = useContext(LoginContext);
  return (
      <Fragment>
          <LoginState>
            <NavState>
              <MainNav/>
            </NavState>    
            <Route path="/login" component={LoginComponent} />
          </LoginState>
          <Route path="/singleFood/:foodId" component={SingleFood} />
          <Route path="/sonati-foods" render={()=><Foods foodsToShow={context.sonatiFoods} titleOfThisMenu='غذاهای سنتی' />} />
          <Route path="/fastfoods" render={()=><Foods foodsToShow={context.fastfoods} titleOfThisMenu='فست فود ها' />}/>
          <Route path="/giahi-foods" render={()=><Foods foodsToShow={context.giahiFoods} titleOfThisMenu='غذاهای گیاهی' />}/>
          <Route path="/favorites" render={()=><Foods foodsToShow={context.favoriteFoods} titleOfThisMenu='مورد علاقه ها' />}/>
          <Route path="/shopping-cart" component={Cart} />
          <Route exact path="/">
            {loginContext.setRedirectToHome(false)}
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