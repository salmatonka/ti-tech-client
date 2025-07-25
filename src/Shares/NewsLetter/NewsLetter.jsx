import React from 'react'

const NewsLetter = () => {
    return (
         <section className="bg-info pt-6  dark:bg-[#1a2641d5] dark:text-gray-200 drak:shadow-md">
                <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
                    <div className="flex flex-col space-y-4 text-center lg:text-left">
                        <h1 className="lg:text-2xl text-xl font-bold leading-none">Newsletter & Get Updates</h1>
                        <p className="text-md">
                            Sign up for our newsletter to get up-to-date from us</p>
                    </div>
                    <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
                        <div className="flex flex-row">
                            <input type="text" placeholder="Enter Your Mail Here" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                            <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-info hover:bg-hoverInfo hover:text-white text-[#3749bb]">Submit</button>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default NewsLetter
