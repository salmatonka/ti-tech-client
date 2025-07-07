const useToken = () => {
    const handleToken = (email) => {
        fetch(`https://ti-server-585b.onrender.com/jwt?email=${email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.accessToken) {
                    localStorage.setItem("accessToken", data.accessToken);
                }
            })
    }

    return handleToken
};

export default useToken;




// import React, { useEffect, useState } from 'react'

// const useToken = email => {
//     const [token, setToken] = useState('');

//     useEffect(() => {
//         if (email) {
//             fetch(`https://ti-server-585b.onrender.com/jwt?email=${email}`)
//                 .then(res => res.json())
//                 .then(data => {
//                     // console.log(data)
//                     if (data.accessToken) {
//                         localStorage.setItem('accessToken', data.accessToken);
//                         setToken(data.accessToken);
//                     };
//                 });
//         }
//     }, [email]);
//     return [token];
// };

// export default useToken
