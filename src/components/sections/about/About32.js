import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";

const About32 = ({ type }) => {
	return (
		<section className="tj-about-section-2 section-gap section-gap-x">
			<div className="container  ">
				<div className="row">
				
				  <div className=" mb-3">		<h2 className="hello"	>   <span className="big">
				  Girl Child Education :
								</span>   Empowering Futures through Education and Creativity</h2></div>
		
					<div className="col-xl-6 col-lg-6 order-lg-1 order-2">
						
						<div className="about-img-area style-2"> 
							<div className="about-img overflow-hidden">
								<Image
									data-speed=".8"
									src="/images/about/slumschool.jpg"
									alt=""
									width={591}
									height={400} 
								/>
							</div>
							{/* <div className={`box-area ${type === 2 ? "style-2" : ""}`}>
								<div className="progress-box">
									<h4 className="title">Business Progress</h4>
									<ul className="tj-progress-list">
										<li>
											<h6 className="tj-progress-title">Revenue</h6>
											<div className="tj-progress">
												<span className="tj-progress-percent">82%</span>
												<div
													className="tj-progress-bar"
													data-percent="82"
												></div>
											</div>
										</li>
										<li>
											<h6 className="tj-progress-title">Satisfaction</h6>
											<div className="tj-progress">
												<span className="tj-progress-percent">90%</span>
												<div
													className="tj-progress-bar"
													data-percent="90"
												></div>
											</div>
										</li>
									</ul>
								</div>
							</div> */}
						</div>
					</div>

					<div className="col-xl-6 col-lg-6 order-lg-2 order-1">
						<div className="about-content-area">
							<div className={`sec-heading ${type === 2 ? "" : "style-3"}`}>
								
                                
							     <p> We sponsor the complete education of girls, especially those who have lost a parent — ensuring that tragedy does not define their future.
									<br></br>
									
									Education is not charity.

									It is liberation.

									<br></br> 
									We also nurture creativity through school partnerships, scholarships, arts initiatives, and talent recognition programs — building confident, expressive, empowered young citizens.
									</p>
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
									src="/images/about/school2.jpg"
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

export default About32;