import React, { useContext } from 'react'
import { AuthContext } from '../../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

const AddProduct = () => {
//    useTitle('AddProduct');
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
   
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });
    // console.log(date);

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const brandName = form.brandName.value;
        const sellerName = form.sellerName.value;
        const date = form.date.value;
        const img = form.img.value
        const model = form.model.value;
        const category = form.category.value;
        const location = form.location.value;
        const regular_price = form.regular_pricevalue;
        const price = form.price.value;
        const yearUsed = form.yearUsed.value;
        const details = form.details.value;


        const newData = {
            name: brandName,
            sellerName,
            img,
            model,
            location,
            price,
           regular_price,
            category,
            details,
            userEmail: user?.email,
            date, yearUsed
        }
        console.log(newData)
        fetch(`https://ti-server-585b.onrender.com/myProduct`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('product added')
                navigate('/dashboard/myProduct')

            })
        // refetch();
        

    }


    return (
        <div className=' shadow-md py-10 lg:px-14'>
            <div className='flex justify-center mb-12 mt-5'>
                <div className='shadow-xl p-10 border border-2'>
                    <h3 className='text-2xl text-bold text-center'>Please Add Product</h3>
                    <form onSubmit={handleSubmit}>
                        <div className='md:flex gap-10'>
                            {/* left side  */}
                            <div className='md:w-1/2 '>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">BrandName</span></label>
                                    <input name='brandName' type='text' className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Picture</span></label>
                                    <input name='img' type='text' className="file-input file-input-bordered file-input-info w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">SellerName</span></label>
                                    <input disabled defaultValue={user?.displayName} name='sellerName' type='text' className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Location</span></label>
                                    <input name='location' type='text' className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Date</span></label>
                                    <input name='date' type='date' className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Model</span></label>
                                    <input name='model' type='text' className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Category</span></label>
                                    <select required name='category' className="select select-bordered w-full">
                                        <option value='processor'>Processor</option>
                                        <option value='matherboard'>MMatherboard</option>
                                        <option value='gaphics'>Graphics</option>
                                        <option value='Ram'>RAM</option>
                                        <option value='Ssd'>SSD</option>
                                        <option value='PowerSupply'>Power Supply</option>
                                        <option value='Accessories'>Accessories</option>
                                        <option value='Gaming'>Gaming</option>
                                        <option value='Router'>Router</option>
                                        <option value='Ups'>UPS</option>
                                    </select>
                                </div>
                            </div>
                            {/* Right side  */}
                            <div className='md:w-1/2'>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Price</span></label>
                                    <input name='price' type='text' className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Regular Price</span></label>
                                    <input name='regular_price' type='text' className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Email</span></label>
                                    <input disabled defaultValue={user?.email} name='email' type='email' className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Years of Use</span></label>
                                    <input name='yearUsed' type='text' className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Details</span></label>
                                    <textarea name='details' type='text' className="input input-bordered w-full h-32" required />
                                </div>

                            </div>
                        </div>

                        <input className='btn btn-primary text-white w-full mt-5' type="submit" value='Add new product' />

                    </form>


                </div>
            </div>
        </div>
    );
};

export default AddProduct
