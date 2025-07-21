import React from 'react'
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";
import { toast } from 'react-toastify';
const Carts = () => {
    const [cart, refetch] = useCart();
    console.log(cart)
    // const totalPrice = cart.reduce((total, item) => total + Number(item?.price), 0);
   const totalPrice = cart.reduce((total, item) => total + Number(item.regular_price), 0);
    const handleDelete = id => {

        const proceed = window.confirm('Sure to delete this booking!');
        if (proceed) {
            fetch(`https://ti-server-585b.onrender.com/carts/${id}`, {
                // mode: 'no-cors',
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
    <div>
       <div className='py-16 dark:text-white'>
            <div className="flex justify-evenly mb-8">
                <h2 className="text-xl">Items: {cart?.length}</h2>
                <h2 className="text-xl">Total Price: {cart?.totalPrice}</h2>
                {cart.length ? <Link to="/dashboard/payment">
                      <button className="btn btn-primary">Pay</button>
                  </Link> :
                  <button disabled className="btn btn-primary">Pay</button>
                  }
            </div>
            <div className="overflow-x-auto">
                <table className="table  w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item?.name}
                                </td>
                                <td>${item?.price}</td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(item?._id)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>)
                        }
  
  
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Carts
