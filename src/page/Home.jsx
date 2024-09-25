import CodeBlocks from "../components/core/codeblocks";
import TimelineSection from "../components/core/timeline";

const Home = () => {
    return (
      <>
        <div
          style={{
            backgroundImage: `url('https://res.cloudinary.com/ddlepk8lb/image/upload/v1727195826/heroImage_h1w10b.jpg')`,
          }}
          className="bg-cover bg-center h-[40rem] relative"
        >
          {/* Main Content */}
          <div className="flex items-center justify-center text-white text-center pt-36">
            <div className="flex flex-col w-[65%]">
              <h1 className="text-5xl font-bold mb-4  text-gray-200">UrbanZephyr</h1>
              <p className="text-2xl px-4">
                Empowering cities to combat urban heat challenges with AI-driven insights,
                smart planning, and sustainable innovation. Transform your urban landscape
                into a resilient and thriving ecosystem.
              </p>
            </div>
          </div>
          {/* <div className="absoulte bottom-2"> */}
          <div className="bg-slate-800 bg-opacity-90 p-10 mt-40 ">
          <div className="flex justify-around text-white">
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-lg text-yellow-300">Interactive Heat Maps</h3>
              <p className="text-sm">Visualize real-time heat data.</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-lg text-yellow-300">AI-Powered Insights</h3>
              <p className="text-sm">Get tailored UHI reduction strategies.</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-lg text-yellow-300">Scenario Simulations</h3>
              <p className="text-sm">Test cooling strategies in real-time.</p>
            </div>
          </div>
        </div>
        </div>
        <div className=" w-[80%] mx-auto my-20 px-4">
  <h2 className="text-3xl font-semibold mb-4 text-yellow-400">Goal of the Project</h2>
  <TimelineSection/>

  <div>
    <div className=" w-[90%]  flex gap-10 py-10">
    <div className="w-[60rem]">
    <img src="https://res.cloudinary.com/ddlepk8lb/image/upload/v1727202810/delhi_xbqnva.png" alt="" />
    </div>
    <div className="w-[60rem]">
    <img src="https://res.cloudinary.com/ddlepk8lb/image/upload/v1727203185/MAP-4-Delhi-heat_fsqvuc.jpg" alt="" />
    </div>
    </div>
  </div>
</div>

        {/* section2 */}
        <div className="bg-[#0e141b]">
        <div className="w-[80%] mx-auto ">
        <div className="w-[93%]">
              <CodeBlocks
                 position={"lg:flex-row"}
                 heading={<div className="text-4xl font-semibold text-sky-600">UrbanZephyr: A Breeze of Change for Climate-Resilient Cities</div>}
                 subHeading={<div className="text-white">Empowering communities to address the pressing issue of urban heat, we harness the power of smart solutions and collaboration to create cooler, healthier urban environments for all residents.</div>}
                 ctabtn1={
                  {
                    text: "Try it Yorself",
                    Linkto: "/signup",
                    active:true,
                  }
                 }
                 ctabtn2={
                  {
                    text: "Learn more",
                    Linkto: "/login",
                    active:false,
                  }
                 }
codeblock={`At UrbanZephyr, we are committed to creating climate-resilient cities through innovative planning and cutting-edge technology. Our platform harnesses the power of AI and satellite data to provide interactive heat maps and smart solutions to urban planners, architects, and city authorities. Whether it's cooling down a neighborhood or transforming an entire city, UrbanZephyr offers data-driven tools that enable sustainable urban design.`}

                 codeColor={"text-yellow-300"}
              />
            </div>
            <div className="w-[93%]">
              <CodeBlocks
                 position={"lg:flex-row-reverse"}
                 heading={<div className="text-4xl font-semibold text-yellow-400">Our Misson</div>}
                 subHeading={<div className="text-white">Uniting data, design, and sustainable practices, we aim to revolutionize urban planning by creating cooler and more livable spaces, fostering healthier environments for our communities and the planet.</div>}
                 ctabtn1={
                  {
                    text: "Continue Lesson",
                    Linkto: "/signup",
                    active:true,
                  }
                 }
                 ctabtn2={
                  {
                    text: "Learn more",
                    Linkto: "/login",
                    active:false,
                  }
                 }
codeblock={`UrbanZephyr aims to mitigate the Urban Heat Island effect by providing actionable insights and solutions that make cities cooler, greener, and more livable. Through the integration of satellite data, machine learning models, and user-friendly design tools, we empower decision-makers to create sustainable urban environments that benefit both people and the planet.`}

                 codeColor={"text-[#60a5fa]"}
              />
            </div>
            </div>
            </div>

      </>
    );
  };
  
  export default Home;
  