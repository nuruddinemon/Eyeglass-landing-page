import searchIcon from '../assets/images/search Icon.png'
import sunglassIcon from '../assets/images/sunglass Icon.png'
import cardIcon from '../assets/images/card Icon.png'
import deliveryIcon from "../assets/images/delivery Icon.png";

export default function BuyEasyStep() {
  return (
    <div id='buy_easy_step' className="relative h-[236px]">
      <div className="flex justify-between w-[1216px] mx-auto absolute left-0 right-0 -top-16">
        <div className="text-center">
          <div className="bg-[#FED29C] w-[130px] h-[130px] flex items-center justify-center rounded-full mx-auto">
            <img src={searchIcon} alt="img" />
          </div>
          <h5 className="font-jost text-xl font-bold pb-1 text-[#383838] mt-6">
            Search you sunglass
          </h5>
          <p className="font-jost text-base font-normal text-[#535353]">
            Shop Stylish Eyewear Now
          </p>
        </div>
        
        <div className="w-[143px] border-t-[1px] border-[#545454] border-dashed absolute translate-x-[180px] translate-y-[62px] after:w-4 after:h-4 after:bg-[#fed29c] after:rounded-full after:block after:absolute after:-right-4 after:-bottom-[9px]"></div>
        
        <div className="text-center">
          <div
            className="bg-[#FED29C] w-[130px] h-[130px] flex items-center justify-center rounded-full
          mx-auto"
          >
            <img src={sunglassIcon} alt="img" />
          </div>
          <h5 className="font-jost text-xl font-bold pb-1 text-[#383838] mt-6">
            Search you sunglass
          </h5>
          <p className="font-jost text-base font-normal text-[#535353]">
            Shop Stylish Eyewear Now
          </p>
        </div>
        
        <div className="w-[143px] border-t-[1px] border-[#545454] border-dashed absolute translate-x-[525px] translate-y-[62px] after:w-4 after:h-4 after:bg-[#fed29c] after:rounded-full after:block after:absolute after:-right-4 after:-bottom-[9px]"></div>
        
        <div className="text-center">
          <div className="bg-[#FED29C] w-[130px] h-[130px] flex items-center justify-center rounded-full mx-auto">
            <img src={cardIcon} alt="img" />
          </div>
          <h5 className="font-jost text-xl font-bold pb-1 text-[#383838] mt-6">
            Search you sunglass
          </h5>
          <p className="font-jost text-base font-normal text-[#535353]">
            Shop Stylish Eyewear Now
          </p>
        </div>
        
        <div className="w-[143px] border-t-[1px] border-[#545454] border-dashed absolute translate-x-[870px] translate-y-[62px] after:w-4 after:h-4 after:bg-[#fed29c] after:rounded-full after:block after:absolute after:-right-4 after:-bottom-[9px]"></div>
        
        <div className="text-center">
          <div className="bg-[#FED29C] w-[130px] h-[130px] flex items-center justify-center rounded-full mx-auto">
            <img src={deliveryIcon} alt="img" />
          </div>
          <h5 className="font-jost text-xl font-bold pb-1 text-[#383838] mt-6">
            Search you sunglass
          </h5>
          <p className="font-jost text-base font-normal text-[#535353]">
            Shop Stylish Eyewear Now
          </p>
        </div>
      </div>
    </div>
  );
}
