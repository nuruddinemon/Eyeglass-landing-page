import product1 from "../assets/images/product Image 1.png";
import product2 from "../assets/images/product Image 2.png";
import product3 from "../assets/images/product Image 3.png";
import product4 from "../assets/images/product Image 4.png";
import product5 from "../assets/images/product Image 5.png";
import product6 from "../assets/images/product Image 6.png";
import heartIcon from "../assets/images/heart_icon.png";

export default function OurProducts() {
  return (
    <div id="our_products" className="2xl:w-[1321px] xl:w-[90%] mx-auto my-28">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-[#383838] text-4xl font-bold font-jost leading-[48px]">
            Our Products
          </h2>
          <p className="text-[#535353] text-base font-jost mt-3">
            Experience crystal clear vision and elevated style with our <br />{" "}
            premium collection of eyeglasses.
          </p>
        </div>
        <div>
          <ul className="flex justify-center gap-8  items-center">
            <li>
              <button className="text-[#383838] text-base font-jost ">
                Latest
              </button>
            </li>
            <li>
              <button className="text-[#383838] text-base font-jost border-[#545454] border-[1px] rounded-md px-4 py-2 ">
                Special
              </button>
            </li>
            <li>
              <button className="text-[#383838] text-base font-jost ">
                Best Sell
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between gap-4 mt-16">
        <div className="w-[417px]">
          <div className="bg-[#F7F7F7] rounded-md p-8  h-[474px] flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div className="w-[60px] h-[60px] bg-[#fed29c] rounded-full flex justify-center items-center">
                <p className="text-[#5a5a5a] text-base font-jost font-bold ">
                  10%
                </p>
              </div>
              <div className="w-[60px] h-[60px] border-[1px] border-[#545454] rounded-full flex justify-center items-center">
                <img src={heartIcon} alt="heart icon" />
              </div>
            </div>
            <img src={product1} alt="product thumbnail" />
            <ul className="flex justify-center gap-2">
              <li>
                <button className="bg-[#FED29C] h-[14px] w-[14px] rounded-full"></button>
              </li>
              <li>
                <button className="bg-[#383838] h-[14px] w-[14px] rounded-full"></button>
              </li>
              <li>
                <button className="bg-[#FED29C] border-[1px] border-[#383838] h-[14px] w-[14px] rounded-full"></button>
              </li>
            </ul>
          </div>
          <h2 className="text-[#383838] text-3xl font-jost leading-[40px] mt-4">
            Bravo Sunglasses
          </h2>
          <p className="text-xl font-jost my-2 flex gap-2">
            <span className="font-bold text-[#535353]">$100</span>
            <span className="text-[#545454] line-through">$150</span>
          </p>
          <button className="text-[#5a5a5a] text-xl font-jost underline">
            Add To Cart
          </button>
        </div>
        <div className="w-[417px]">
          <div className="bg-[#F7F7F7] rounded-md p-8  h-[474px] flex flex-col justify-between ">
            <div className="flex justify-between items-center">
              <div className="w-[60px] h-[60px] bg-[#fed29c] rounded-full flex justify-center items-center">
                <p className="text-[#5a5a5a] text-base font-jost font-bold ">
                  10%
                </p>
              </div>
              <div className="w-[60px] h-[60px] border-[1px] border-[#545454] rounded-full flex justify-center items-center">
                <img src={heartIcon} alt="heart icon" />
              </div>
            </div>
            <img src={product2} alt="product thumbnail" />
            <ul className="flex justify-center gap-2">
              <li>
                <button className="bg-[#FED29C] h-[14px] w-[14px] rounded-full"></button>
              </li>
              <li>
                <button className="bg-[#383838] h-[14px] w-[14px] rounded-full"></button>
              </li>
              <li>
                <button className="bg-[#FED29C] border-[1px] border-[#383838] h-[14px] w-[14px] rounded-full"></button>
              </li>
            </ul>
          </div>
          <h2 className="text-[#383838] text-3xl font-jost leading-[40px] mt-4">
            Vincent Chase
          </h2>
          <p className="text-xl font-jost my-2 flex gap-2">
            <span className="font-bold text-[#535353]">$120</span>
            <span className="text-[#545454] line-through">$150</span>
          </p>
          <button className="text-[#5a5a5a] text-xl font-jost">
            Add To Cart
          </button>
        </div>
        <div className="w-[417px]">
          <div className="bg-[#F7F7F7] rounded-md p-8  h-[474px] flex flex-col justify-between">
            <div className="flex justify-end items-center">
              <div className="w-[60px] h-[60px] bg-[#fed29c] rounded-full flex justify-center items-center hidden">
                <p className="text-[#5a5a5a] text-base font-jost font-bold ">
                  10%
                </p>
              </div>
              <div className="w-[60px] h-[60px] border-[1px] border-[#545454] rounded-full flex justify-center items-center">
                <img src={heartIcon} alt="heart icon" />
              </div>
            </div>
            <img src={product3} alt="product thumbnail" />
            <ul className="flex justify-center gap-2">
              <li>
                <button className="bg-[#FED29C] h-[14px] w-[14px] rounded-full"></button>
              </li>
              <li>
                <button className="bg-[#383838] h-[14px] w-[14px] rounded-full"></button>
              </li>
              <li>
                <button className="bg-[#FED29C] border-[1px] border-[#383838] h-[14px] w-[14px] rounded-full"></button>
              </li>
            </ul>
          </div>
          <h2 className="text-[#383838] text-3xl font-jost leading-[40px] mt-4">
            John Jacobs
          </h2>
          <p className="text-xl font-jost my-2 flex gap-2">
            <span className="font-bold text-[#535353]">$100</span>
            <span className="text-[#545454] hidden">$150</span>
          </p>
          <button className="text-[#5a5a5a] text-xl font-jost">
            Add To Cart
          </button>
        </div>
      </div>
      <div className="flex justify-between gap-4 mt-24">
        <div className="w-[417px]">
          <div className="bg-[#F7F7F7] rounded-md p-8 h-[474px] flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div className="w-[60px] h-[60px] bg-[#fed29c] rounded-full flex justify-center items-center">
                <p className="text-[#5a5a5a] text-base font-jost font-bold ">
                  10%
                </p>
              </div>
              <div className="w-[60px] h-[60px] border-[1px] border-[#545454] rounded-full flex justify-center items-center">
                <img src={heartIcon} alt="heart icon" />
              </div>
            </div>
            <img src={product4} alt="product thumbnail" />
            <ul className="flex justify-center gap-2">
              <li>
                <button className="bg-[#FED29C] h-[14px] w-[14px] rounded-full"></button>
              </li>
              <li>
                <button className="bg-[#383838] h-[14px] w-[14px] rounded-full"></button>
              </li>
              <li>
                <button className="bg-[#FED29C] border-[1px] border-[#383838] h-[14px] w-[14px] rounded-full"></button>
              </li>
            </ul>
          </div>
          <h2 className="text-[#383838] text-3xl font-jost leading-[40px] mt-4">
            Tommy Hilfiger
          </h2>
          <p className="text-xl font-jost my-2 flex gap-2">
            <span className="font-bold text-[#535353]">$130</span>
            <span className="text-[#545454] line-through">$150</span>
          </p>
          <button className="text-[#5a5a5a] text-xl font-jost underline">
            Add To Cart
          </button>
        </div>
        <div className="w-[417px]">
          <div className="bg-[#F7F7F7] rounded-md p-8  h-[474px] flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div className="w-[60px] h-[60px] bg-[#fed29c] rounded-full flex justify-center items-center hidden">
                <p className="text-[#5a5a5a] text-base font-jost font-bold ">
                  10%
                </p>
              </div>
              <div className="w-[60px] h-[60px] border-[1px] border-[#545454] rounded-full flex justify-center items-center">
                <img src={heartIcon} alt="heart icon" />
              </div>
            </div>
            <img src={product5} alt="product thumbnail" />
            <ul className="flex justify-center gap-2">
              <li>
                <button className="bg-[#FED29C] h-[14px] w-[14px] rounded-full"></button>
              </li>
              <li>
                <button className="bg-[#383838] h-[14px] w-[14px] rounded-full"></button>
              </li>
              <li>
                <button className="bg-[#FED29C] border-[1px] border-[#383838] h-[14px] w-[14px] rounded-full"></button>
              </li>
            </ul>
          </div>
          <h2 className="text-[#383838] text-3xl font-jost leading-[40px] mt-4">
            Ray Ban
          </h2>
          <p className="text-xl font-jost my-2 flex gap-2">
            <span className="font-bold text-[#535353]">$120</span>
            <span className="text-[#545454] line-through hidden">$150</span>
          </p>
          <button className="text-[#5a5a5a] text-xl font-jost underline">
            Add To Cart
          </button>
        </div>
        <div className="w-[417px]">
          <div className="bg-[#F7F7F7] rounded-md p-8  h-[474px] flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div className="w-[60px] h-[60px] bg-[#fed29c] rounded-full flex justify-center items-center">
                <p className="text-[#5a5a5a] text-base font-jost font-bold ">
                  10%
                </p>
              </div>
              <div className="w-[60px] h-[60px] border-[1px] border-[#545454] rounded-full flex justify-center items-center">
                <img src={heartIcon} alt="heart icon" />
              </div>
            </div>
            <img src={product6} alt="product thumbnail" />
            <ul className="flex justify-center gap-2">
              <li>
                <button className="bg-[#FED29C] h-[14px] w-[14px] rounded-full"></button>
              </li>
              <li>
                <button className="bg-[#383838] h-[14px] w-[14px] rounded-full"></button>
              </li>
              <li>
                <button className="bg-[#FED29C] border-[1px] border-[#383838] h-[14px] w-[14px] rounded-full"></button>
              </li>
            </ul>
          </div>
          <h2 className="text-[#383838] text-3xl font-jost leading-[40px] mt-4">
            Occhiali
          </h2>
          <p className="text-xl font-jost my-2 flex gap-2">
            <span className="font-bold text-[#535353]">$110</span>
            <span className="text-[#545454] line-through">$150</span>
          </p>
          <button className="text-[#5a5a5a] text-xl font-jost">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
