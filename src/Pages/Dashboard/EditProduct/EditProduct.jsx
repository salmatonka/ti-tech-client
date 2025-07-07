import React, { useContext, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { toast } from 'react-toastify';

const EditProduct = () => {
  const product = useLoaderData();
    // console.log(product)
    const [name, setName] = useState(product?.name)
    const [date, setDate] = useState(product?.date)
    const [img, setImg] = useState(product?.img)
    const [model, setModel] = useState(product?.model)
    const [category, setCategory] = useState(product?.categorye)
    const [location, setLocation] = useState(product?.location)
    const [regular_price, setRegular_price] = useState(product?.regular_price)
    const [price, setPrice] = useState(product?.price)
    // const [rating, setRating] = useState(product.rating)
    const [yearUsed, setYearUsed] = useState(product?.yearUsed)
    const [details, setDetails] = useState(product?.details)



    const { user } = useContext(AuthContext)
    const navigate = useNavigate();


    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const brandName = form.brandName.value;
        const sellerName = form.sellerName.value;
        const date = form.date.value;
        const img = form.img.value;
        const model = form.model.value;
        const category = form.category.value;
        const location = form.location.value;
        const regular_price = form.regular_price.value;
        const price = form.price.value;
        const yearUsed = form.yearUsed.value;
        const details = form.details.value;

        const newData = {
            name: brandName,
            img,
            model,
            location,
            regular_price,
            price,
            category,
            details,
            userEmail: user.email,
            date, yearUsed
        }
        // console.log(newData)
        fetch(`https://ti-server-585b.onrender.com/myProduct/${product._id}`, {
            method: "PATCH",
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



    }
    return (
        <div className='bg-white py-6'>
            <div className='flex justify-center mb-12 mt-5'>
                <div className='shadow-xl p-10 border border-2'>
                    <h3 className='text-3xl text-bold text-center'> Edit Product</h3>
                    <form onSubmit={handleSubmit}>
                        <div className='md:flex gap-10'>
                            {/* left side  */}
                            <div className='md:w-1/2 '>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">BrandName</span></label>
                                    <input
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                        name='brandName'
                                        type='text'
                                        className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Picture</span></label>
                                    <input
                                        onChange={(e) => setImg(e.target.value)}
                                        value={img}
                                        name='img'
                                        type='text'
                                        className="file-input file-input-bordered file-input-info w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">SellerName</span></label>
                                    <input
                                        disabled
                                        defaultValue={user?.displayName}
                                        name='sellerName'
                                        type='text' className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Location</span></label>
                                    <input
                                        onChange={(e) => setLocation(e.target.value)}
                                        value={location}
                                        name='location'
                                        type='text'
                                        className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Date</span></label>
                                    <input
                                        onChange={(e) => setDate(e.target.value)}
                                        value={date}
                                        name='date'
                                        type='date'
                                        className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Model</span></label>
                                    <input
                                        onChange={(e) => setModel(e.target.value)}
                                        value={model}
                                        name='model'
                                        type='text'
                                        className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Category</span></label>
                                    <select
                                        onChange={(e) => setCategory(e.target.value)}
                                        required
                                        value={category}
                                        name='category'
                                        className="select select-bordered w-full">
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
                                        <option value='Walton'>Walton</option>
                                    </select>
                                </div>
                            </div>
                            {/* Right side  */}
                            <div className='md:w-1/2'>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Resale Price</span></label>
                                    <input
                                        onChange={(e) => setRegular_price(e.target.value)}
                                        value={regular_price}
                                        name='regular_price'
                                        type='number'
                                        className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Price</span></label>
                                    <input
                                        onChange={(e) => setPrice(e.target.value)}
                                        value={price}
                                        name='price'
                                        type='number'
                                        className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Email</span></label>
                                    <input
                                        disabled
                                        defaultValue={user.email}
                                        name='email'
                                        type='email'
                                        className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Years of Use</span></label>
                                    <input
                                        onChange={(e) => setYearUsed(e.target.value)}
                                        value={yearUsed}
                                        name='yearUsed'
                                        type='text'
                                        className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Details</span></label>
                                    <textarea
                                        onChange={(e) => setDetails(e.target.value)}
                                        value={details}
                                        name='details'
                                        type='text'
                                        className="input input-bordered w-full h-32" required />
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
export default EditProduct
