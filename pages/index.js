import Staff from "../components/common/Staff";
import ContactInfo from "../components/common/ContactInfo";
import Advantages from "../components/Home/Advantages";
import Contact from "../components/Home/Contact";
import Counts from "../components/common/Counts";
import Description from "../components/Home/Description";
import Products from "../components/Home/Services";
import Comments from "../components/common/Comments";
import Search from "../components/Home/Search";
import CustomSlider from "../components/CustomSlider";
import SliderSwiper from "../components/SliderSwiper";

function Home() {
  return (
    <>
      <Description />
      <Advantages />
      <Contact />
      <Products />
      <Staff />
      <Counts />
      <Comments />
      <ContactInfo />
      <Search />
    </>
  );
}

Home.pageDetails = {
  title: "Shannon IT",
  description: "Shannon IT",
  keywords: "Shannon IT",
  text: "There's a template for everything",
  heading: "We create high quality digital solutions",
};

// Home.PageLayout = Layout;

export default Home;
