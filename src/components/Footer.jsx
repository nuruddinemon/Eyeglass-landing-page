import footerLogo from "../assets/images/footer Logo.png";
import linkedin from "../assets/images/linkedin-in icon.png";
import instagram from "../assets/images/square-instagram icon.png";
import twitter from "../assets/images/twitter icon.png";

export default function Footer() {
  return (
    <div>
      <div className="flex justify-between 2xl:w-[1321px] mx-auto xl:w-[90%]">
        <div className="w-[350px]">
          <a href="#">
            <img src={footerLogo} alt="footer logo" />
          </a>
          <p className="font-jost text-[#383838] text-base my-8">
            Latin literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampde
          </p>
          <ul className="flex gap-4 items-center">
            <li className="border-[#FED29C] border-[1px] rounded-full w-8 h-8 flex justify-center items-center">
              <a href="">
                <img src={linkedin} alt="" />
              </a>
            </li>
            <li className="border-[#FED29C] border-[1px] rounded-full w-8 h-8 flex justify-center items-center">
              <a href="">
                <img src={instagram} alt="" />
              </a>
            </li>
            <li className="border-[#FED29C] border-[1px] rounded-full w-8 h-8 flex justify-center items-center">
              <a href="">
                <img src={twitter} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-jost text-[#383838] text-xl font-bold mb-8">
            Support
          </h2>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="" className="font-jost text-[#383838] text-base ">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="" className="font-jost text-[#383838] text-base ">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="" className="font-jost text-[#383838] text-base ">
                Product FAQs
              </a>
            </li>
            <li>
              <a href="" className="font-jost text-[#383838] text-base ">
                Company Support
              </a>
            </li>
            <li>
              <a href="" className="font-jost text-[#383838] text-base ">
                Manage Account
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-jost text-[#383838] text-xl font-bold mb-8">
            Quick Links
          </h2>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="" className="font-jost text-[#383838] text-base ">
                About Us
              </a>
            </li>
            <li>
              <a href="" className="font-jost text-[#383838] text-base ">
                Blog Post
              </a>
            </li>
            <li>
              <a href="" className="font-jost text-[#383838] text-base ">
                Product Features
              </a>
            </li>
            <li>
              <a href="" className="font-jost text-[#383838] text-base ">
                Company Info
              </a>
            </li>
            <li>
              <a href="" className="font-jost text-[#383838] text-base ">
                Company Info
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-jost text-[#383838] text-xl font-bold mb-8">
            Communnity
          </h2>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="" className="font-jost text-[#383838] text-base ">
                Become an affiliate
              </a>
            </li>
            <li>
              <a href="" className="font-jost text-[#383838] text-base ">
                Help Center
              </a>
            </li>
            <li>
              <a href="" className="font-jost text-[#383838] text-base ">
                Product FAQs
              </a>
            </li>
            <li>
              <a href="" className="font-jost text-[#383838] text-base ">
                Our Fourms
              </a>
            </li>
            <li>
              <a href="" className="font-jost text-[#383838] text-base ">
                Product API
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t-[1px] border-[#FED29C] mt-6">
        <div className="flex justify-between 2xl:w-[1321px] mx-auto my-6 xl:w-[90%]">
          <p className="font-jost text-[#535353] text-base">
            Copyright © 2023 All rights reserved by Eyeglass
          </p>
          <ul className="flex gap-4">
            <li>
              <a href="" className="font-jost text-[#383838] text-base ">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="" className="font-jost text-[#383838] text-base ">
                Terms of service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
