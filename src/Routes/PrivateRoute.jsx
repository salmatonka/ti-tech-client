import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { BeatLoader } from 'react-spinners';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <BeatLoader />

        // <Spinner />
    }

    if (user) {
        return children;
    }
    return <Navigate to="/logIn" state={{ from: location }} replace />
};
export default PrivateRoute
