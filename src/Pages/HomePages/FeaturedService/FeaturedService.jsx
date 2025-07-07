import React from 'react'

const FeaturedService = () => {
    const featuredServices = [
        {
            "title": "Desktop Services",
            "price": "400",
            "img": "https://trusttechspace.blr1.cdn.digitaloceanspaces.com/media/2ui2ezxwjC2ADSXlXVYiBa6Pmnzn4VlLTZhp7kic.png"
        },
        {
            "title": "Laptop Services",
            "price": "800",
            "img": "https://trusttechspace.blr1.cdn.digitaloceanspaces.com/media/2ui2ezxwjC2ADSXlXVYiBa6Pmnzn4VlLTZhp7kic.png"
        },
        {
            "title": "Monitor Services",
            "price": "800",
            "img": "https://trusttechspace.blr1.cdn.digitaloceanspaces.com/media/2ui2ezxwjC2ADSXlXVYiBa6Pmnzn4VlLTZhp7kic.png"
        },
        {
            "title": "Printer Services",
            "price": "400",
            "img": "https://trusttechspace.blr1.cdn.digitaloceanspaces.com/media/2ui2ezxwjC2ADSXlXVYiBa6Pmnzn4VlLTZhp7kic.png"
        },
        {
            "title": "Projector Services",
            "price": "1200",
            "img": "https://trusttechspace.blr1.cdn.digitaloceanspaces.com/media/2ui2ezxwjC2ADSXlXVYiBa6Pmnzn4VlLTZhp7kic.png"
        },
        {
            "title": "Digital & DSLR Camera Services",
            "price": "800",
            "img": "https://trusttechspace.blr1.cdn.digitaloceanspaces.com/media/2ui2ezxwjC2ADSXlXVYiBa6Pmnzn4VlLTZhp7kic.png"
        }
    ]
    return (
        <div className='pt-10 pb-6'>
            <h2 className="text-xl font-semibold tracking-wide flex justify-center pb-2">Featured Services</h2>
            <p className=" font-semibold tracking-wide flex justify-center  pb-10">Get your Tech product repair services from Experts !</p>
            <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 lg:gap-6 gap-4'>
                {
                    featuredServices?.map((featuredService, index) => (
                        <div className="sbg-base-100 w-full mx-auto border shadow-xl">
                               <div className='flex justify-center items-center'>
                                 <img
                                        src={featuredService?.img}
                                        alt="product"
                                        className="lg:w-40 md:w-36 w-28 " />
                               </div>
                                <div className="text-center">
                                    <h2 className="lg:text-lg text-sm font-semibold">{featuredService?.title}</h2>
                                    <p className='text-sm pb-4'>Starts From: {featuredService?.price} ৳</p>
                                   
                                </div>
                            </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FeaturedService
