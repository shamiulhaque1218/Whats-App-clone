/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Audio } from  'react-loader-spinner';
import { AuthContext } from './Provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(AuthContext);
    if(loader){
        return  <Audio
        height = "80"
        width = "80"
        radius = "9"
        color = 'green'
        ariaLabel = 'three-dots-loading'     
        wrapperStyle
        wrapperClass
      />
    }
    if(user) {
        return children;
    }
    return <Navigate to="/" > </Navigate>
};

export default PrivateRoute;