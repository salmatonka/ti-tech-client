import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import { AuthContext } from '../../../provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt } from 'react-icons/fa';

const MyOrder = () => {
  const { user } = useContext(AuthContext);

    const { data: orders = [], refetch } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch(`https://ti-server-585b.onrender.com/orders?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    })
    // console.log(orders)

    // Deleting order 
    const deleteHandler = id => {
        const proceed = window.confirm('Sure to delete this booking!');
        if (proceed) {
            fetch(`https://ti-server-585b.onrender.com/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(() => {
                    toast.success('Deleted Successfully!');
                    refetch();
                });
        };
    }



    return (
        < div className='bg-info  m-6'>
            {
                orders.length > 0 ?

                    <div className="overflow-x-auto mx-auto bg-white shadow-md">
                        <h2 className='text-2xl font-bold py-10 flex justify-center items-center'>My Orders</h2>
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Name</th>
                                    <th>Product</th>
                                    <th>Location</th>
                                    <th>Phome Number</th>
                                    <th>Price</th>
                                    <th>Remove</th>


                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders?.map((order, i) => <tr
                                        key={order._id}
                                    >
                                        <th>{i + 1}</th>
                                        <td>{order?.buyer}</td>
                                        <td>{order?.productName}</td>
                                        <td>{order?.location}</td>
                                        <td>{order?.phone}</td>
                                        <td>{order?.price}</td>
                                        <td><button
                                         onClick={() => deleteHandler(order?._id)} 
                                             className='btn btn-sm btn-error btn-outline'
                                             ><FaTrashAlt /></button></td>

                                    </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    :
                    <h2 className='text-5xl text-center text-orange-500'>You didn't place an order yet!</h2>
            }
        </div>
    );
};

export default MyOrder
