import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {

  render() {

    return (

      <nav>

        <h1>
          <Link to={"/"}>Dundurn Market</Link>
        </h1>
        <ul>
          <li>
            <Link to={"/shop"}>Shop</Link>
          </li>
          <li>
            <a href="#">About Us</a>
            {/* DROPDOWN  */}
          </li>
          <li><a href="#">Producers</a></li>
          <li><a href="#">How It Works</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
        <ul>
          <li><a href="#">Sign In</a></li>
          <li><a href="#">Get Started</a></li>
          <li><button>Cart</button></li>
        </ul>
      </nav>

    )

  }

}

export default Nav;