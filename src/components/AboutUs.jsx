import aboutImg from '../assets/images/about Image.png'

export default function AboutUs() {
  return (
    <div id="about_us" className="pt-12 xl:w-auto lg:w-[90%] mx-auto">
      <div className="flex flex-col justify-center lg:flex-row ">
        <div className="bg-[#FED29C] xl:w-7/12 lg:w-3/5 flex flex-col justify-center 2xl:ps-36 2xl:pr-28 xl:ps-16 lg:p-8 items-center lg:items-stretch px-14 py-12">
          <h2 className="text-[#383838] text-4xl font-bold font-jost leading-[48px] lg:text-start text-center">
            Experience clear vision with OptiChroma Vision Frames
          </h2>
          <p className="text-[#535353] text-xl font-jost mt-4">
            At OptiChroma, we believe that everyone deserves clear vision and
            stylish eyewear. That's why we've designed a collection of frames
            that prioritize both form and function.
          </p>
          <p className="text-[#535353] text-xl font-jost mt-3">
            Our team of experts is dedicated to helping you find the perfect
            pair of glasses.
          </p>
          <a
            href="#"
            className="flex justify-center items-center bg-[#383838] text-white w-[158px] h-[48px] rounded-md font-jost text-lg mt-6"
          >
            About Us
          </a>
        </div>
        <div className="xl:w-5/12 lg:w-2/5 xl:h-auto lg:h-[430px]">
          <img
            src={aboutImg}
            alt="aboutImg"
            className="w-full xl:h-auto lg:h-[430px] "
          />
        </div>
      </div>
    </div>
  );
}
