import React from 'react'
import {toast} from 'react-toastify';
import { FaCheckCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';

const AllSellers = () => {
   const { user } = useContext(AuthContext);
    // load currently logged in user
    const { data: currenUser = [] } = useQuery({
        queryKey: ["users", user],
        queryFn: async () => {
            const res = await fetch(`https://ti-server-585b.onrender.com/users/${user?.email}`)
            const data = await res.json()
            return data;
        }
    })

    // send the currentUser role to get specific data
    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ["users", currenUser],
        queryFn: async () => {
            const res = await fetch(`https://ti-server-585b.onrender.com/users?role=${currenUser?.role}`)
            const data = await res.json()
            return data;
        }
    })

    // sellect only sellers from all users
    const sellers = users.filter((user) => user.role === "seller");


    // delete user from database
    const handleDeleteUser = (email) => {
        fetch(`https://ti-server-585b.onrender.com/users/${email}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        })
            .then((res) => res.json())
            .then(() => {
                toast.success("Seller deleted successfully")
                refetch()
            })
            .catch((err) => console.log(err))
    }


    // updated seller status in users collection
    const handleVerify = (seller) => {
        axios.put(`https://ti-server-585b.onrender.com/users/sellers/${seller?._id}`)
            .then(() => {
                // update seller in products collection
                axios.put("https://ti-server-585b.onrender.com/products/sellers")
                    .then((data) =>{
                        //  console.log(data)
                        toast.success('seller verify')
                    })
            })
            .catch((err) => console.log(err))
    }

    if (isLoading) {
        return <BeatLoader />
        // <Loader />
    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Position</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sellers.map((seller, index) => <tr key={seller._id}>
                            <th>{index + 1}</th>
                            <td>{seller.name}</td>
                            <td>{seller.email}</td>
                            <td>{seller.role}</td>
                            <td>
                                {seller.isVerified ? <FaCheckCircle className='text-green-500 text-2xl' /> : <button onClick={() => handleVerify(seller)} className='bg-red-500 text-white rounded p-1'>Unverified</button>}</td>
                            <td><button onClick={() => handleDeleteUser(seller.email)} className='bg-red-500 px-2 py-1 text-white rounded'>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllSellers
