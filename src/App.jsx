import React, {Fragment, useState} from 'react';
import { Route } from 'react-router';

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

const App = (props) => {
  return (
    <Fragment>
      <MainNav/>
      <FloatingMenu/>    
      <Route path="/singleFood" component={SingleFood} />
      <Route path="/foods" component={Foods} />
      <Route path="/login" component={Login} />
      <Route path="/" exact>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <Wave/>
        <FourthSection/>
      </Route>
      <Footer/>
    </Fragment>
  );
}
 
export default App;