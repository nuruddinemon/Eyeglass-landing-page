import ProductSlider from "./ProductSlider";
import product1 from "../assets/images/product Image 1.png";
import product2 from "../assets/images/product Image 2.png";
import product3 from "../assets/images/product Image 3.png";
import product4 from "../assets/images/product Image 4.png";
import product5 from "../assets/images/product Image 5.png";
import product6 from "../assets/images/product Image 6.png";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";


let products = [
        {
            "id": 1,
            "title": "Bravo Sunglasses",
            "price": 150,
            "discountPrice": 100,
        },
        {
            "id": 2,
            "title": "Vincent Chase",
            "price": 150,
            "discountPrice": 120,
        },
        {
            "id": 3,
            "title": "John Jacobs",
            "price": 150,
            "discountPrice": 100,
        },
        {
            "id": 4,
            "title": "Tommy Hilfiger",
            "price": 150,
            "discountPrice": 130,
        },
        {
            "id": 5,
            "title": "Ray Bans",
            "price": 150,
            "discountPrice": 120,
        },
        {
            "id": 6,
            "title": "Occhiali",
            "price": 150,
            "discountPrice": 110,
        },
]

export default function OurProducts() {
  const {addToCart } = useContext(CartContext);
  return (
    <div id="our_products" className="2xl:w-[1321px] w-[90%] mx-auto my-28">
      <div className="flex flex-col items-center gap-8 lg:justify-between lg:flex-row lg:items-stretch lg:gap-0">
        <div>
          <h2 className="text-[#383838] text-4xl font-bold font-jost leading-[48px] lg:text-start text-center">
            Our Products
          </h2>
          <p className="text-[#535353] text-base font-jost mt-3 lg:text-start text-center">
            Experience crystal clear vision and elevated style with our <br />{" "}
            premium collection of eyeglasses.
          </p>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-8">
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
      {products.length > 0 && (
          <div className="grid 2xl:grid-cols-3  items-center gap-12 mt-16 xl:gap-8 2xl:justify-between justify-center 2xl:flex-row 2xl:items-stretch">
            {products.map((product) => (
              <div className="xl:w-[417px] 2xl:text-start text-center w-[70%] mx-auto" key={product.id}>
                <ProductSlider urlOne={product2} urlTwo={product3} urlThree={product4}  />
                <h2 className="text-[#383838] text-3xl font-jost leading-[40px] mt-4">
                  {product.title}
                </h2>
                <p className="flex gap-2 my-2 text-xl font-jost 2xl:justify-start justify-center">
                  <span className="font-bold text-[#535353]">${product.discountPrice}</span>
                  <span className="text-[#545454] line-through">${product.price}</span>
                </p>
                <button onClick={() => addToCart(product) } className="text-[#5a5a5a] text-xl font-jost underline">
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        )}

     
    </div>
  );
}
