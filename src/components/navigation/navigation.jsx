import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import logo from '../../assets/logo.png';
import CartIcon from '../cartIcon/cartIcon';
import './navigation.scss';

import { auth } from '../../firebase/firebase.utils';


const Navigation = ( { nameClass, history, currentUser, match } ) => {
    return (
        <nav className={`navigation ${nameClass}`}>
            <img className="navigation__img" onClick={() => history.push('/')} src={logo} alt="logo" />

            <ul className="navigation__nav">
                <li><Link to="/">home</Link></li>
                <li><Link to="/kitchen">kitchen</Link></li>
                <li><Link to="/aboutme">about me</Link></li>
                {
                    currentUser ? 
                    <li onClick={() => auth.signOut()}><Link to={`${match.url}`}>sign out</Link></li>
                    : <li><Link to="/signin">sign in</Link></li>
                }
            </ul>
            <div className="navigation__icon"><CartIcon /></div>
        </nav>
    );
}


export default withRouter(Navigation);