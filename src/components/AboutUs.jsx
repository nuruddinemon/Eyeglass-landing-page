import aboutImg from '../assets/images/about Image.png'

export default function AboutUs() {
  return (
    <div id="about_us" className="pt-12">
      <div className="flex justify-center">
        <div className="bg-[#FED29C] w-7/12 flex flex-col justify-center ps-36 pr-28">
          <h2 className="text-[#383838] text-4xl font-bold font-jost leading-[48px]">
            Experience clear vision with OptiChroma Vision Frames
          </h2>
          <p className="text-[#535353] text-xl font-jost mt-6">
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
        <div className='w-5/12'>
          <img src={aboutImg} alt="aboutImg" />
        </div>
      </div>
    </div>
  );
}
