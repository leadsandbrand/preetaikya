import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";

const About31 = ({ type }) => {
	return (
		<section className="tj-about-section-2 section-gap section-gap-x">
		
			<div className="container  ">
				<div className="row">
				  <div className=" mb-3">		<h2	 className="big">   <span className="sub">
								
								</span>   Dementia Caregiver Upskilling & Family Support</h2></div>
		               		<div className="col-xl-6 col-lg-6 order-lg-2 order-1">
						<div className="about-content-area">
							<div className={`sec-heading ${type === 2 ? "" : "style-3"}`}>
								
                                
							     <p>  Dementia does not affect one person. It affects entire families.
									
									<br></br>
									Through free caregiver upskilling programs and structured support circles, manage behavioural changes, and care with confidence instead of fear.
									<br></br>
									<br></br>
									We are building informed communities around dementia — replacing stigma with sensitivity, and isolation with shared strength..</p>
							</div>
						</div>

						<div className="about-bottom-area">
							<div className="mission-vision-box">
							<Image 
									data-speed=".8"
									src="/images/about/project1.jpg"
									alt=""
										width={270}
									height={190}   className="about-33-img"
								/>
							</div>

							<div className="mission-vision-box">
							<Image
									data-speed=".8"
									src="/images/about/project1.jpg"
									alt=""
										width={270}
									height={190}   className="about-33-img"
								/>
							</div>
						</div>

						<div className="about-btn-area">
							<ButtonPrimary text={"DONATE NOW"} url={"/about"} />
						</div>
					</div>




					<div className="col-xl-6 col-lg-6 order-lg-2 order-1">
						
						<div className="about-img-area style-2"> 
							<div className="about-img overflow-hidden">
								<Image
									data-speed=".8"
									src="/images/about/project3.jpg"
									alt=""
									width={591}
									height={639}
								/>
							</div>
							
						</div>
					</div> 

			
				</div>
			</div>

			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</section>
	);
};

export default About31;