// import React, { useEffect, useState } from 'react'

// const  useVerify = email => {
//     const [isVerified, setIsVerified] = useState(false);
//     const [verifyLoading, setVerifyLoading] = useState(true);

//     useEffect(() => {
//         fetch(`https://ti-server-585b.onrender.com/users/verify/${email}`)
//             .then(res => res.json())
//             .then(data => {
//                 // console.log(data);
//                 setIsVerified(data.isVerified);
//                 setVerifyLoading(false);
//             })
//     }, [email]);
//     return [isVerified, verifyLoading];
// }

// export default useVerify
