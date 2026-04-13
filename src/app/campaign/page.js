import Footercontact from "@/components/layout/footer/Footercontact";
import Header from "@/components/layout/header/Header";
import About8 from "@/components/sections/about/About8";
import Blogs4 from "@/components/sections/blogs/Blogs4";
import Testimonials2 from "@/components/sections/testimonials/Testimonials2";

const CampaignPage = () => {
    return (
      <div>
        <Header headerType={10}/>
        <Header headerType={10} isStickyHeader={true}/>
         <Testimonials2/>
        <Footercontact/> 
      </div>
    );
  };
  
  export default CampaignPage;