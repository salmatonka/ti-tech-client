import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider';

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    const {user} = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://ti-server-585b.onrender.com/users/admin/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setIsAdmin(data?.isAdmin);
                setAdminLoading(false);
            })
    }, [user?.email]);
    return [isAdmin, adminLoading];
}

export default useAdmin
