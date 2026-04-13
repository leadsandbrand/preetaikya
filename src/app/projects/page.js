import Footer from "@/components/layout/footer/Footer";
import Footercontact from "@/components/layout/footer/Footercontact";
import Header from "@/components/layout/header/Header";
import About1 from "@/components/sections/about/About1";
import About111 from "@/components/sections/about/About111";
import About112 from "@/components/sections/about/About112";
import About113 from "@/components/sections/about/About113";
import About3 from "@/components/sections/about/About3";
import About31 from "@/components/sections/about/About31";
import About32 from "@/components/sections/about/About32";
import About33 from "@/components/sections/about/About33";
import Blogs12 from "@/components/sections/blogs/Blog12";
import Faq2 from "@/components/sections/faq/Faq2";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
const ProjectsPage = () => {
    return (
      <div>
        <Header   headerType={10}/>
        <Header    headerType={10} isStickyHeader={true}/>
        <Faq2 type={2}/>
    
        <About1/>
        <About111/>
        <About112/>
        <About113/>

        <Blogs12/>

          
            
            <Footercontact/>

        
       
		
       
      </div>
    );
  };
  
  export default ProjectsPage;