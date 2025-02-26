import React from 'react';

const About = () => {
	return (
		<div className=''>
			{/* <section className="bg-gray-100 py-24 dark:text-gray-800">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">ABOUT TI TECH </h2>
		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
			<details open="">
				<summary className="py-2 outline-none cursor-pointer focus:underline">ABOUT TI TECH </summary>
				<div className="px-4 pb-4">
					<p>Trusted computer, laptop & gaming pc retail store, and e-commerce in Bangladesh. TI tech is one of the trusted computer & computer parts retail and wholesale shops in Bangladesh. TI Tech was started to provide their service in 2021 with the concept [ best price, best service & authentic product] as its motto and gained the trust of millions of users nationwide. TI Tech comes up with various collections of tech products considering Every customer's choice. TI Tech is also considered as the most popular tech shop for buying computers, laptops and related products just by tapping www.tamannainternational.com</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">Why TI Tech?
                </summary>
				<div className="px-4 pb-4">
					<p>TI tech believes in quality, after-sales service & unbeatable price in the market. TI tech has many partnership affiliations with word-renowned tech brands like dell, hp, LG, Asus, Samsung, MSI, Corsair, Antec, ASRock and etc. We ensure the quality and authenticity of products and services provided to the customers.
                    </p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">Get your desirable desktop computer</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>You will be able to find a wide range of desktop pc with various configurations and form factors. TI tech has a lot of desktop pcs available to choose from, starting with budget pc under 10k, 10-20k, 20-30k, intel gaming pc, AMD gaming pc, brand pc, graphics pc, and portable mini pcs. All of these configure you get with the latest generation component. We take your requirements and deliver you the simplest personal computer at the foremost exclusive price.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">Buy desktop computer from TI tech
                </summary>
				<div className="px-4 pb-4 space-y-2">
					<p>TI Tech is one of the trusted computer, laptop, and computing components retailers of Bangladesh. Visit a TI tech shop or the official e-commerce website to buy led tv at the lowest price. Or delivery has all districts covered.</p>
				</div>
			</details>
		</div>
	</div>
</section> */}

			<section className="pb-16 pt-32 dark:bg-gray-100 dark:text-gray-900">
				<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
					<div className="py-6 md:py-0 md:px-6">
						<h1 className="text-2xl font-bold">Get in touch with</h1>
						<h1 className="text-4xl font-bold">TAMANNA INTERNATIONAL</h1>
						<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
						<div className="space-y-4">
							<p className="flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
									<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
								</svg>
								<span>Suvastu Arcade (ICT Bhaban) Level-7, Suite #717-18 Elephant Road, Dhaka-1205</span>
							</p>
							<p className="flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
									<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
								</svg>
								<span>01974977440, 01834977440</span>
							</p>
							<p className="flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
									<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
									<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
								</svg>
								<span>contact@business.com</span>
							</p>
						</div>
					</div>
					<form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
						<label className="block">
							<span className="mb-1">Full name</span>
							<input type="text" placeholder="Shohel Islam " className="block w-full py-1 pl-4 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100" />
						</label>
						<label className="block">
							<span className="mb-1">Email address</span>
							<input type="email" placeholder="Mizan@google.com" className="block w-full py-1 pl-4 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100" />
						</label>
						<label className="block">
							<span className="mb-1">Message</span>
							<textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100"></textarea>
						</label>
						<button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-slate-300 w-full focus:ring-violet-600 hover:ring-violet-600">Submit</button>
					</form>
				</div>
			</section>
		</div>
	);
};

export default About;