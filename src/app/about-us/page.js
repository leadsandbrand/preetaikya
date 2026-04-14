
import Footer from "@/components/layout/footer/Footer"
import Footercontact from "@/components/layout/footer/Footercontact"
import Header from "@/components/layout/header/Header"
import About1 from "@/components/sections/about/About1"
import About3 from "@/components/sections/about/About3"
import Team1 from "@/components/sections/teams/Team1"
import Team11 from "@/components/sections/teams/Team11"
import Testimonials22 from "@/components/sections/testimonials/Testimonial22"
import Testimonials23 from "@/components/sections/testimonials/Testimonial23"
import Testimonial24 from "@/components/sections/testimonials/Testimonial24"
import Testimonial25 from "@/components/sections/testimonials/Testimonial25"
import Testimonials2 from "@/components/sections/testimonials/Testimonials2"




const pageabout=()=>{
    return <div> 
    <Header  headerType={10}/>
    <Header   headerType={10} isStickyHeader={true}/>
  
     <About3/>
     <Team1   type={0}/>
     <Team11/>
    
     <Testimonials22/>
     <Testimonials23/> 
     <Testimonial24/>
     <Testimonial25/>
    
       <Footercontact/>
    </div>
}
export default pageabout