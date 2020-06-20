import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext'

class Navbar extends Component {
  static contextType = UserContext;
  render() {
    const { login } = this.context;
    return (
      < header className="nav-home" >
        <div className="nav-container">
          <h1 className="nav-logo"><Link className="link" to='/'>FindAbode</Link></h1>
          <nav>
            <ul className="nav-link">
              <li><Link className="link" to='/search'>Search</Link></li>
              <li><Link className="link" to='/blog'>Blog</Link></li>
              <li><Link className="link" to='/favorite'>Favorite</Link></li>
              <li><Link className="link" to='/about'>About</Link></li>
              <li><Link className="link" to='/contact'>Contact</Link></li>
              <li><Link className="link" to='/faq'>FAQ</Link></li>
              {
                !login && <li><Link className="link" to='/signin'>Sign In</Link></li>}
            </ul>
            {!login ? <Link className="link sign-up" to='/signup'><button>Sign Up</button></Link> :
              <Link className="link sign-up" to='/profile'><button>Profile</button></Link>}
          </nav>
        </div>
      </header >
    )
  }
}
export default Navbar;