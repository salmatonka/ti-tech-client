import React, { useEffect, useState } from 'react'

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    useEffect(() => {
        fetch(`https://ti-server-585b.onrender.com/users/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsAdmin(data.isAdmin);
                setAdminLoading(false);
            })
    }, [email]);
    return [isAdmin, adminLoading];
}

export default useAdmin
