
import BannerLogo from '../assets/banner-stack.png'

const Banner = () => {
    return (


        <section className=" py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid items-center gap-10 md:grid-cols-2">


                    <div className="space-y-6 text-center md:text-left">


                        <h1 className='font-black text-black text-5xl'>Build Your Ideal <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Development Stack
                            </span></h1>

                        {/* Description */}
                        <p className="mx-auto    text-slate-400 ">
                            Explore frontend, backend, database, and tooling options,
                            compare them side by side, and put together the stack that
                            fits your next project.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">

                            <button
                                className="btn bg-gradient-to-r from-cyan-400 to-blue-500 rounded "
                            >
                                Explore Technologies 
                            </button>

                            <button
                                className="btn "
                            >
                                Learn More
                            </button>

                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center md:justify-end">
                        <div className="relative">

                           

                            {/* Image Container */}
                            <div className=" ">
                                <img src={BannerLogo}
                                    alt="Development Stack"
                                    className="w-full max-w-md object-contain  "
                                />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;
