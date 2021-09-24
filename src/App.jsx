import React, {Fragment} from 'react';
import Footer from './components/Common/Footer';
import MainNav from './components/Common/MainNav';
import FloatingMenu from './components/Common/FloatingMenu';
import FirstSection from './components/FirstSection/FirstSection';
import SecondSection from './components/SecondSection/SecondSection';
import ThirdSection from './components/ThirdSection/ThirdSection';
import FourthSection from './components/FourthSection/FourthSection';
import Wave from './components/Common/Wave';
import Login from './components/LoginComponent/LoginComponent';

const App = (props) => {
  return (
    <Fragment>
      <MainNav/>
      <FloatingMenu/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <Wave/>
      <FourthSection/>
      <Login/>
      <Footer/>  
    </Fragment>
  );
}
 
export default App;