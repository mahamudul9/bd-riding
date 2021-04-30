import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = (props) => {
console.log(props.loggedinUser);
const{loggedinUser}=props;

    return (
        <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand"  >BD RIDING</a>
                        <div class="navbar-nav d-flex">
                            <Link to='/home' aria-current="page"  >Home</Link>
                            <Link to='/destination'  >Destination</Link>
                            <Link to='/blog' >Blog</Link>
                            <Link to='/content' >Content</Link>
                           <Link to='/login'><button className='btn btn-danger'>{loggedinUser.isSigned ? loggedinUser.name : 'Login'}</button></Link>
                        </div>
                </div> 
            </nav>
    );
};

export default Header;