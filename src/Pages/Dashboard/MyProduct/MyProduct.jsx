import React, { useContext } from 'react'
import MyProductTable from './MyProductTable'
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../../provider/AuthProvider'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { MdDelete } from 'react-icons/md'
import { FaRegEdit } from 'react-icons/fa'

const MyProduct = () => {
   const { user } = useContext(AuthContext)
  // console.log(user);

  const { data: myProducts = [], refetch, isLoading } = useQuery({
    queryKey: ['myProducts', user?.email],
    queryFn: async () => {
      const res = await fetch(`https://ti-server-585b.onrender.com/myProduct`)
      const data = await res.json()
      return data;
    }

  })
  // console.log(myProducts)
    const handleDeleteItem = id =>{
          const getPermission = window.confirm('Are you sure want to delete this product?')
        if(getPermission){
          fetch(`https://ti-server-585b.onrender.com/myProduct/${id}`,{
            method: "DELETE",
      
          })
          .then(res=> res.json())
          .then(data=> {
            if(data?.deletedCount > 0){
              // console.log(data);
              toast.success('deleted success')
               refetch();
            }
      
          })
        }
      
        }
  return (
    <div className="">
      <div className='bg-primary shadow-md py-10 dark:bg-[#0F172A]  dark:text-white text-gray-600 lg:m-4 '>
        {/* <h2>product:{myProducts.length}</h2> */}
        <h3 className='text-2xl text-bold pb-6 text-center'>My Product</h3>
        <div className="overflow-x-auto  ">
          <table className="table w-full mx-auto bg-bg-primary shadow-md ">

            <thead>
              <tr>
                <th></th>
                <th>Picture</th>
                <th>Brand Name</th>
                <th>Price</th>
                {/* <th></th> */}
                <th >Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody >
              {
                myProducts?.map((myProduct,i) => 
                   <tr className=" dark:hover:text-gray-600 hover:bg-info">
                              <td></td>
                            <td>
                              <div className="avatar">
                                <div className="w-24 rounded">
                                  <img src={myProduct?.img} alt='' />
                                </div>
                              </div>
                            </td>
                            <td>{myProduct?.name}</td>
                            <td>{myProduct?.price}</td>
                            {/* <td>{myProduct?.yearUsed}</td> */}
                            <td>
                             <Link 
                             to={`/dashboard/editProduct/${myProduct?._id}`}>
                               <button  className=" btn bg-purple-300 btn-sm">
                                 <p className='lg:flex hidden'>Edit </p><FaRegEdit/></button></Link>
                            </td>

                            <td>
                              <button  
                              onClick={()=> handleDeleteItem(myProduct?._id)} 
                              className="btn bg-red-300 btn-sm"><p className='lg:flex hidden'>Delete</p> <MdDelete /></button>
                            </td>
                  
                         
                          </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MyProduct
