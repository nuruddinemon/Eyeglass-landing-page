import { Carousel } from "@material-tailwind/react";
import heartIcon from "../assets/images/heart_icon.png";

export default function ProductSlider({urlOne, urlTwo, urlThree, discount = "flex"}) {

  return(
    <Carousel 
            className="overflow-hidden relative w-auto h-auto"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <ul className="absolute left-0 right-0 bottom-10 z-10 flex justify-center gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <li key={i}>
                      <button
                          className={`block  h-[14px] w-[14px] rounded-full transition-all content-[''] ${
                              activeIndex === i ? "bg-[#383838]" : "border-2 border-[#FED29C] bg-[#FED29C] "
                          }`}
                          onClick={() => setActiveIndex(i)}
                      />
                  </li>
                ))}
              </ul>
               )}
              prevArrow={() => false}
              nextArrow={() => false}

          >
           
            <div className="bg-[#F7F7F7] rounded-md p-8  h-[474px] flex flex-col justify-between ">
                <div className={`flex items-center justify-between `}>
                  <div className={`w-[60px] h-[60px] bg-[#fed29c] rounded-full justify-center items-center ${discount} `}>
                    <p className="text-[#5a5a5a] text-base font-jost font-bold ">
                      10%
                    </p>
                  </div>
                  <div className="w-[60px] h-[60px] border-[1px] border-[#545454] rounded-full flex justify-center items-center">
                    <button>
                      <img src={heartIcon} alt="heart icon" />
                    </button>
                </div>
              </div>
                <img src={urlOne} className="mb-10" alt="product thumbnail" />
            </div>
            <div className="bg-[#F7F7F7] rounded-md p-8  h-[474px] flex flex-col justify-between ">
                <div className={`flex items-center justify-between `}>
                  <div className={`w-[60px] h-[60px] bg-[#fed29c] rounded-full justify-center items-center ${discount} `}>
                    <p className="text-[#5a5a5a] text-base font-jost font-bold ">
                      10%
                    </p>
                  </div>
                  <div className="w-[60px] h-[60px] border-[1px] border-[#545454] rounded-full flex justify-center items-center">
                    <button>
                      <img src={heartIcon} alt="heart icon" />
                    </button>
                </div>
              </div>
                <img src={urlTwo} className="mb-10" alt="product thumbnail" />
            </div>
            <div className="bg-[#F7F7F7] rounded-md p-8  h-[474px] flex flex-col justify-between ">
                <div className={`flex items-center justify-between `}>
                  <div className={`w-[60px] h-[60px] bg-[#fed29c] rounded-full justify-center items-center ${discount} `}>
                    <p className="text-[#5a5a5a] text-base font-jost font-bold ">
                      10%
                    </p>
                  </div>
                  <div className="w-[60px] h-[60px] border-[1px] border-[#545454] rounded-full flex justify-center items-center">
                    <button>
                      <img src={heartIcon} alt="heart icon" />
                    </button>
                </div>
              </div>
                <img src={urlThree} className="mb-10" alt="product thumbnail" />
            </div>

          </Carousel>
  )
}
