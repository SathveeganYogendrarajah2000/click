import NavBar from './components/NavBar';
import IntroLogo from '../assets/images/Homepage_click_logo.png';
import { Fragment } from 'react';
const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <div className="homepage">
        <div className="homepage_hero">
          <div className="homepage_hero_bottom">
            <h1>Restaurant Name</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              quidem quis qu
            </p>
          </div>
        </div>
        <div className="homepage_brandname">
          <div className="homepage_brandname_logo">
            <img src={IntroLogo} alt="click image" srcset="" />
          </div>
          <p>Seamlessly Connect, Simplify, and Elevate Your Experience!</p>
        </div>
        <div className="homepage_info">
          <div className="homepage_info_cards"></div>
          <div className="homepage_info_cards"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
