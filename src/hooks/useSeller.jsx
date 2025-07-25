import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider';

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [sellerLoading, setSellerLoading] = useState(true);
const {user} = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://ti-server-585b.onrender.com/users/seller/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsSeller(data.isSeller);
                setSellerLoading(false);
            })
    }, [user?.email]);
    return [isSeller, sellerLoading];
}

export default useSeller
