import { Link } from '@reach/router';
import Logo from '../../assets/images/logo.png';
import Navigation from '../Navigation';


const Header = () => {
  return (
    <div>
      <div className="header_main">
        <div className="container">
          <div className="logo">
            <Link to="/"><img src={Logo} alt="logo"/></Link>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <Navigation/>
    </div>
  );
};

export default Header;