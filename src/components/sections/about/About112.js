import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Ratings1 from "@/components/shared/ratings/Ratings1";
import Image from "next/image";
import Link from "next/link";
const About112 = () => {
	return (
		<section  id="food-for-life" className="tj-about-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-xl-6 col-lg-6 order-lg-1 order-2">
						<div
							className={`about-1 wow fadeInLeft`}
							data-wow-delay=".2s"
						>
							<div className="about-img overflow-hidden">
								<Image
									data-speed="0.8"
									src="/images/about/project1.jpg"
									alt=""
									width={653}
									height={675}
								/>
							</div>
							<div className="box-area">
								<div
									className="experience-box wow fadeInUp"
									data-wow-delay=".3s"
								>
									<span className="sub-title">Experiences</span>
									<div className="customers-number">13+</div>
									<h6 className="customers-text">
										Decades of Experience, Endless Innovation
									</h6>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 order-lg-2 order-1">
						<div
							className={`about-content-area style-1 wow fadeInLeft`}
							data-wow-delay=".2s"
						>
							<div className="sec-heading">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Food For Life
								</span>
								<h2 className="sec-title title-anim">
								Dementia Caregiver Upskilling & Family Support
									{" "}
									{/* <span>Success.</span> */}
								</h2>
								<br></br>
								<p className="about-1">Dementia does not affect one person. It affects entire families.

								Through free caregiver upskilling programs and structured support circles, we help families understand memory disorders, manage behavioural changes, and care with confidence instead of fear.

We are building informed communities around dementia — replacing stigma with sensitivity, and isolation with shared strength.

Because no caregiver should feel alone.</p>
							</div>
							{/* <div className="wow fadeInUp  about1-button" data-wow-delay=".5s "  >
								<ButtonPrimary
									text={"Donate Now"}
									url={"/about"}
									isTextBtn={true}
								
								/>
							</div> */}
							 <div className="about1-button wow fadeInUp" data-wow-delay=".5s">
							<ButtonPrimary text={"Donate Now"} url={"/about"} />
						</div>
						</div>
						<div className=" about-bottom-area">
							<div
								className="client-review-cont wow fadeInUp"
								data-wow-delay=".7s"
							>
								<Image
									src="/images/about/project3.jpg"
									alt=""
									width={300}
									height={166}
									className="img-bottom"
								/>
								
							</div>
							<div className="video-img  wow fadeInUp" data-wow-delay=".9s">
								<Image
									src="/images/about/project3.jpg"
									alt=""
									width={224}
									height={234}
								/>
								{/* <PopupVideo>
									<Link
										className="video-btn video-popup glightbox"
										href="https://www.youtube.com/watch?v=MLpWrANjFbI&amp;ab_channel=eidelchteinadvogados"
									>
										<span>
											<i className="tji-play"></i>
										</span>
									</Link>
								</PopupVideo> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About112;
