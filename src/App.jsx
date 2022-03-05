import React, { Fragment, useContext } from 'react';
import { Route, Switch } from 'react-router';

import MainNav from './components/navigation/MainNav';
import FirstSection from './sections/Section1/FirstSection';
import Section2 from './sections/Section2';
import ThirdSection from './sections/Section3';
import Section4 from './sections/Section4/Section4';
import Foods from './components/foods/Foods';
import Cart from './components/foods/components/ShoppingCart';
import Footer from './others/Footer';
import Wave from './others/Wave';
import NotFound404 from './others/404';
import FavoriteFoods from './components/foods/components/FavoriteFoods';
import AdminPanel from './adminPanel/AdminPanel';
import LoginComponent from './components/login/LoginComponent';
import PanelState from './adminPanel/PanelState';
import LoginState from './components/login/LoginState';
import LoginContext from './structure/contexts/loginContext';
import MainContext from './structure/contexts/mainContext';

const App = () => {
  window.addEventListener('load', () => {
    document.getElementById('preloader').style.display = 'none';
  });
  const context = useContext(MainContext);
  const loginContext = useContext(LoginContext);
  return (
    <Fragment>
      <PanelState>
        <LoginState>
          <MainNav />
          <Switch>
            <Route path="/login" component={LoginComponent} />
            <Route
              path="/sonati-foods"
              render={() => (
                <Foods
                  foodsToShow={context.sonatiFoods}
                  titleOfThisMenu="غذاهای سنتی"
                  renderFooterOrNot={true}
                />
              )}
            />
            <Route
              path="/fastfoods"
              render={() => (
                <Foods
                  foodsToShow={context.fastfoods}
                  titleOfThisMenu="فست فود ها"
                  renderFooterOrNot={true}
                />
              )}
            />
            <Route
              path="/giahi-foods"
              render={() => (
                <Foods
                  foodsToShow={context.giahiFoods}
                  titleOfThisMenu="غذاهای گیاهی"
                  renderFooterOrNot={true}
                />
              )}
            />
            <Route path="/favorites" component={FavoriteFoods} />
            <Route path="/shopping-cart" component={Cart} />
            <Route exact path="/">
              {loginContext.setRedirectToHome(false)}
              <FirstSection />
              <Section2 />
              <ThirdSection foodsToShow={context.allFoods} />
              <Wave />
              <Section4 />
              <Footer />
            </Route>
            <Route path="/admin-panel" component={AdminPanel} />
            <Route component={NotFound404} />
          </Switch>
        </LoginState>
      </PanelState>
    </Fragment>
  );
};

export default App;
