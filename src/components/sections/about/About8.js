import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Link from "next/link";

const About8 = () => {
	return (
		<section className="h9-about-section section-bottom-gap   about-8">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-8 h9-sec-heading">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								 Campaign
							</span>
							<h2
								className="sec-title title-highlight wow fadeInUp"
								data-wow-delay=".3s"
							>
								Championing Organ Donation in Association With Kiran Foundation
							</h2>
						</div>
						<div className="h9-about-area">
							<div
								className="about-img-area h9-about-img wow fadeInLeft"
								data-wow-delay=".3s"
							>
								<div className="about9-img overflow-hidden">
									<img
										data-speed=".8"
										src="/images/about/organs-donation.png"
										alt=""
									/>
								</div>
							
							</div>
							<div className="h9-about-content">
								<p className="desc wow fadeInUp" data-wow-delay=".4s">
								The Preet Aikya Foundation is a fervent advocate of organ and body donations. We are dedicated to promoting awareness through regular campaigns, believing that every act of generosity can save lives. Join us in this noble cause to give the gift of life and make a profound impact on the future of healthcare.
								</p>
							
								<div
									className="about-btn-area-2 wow fadeInUp"
									data-wow-delay=".7s"
								>
									<ButtonPrimary text={"Learn More"} url={"/about"} />
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About8;
