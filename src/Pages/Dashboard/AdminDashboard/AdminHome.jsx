import React, { useContext } from 'react'
import { AuthContext } from '../../../provider/AuthProvider'

const AdminHome = () => {
    const {user} = useContext(AuthContext)
  return (
    <div>
     <h2 className="text-2xl font-bold">
        <span>
            Hi' Welcome 
        </span>
     </h2>
     {
        
        user?.displayName ? user?.displayName : 'Back'
     }
    </div>
  )
}

export default AdminHome
