import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import BuyEasyStep from "./components/BuyEasyStep";
import DiscountProducts from "./components/DiscountProducts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OurProducts from "./components/OurProducts";

function App() {
  return (
    <>
      {/* Header Area */}
      <Header/>
      {/* Banner Area */}
      <Banner/>
      {/* Buy Easy Step Area */}
      <BuyEasyStep/>
      {/* Dicount Products Area */}
      <DiscountProducts/>
      {/* About Us Area */}
      <AboutUs/>
      {/* Our Products Area */}
      <OurProducts/>
      {/* Footer Area */}
      <Footer/>
    </>
  );
}

export default App;
