import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import useSeller from '../hooks/useSeller';
import { BeatLoader } from 'react-spinners';

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, sellerLoading] = useSeller(user?.email);
    const location = useLocation();

    if (loading || sellerLoading) {
        return <BeatLoader />
        // <Spinner />;
    }
    if (user && isSeller) {
        return children;
    }
    return <Navigate to='/logIn' state={{ from: location }} replace />
};

export default SellerRoute;