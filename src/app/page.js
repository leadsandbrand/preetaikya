



import Footer from "@/components/layout/footer/Footer";
import Footer10 from "@/components/layout/footer/Footer10";
import Header from "@/components/layout/header/Header";
import About9 from "@/components/sections/about/About9";
import Blogs10 from "@/components/sections/blogs/Blogs10";
import Brands3 from "@/components/sections/brands/Brands3";
import Cta from "@/components/sections/cta/Cta";
import Funfact1 from "@/components/sections/funfacts/Funfact1";
import Hero from "@/components/sections/hero/Hero";
import Hero10 from "@/components/sections/hero/Hero10";
import TextMarquee from "@/components/sections/marquee/TextMarquee";
import Portfolios1 from "@/components/sections/portfolios/Portfolios1";
import Portfolios10 from "@/components/sections/portfolios/Portfolios10";

import PricingPlan4 from "@/components/sections/pricing-plan/PricingPlan4";
import Process4 from "@/components/sections/process/Process4";
import Services10 from "@/components/sections/services/Services10";
import Testimonials1 from "@/components/sections/testimonials/Testimonials1";
import Testimonials10 from "@/components/sections/testimonials/Testimonials10";
import PortfolioCard1 from "@/components/shared/cards/PortfolioCard1";
import BackToTop from "@/components/shared/others/BackToTop";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Home() {
	return (
		<div>
		<BackToTop />
		<Header headerType={10} />
		<Header headerType={10} isStickyHeader={true} />
		<div id="smooth-wrapper">
			<div id="smooth-content">
				<main>
					<div className="top-space-15"></div>
					<Hero10 />
					<Services10 />
					<Funfact1/>
			

				  
				  
					<About9 />
				

						 <Portfolios1/>
					
					
					<Testimonials1/>
					<Cta  className=" h-10-cta" />
				</main>
			
				
				<Footer/>
			</div>
		</div>
		<TjMagicCursor />
		<ClientWrapper />
	</div>
	);
}
