import { FcHeatMap } from "react-icons/fc";
import { LuWheat } from "react-icons/lu";
import { FaJarWheat } from "react-icons/fa6";
import { PiIslandFill } from "react-icons/pi";
import TimeLineImage from "../../assets/urban-why.jpg";

const TimeLineLogo = [
    {
        logo: FcHeatMap,
        title: "Detect and Visualize Urban Heat Islands (UHIs)",
        content: "Use satellite imagery and advanced data processing to identify and map areas of high heat concentration in urban environments.",
    },
    {
        logo: LuWheat,
        title: "Smart Recommendations for Cooling Strategies",
        content: "Provide AI-driven insights and strategies, such as green roofs, reflective materials, and increased vegetation, to mitigate UHI effects.",
    },
    {
        logo: FaJarWheat,
        title: "Interactive Data Tools for Urban Planners",
        content: "Offer customizable, real-time heat maps and simulations to empower urban planners and architects in designing cooler, more sustainable environments.",
    },
    {
        logo: PiIslandFill,
        title: "Promote Sustainable Urban Development",
        content: "Encourage the adoption of sustainable infrastructure and planning methods that reduce heat islands and enhance livability in cities.",
    },
];

const TimelineSection = () => {
    return (
        <div className='w-[90%] mx-auto mt-20'>

            <div className='flex flex-col md:flex-row items-center gap-6 md:gap-8'>

                {/* Logos and Content */}
                <div className='w-full '>
                    {TimeLineLogo.map((item, index) => (
                        <div className='flex items-center gap-4 pb-6' key={index}>
                            <div className='w-fit h-fit p-3 rounded-full flex justify-center items-center shadow-md shadow-sky-600 bg-white'>
                                <item.logo size={30} />
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-lg md:text-xl font-semibold text-richblack-700'>{item.title}</p>
                                <p className='text-base md:text-lg text-richblack-700 font-semibold opacity-80 font-inter'>{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Image Section */}
                <div className='relative w-full md:w-[40%] shadow-lg shadow-blue-300'>
                    <img src={TimeLineImage} alt="Timeline" className='w-full' /> 
                    <div className='absolute bottom-0 left-0 bg-caribbeangreen-600 text-white py-4 px-6 md:px-10 rounded-tl-lg md:rounded-bl-lg'>
                        <div className='flex items-center gap-3'>
                            <div className='border-r-2 border-richblack-200 pr-3 md:pr-5'>
                                <p className='text-2xl md:text-3xl font-bold'>10</p>
                                <p className='text-base md:text-lg font-semibold text-caribbeangreen-200'>Years of Experience</p>
                            </div>
                            <div>
                                <p className='text-2xl md:text-3xl font-bold'>1000+</p>
                                <p className='text-base md:text-lg font-semibold text-caribbeangreen-200'>Students</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default TimelineSection;
