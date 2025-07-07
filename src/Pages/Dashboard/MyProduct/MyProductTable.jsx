import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../provider/AuthProvider';
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import {toast} from 'react-toastify'
import { Link } from 'react-router-dom';
const MyProductTable = ({myProduct}) => {
 const { _id, name, img,  resale_price,yearUsed
    } =  myProduct;
        //  console.log(myProduct)
    const { user } = useContext(AuthContext)
    // const navigate = useNavigate();
    const [productData, setProductData] = useState(null)
    
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
          <tr className="hover">
            <td></td>
          <td>
            <div className="avatar">
              <div className="w-24 rounded">
                <img src={img} alt='' />
              </div>
            </div>
          </td>
          <td>{name}</td>
          <td>{resale_price}</td>
          <td>{yearUsed}</td>
          <td>
           <Link to={`/dashboard/editProduct/${_id}`}> <button  className="btn bg-purple-300 btn-sm">Edit <FaRegEdit /></button></Link>
          </td>
          <td>
            <button  
            onClick={()=> handleDeleteItem(_id)} 
            className="btn bg-red-300 btn-sm">Delete <MdDelete /></button>
          </td>

       
        </tr>
      );
  };


export default MyProductTable
