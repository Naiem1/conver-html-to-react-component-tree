import { Link } from '@reach/router';
import { Nav, Navbar,  } from 'react-bootstrap';
import SearchIcon from '../../assets/images/search-icon.png'


const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? "#10B5FA" : "white"
        }
      };
    }}
  />
);

const Navigation = props => {
  return (
    <div className="header">
      <div className="container">
        <div className="col-sm-12">
          <div className="menu-area">
            <Navbar expand="lg" className="navbar-expand-lg">
            <Navbar.Brand className="text-white d-lg-none">Cron</Navbar.Brand>
            <Navbar.Toggle className="ml-auto" aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/">HOME</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">ABOUT</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/services">SERVICES</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/blog">BLOG</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
                  </li>
                  <li className="last">
                    <a href="#search">
                      <img
                        src={SearchIcon}
                        alt="icon"
                      />
                    </a>
                  </li>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Navigation;