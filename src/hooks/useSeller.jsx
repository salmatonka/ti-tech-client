import React, { useEffect, useState } from 'react'

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [sellerLoading, setSellerLoading] = useState(true);

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
