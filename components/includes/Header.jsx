import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';


const Header = () => (
  <header className="header sticky-header">
    <div className="container">
      <Link to="/" className="site-logo" title="Andela Sell It">
        <img
          src="/assets/images/andela-logo.png"
          width={100}
          height={48}
          alt="Logo"
        />
        <span className="sr-only">Andela Sell It</span>
      </Link>
      <div className="header-dropdowns">
  <div className="dropdown header-dropdown">
    <a className="dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-expanded="false">
      LAGOS
      <i className="fa fa-caret-down" />
    </a>
    <ul className="dropdown-menu">
      <li><a href="#" title="Spanish">LAGOS</a></li>
      <li><a href="#" title="Spanish">NAIROBI</a></li>
      <li><a href="#" title="Turkish">KAMPALA</a></li>
      <li><a href="#" title="German">NEW YORK</a></li>
    </ul>
  </div>{/* End .dropddown */}
</div>

      <SearchBar />
      {/* End .search-form-container */}
      <ul className="top-links">
        <li>
          <Link to="/products/create">Sell A Product</Link>
        </li>
        {/* <li><a href="cart.html">Cart</a></li> */}
      </ul>

      <a href="#" className="sidemenu-btn" title="Menu Toggle">
        <span />
        <span />
        <span />
      </a>
    </div>{/* End .container-fluid */}
  </header>
);

export default Header;
