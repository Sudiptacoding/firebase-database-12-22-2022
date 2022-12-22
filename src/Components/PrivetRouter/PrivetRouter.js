import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivetRouter = ({user , children}) => {
    if(!user){
        return <Navigate to='/login' replace></Navigate>
    };

    return children;
};

export default PrivetRouter;