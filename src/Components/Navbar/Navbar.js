import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../Routing/Index';

const Navbar = () => {
    const [user, setUser] = useContext(UserContext);
    return (
        <div className='Navbar'>
            <NavLink className='nav-link' to='/'>Home</NavLink>
            <NavLink className='nav-link' to='/blog'>Blog</NavLink>

            <NavLink className='nav-link' to='/document'>Document</NavLink>
            <NavLink className='nav-link' to='/database'>Data</NavLink>

            <div className='LogOut'>
                {
                    user && <button onClick={() => setUser(!user)}>Log Out</button>
                }

            </div>



        </div>
    );
};

export default Navbar;