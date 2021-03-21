import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand"  >BD RIDING</a>
                        <div class="navbar-nav d-flex">
                            <Link to='/home' aria-current="page"  >Home</Link>
                            <Link to='/destination'  >Destination</Link>
                            <Link to='/blog' >Blog</Link>
                            <Link to='/content' >Content</Link>
                           <Link to='/login'><button className='btn btn-danger'>Login</button></Link>
                        </div>
                </div> 
            </nav>
    );
};

export default Header;