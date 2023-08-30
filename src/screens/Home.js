import NavBar from './components/NavBar';
import db from '../config/Database';
const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="homepage">
        <div className="homepage_hero"></div>
      </div>
    </div>
  );
};

export default Home;
