import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { BeatLoader } from 'react-spinners';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, adminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || adminLoading) {
        return  <BeatLoader />
        // <Spinner />;
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/logIn' state={{ from: location }} replace />
};

export default AdminRoute
