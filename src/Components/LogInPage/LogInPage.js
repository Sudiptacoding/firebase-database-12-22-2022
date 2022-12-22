import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../Routing/Index';

const LogInPage = () => {
    const [user, setUser] = useContext(UserContext);
    return (
        <div className='LogIn'>
            {
                (user) ? <button onClick={() => setUser(!user)}>Sign Out</button> : <button onClick={() => setUser(!user)}>Sign In</button>
            }
            {
                user && <Navigate to='/document'></Navigate>
            }
            

        </div>
    );
};

export default LogInPage;