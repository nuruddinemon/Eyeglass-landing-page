export default function DiscountProducts() {
  return (
    <div id="discount_products" className="my-16 2xl:w-[1321px] 2xl:mx-auto">
      <div className="flex gap-6 w-[90%] mx-auto justify-center lg:flex-row flex-col ">
        <div className="flex flex-col gap-6">
          <div className='bg-[url("../src/assets/images/discount_Image_1.png")] xl:w-[550px] lg:w-[480px] lg:h-[643px] h-[500px] 2xl:w-[633px] bg-cover bg-center flex items-end pb-8 rounded-sm'>
            <div className="bg-white xl:w-[483px] lg:w-[420px] h-[225px] flex flex-col justify-center items-center mx-auto rounded-md w-11/12">
              <h2 className="text-[#383838] text-2xl font-bold font-jost">
                Bravo Sunglasses
              </h2>
              <p className="text-[#383838] text-xl font-jost mt-3">
                Up to 80% off on selected item
              </p>
              <a
                href="#"
                className="flex justify-center items-center bg-[#383838] text-white w-[156px] h-[48px] rounded-md font-jost text-lg mt-6"
              >
                Buy Now
              </a>
            </div>
          </div>
          <div className='bg-[url("../src/assets/images/discount_Image_3.png")] xl:w-[550px] lg:w-[480px] h-[509px] 2xl:w-[633px] bg-cover bg-center flex items-end pb-8 rounded-sm'>
            <div className="bg-white xl:w-[483px] lg:w-[420px] h-[225px] flex flex-col justify-center items-center mx-auto rounded-md w-11/12">
              <h2 className="text-[#383838] text-2xl font-bold font-jost">
                John Jacobs
              </h2>
              <p className="text-[#383838] text-xl font-jost mt-3">
                Up to 40% off on selected item
              </p>
              <a
                href="#"
                className="flex justify-center items-center bg-[#383838] text-white w-[156px] h-[48px] rounded-md font-jost text-lg mt-6"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className='bg-[url("../src/assets/images/discount_Image_2.png")] xl:w-[550px] lg:w-[480px] h-[509px] 2xl:w-[633px] bg-cover bg-center flex items-end pb-8 rounded-sm'>
            <div className="bg-white xl:w-[483px] lg:w-[420px]  h-[225px] flex flex-col justify-center items-center mx-auto rounded-md w-11/12">
              <h2 className="text-[#383838] text-2xl font-bold font-jost">
                Tommy Hilfiger
              </h2>
              <p className="text-[#383838] text-xl font-jost mt-3">
                Up to 30% off on selected item
              </p>
              <a
                href="#"
                className="flex justify-center items-center bg-[#383838] text-white w-[156px] h-[48px] rounded-md font-jost text-lg mt-6"
              >
                Buy Now
              </a>
            </div>
          </div>
          <div className='bg-[url("../src/assets/images/discount_Image_4.png")] xl:w-[550px] lg:w-[480px] lg:h-[643px] h-[500px] 2xl:w-[633px]  bg-cover bg-center flex items-end pb-8 rounded-sm'>
            <div className="bg-white xl:w-[483px] lg:w-[420px]  h-[225px] flex flex-col justify-center items-center mx-auto rounded-md w-11/12">
              <h2 className="text-[#383838] text-2xl font-bold font-jost">
                Vincent Chase
              </h2>
              <p className="text-[#383838] text-xl font-jost mt-3">
                Up to 10% off on selected item
              </p>
              <a
                href="#"
                className="flex justify-center items-center bg-[#383838] text-white w-[156px] h-[48px] rounded-md font-jost text-lg mt-6"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
