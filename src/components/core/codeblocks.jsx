import { TypeAnimation } from 'react-type-animation';

const CodeBlocks = ({heading,subHeading, position,  codeblock, backgroundGradient, codeColor}) => {
  return (
    <div className={`flex ${position} my-20 justify-center flex-col lg:gap-10 gap-10 items-center`}>
        <div className='w-[100%] lg:w-[50%] flex flex-col gap-8'>
            {heading}
            <div className='text-richblack-300 font-bold'>
            {subHeading}
            </div>
        </div>
        {/* Section2 */}
        <div className='w-[100%] lg:w-[50%] flex h-fit shadow shadow-white p-4 '>
            <div className='w-[10%] text-center flex flex-col text-white font-inter font-bold'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
                <p>12</p>
            </div>

            <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-4`}>
                <TypeAnimation sequence={[codeblock, 5000, ""]}
                               repeat={Infinity}
                               cursor={true}
                               omitDeletionAnimation
                               style={{
                                whiteSpace:`pre-wrap`,
                                display:`block`,
                               }}

                />
            </div>
        </div>
    </div>
    
  )
}

export default CodeBlocks