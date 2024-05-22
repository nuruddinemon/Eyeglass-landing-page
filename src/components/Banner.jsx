import shop from "../assets/images/shop icon.png";
import banner from "../assets/images/banner.png";

export default function Banner() {
  return (
    <div
      id="banner"
      className="bg-[#EAEAEA] xl:h-[918px] flex justify-between items-center lg:h-[520px]"
    >
      <div className="relative xl:w-[96%] flex xl:justify-center items-end lg:w-[85%] mx-auto xl:block lg:flex-row flex-col gap-12 lg:gap-0 w-4/5">
        <div className="flex flex-col lg:gap-4 justify-center 2xl:ml-[7.8rem] z-10 xl:h-[918px] relative xl:w-1/2  w-full xl:ml-16 mt-10 lg:h-[476px] lg:items-baseline items-center">
          <h1 className="text-[#383838] text-[54px] leading-[66px] font-bold font-jost mb-8 lg:text-start text-center">
            Personalized Eyeglass Shopping
          </h1>
          <a
            href="#"
            className="flex bg-[#383838] text-white items-center w-[184px] h-[54px] justify-center gap-4 rounded-md font-jost text-base"
          >
            <img src={shop} alt="" />
            <span>Buy Now</span>
          </a>
        </div>
        <div className="xl:absolute top-[4.9rem] 2xl:translate-x-1/2 z-0 2xl:w-[60%] xl:translate-x-[40%]">
          <img src={banner} alt="" />
        </div>
      </div>
      <div className="mr-8">
        <ul className="flex flex-col gap-4">
          <li>
            <button className="bg-[#383838] h-4 w-4 rounded-full"></button>
          </li>
          <li>
            <button className="bg-[#FED29C] border-2 border-[#383838] h-4 w-4 rounded-full"></button>
          </li>
          <li>
            <button className="bg-[#383838] h-4 w-4 rounded-full"></button>
          </li>
        </ul>
      </div>
    </div>
  );
}
