import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Ratings1 from "@/components/shared/ratings/Ratings1";
import Image from "next/image";
import Link from "next/link";
const About113 = () => {
	return (
		<section className="tj-about-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-xl-6 col-lg-6 order-lg-2 order-1">
						<div
							className={`about-1 wow fadeInLeft`}
							data-wow-delay=".2s"
						>
							<div className="about-img overflow-hidden">
								<Image
									data-speed="0.8"
									src="/images/about/slumschool2.jpg"
									alt=""
									width={653}
									height={675}
								/>
							</div>
							<div className="box-area-111">
								<div
									className="experience-box-111 wow fadeInUp"
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



					<div className="col-xl-6 col-lg-6 order-lg-1 order-2">
						<div
							className={`about-content-area style-1 wow fadeInLeft`}
							data-wow-delay=".2s"
						>
							<div className="sec-heading">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Food For Life
								</span>
								<h2 className="sec-title title-anim">
								Organ & Body
								<br/>
								Donation Awareness{" "}
									{/* <span>Success.</span> */}
								</h2>
								<br></br>
								<p className="about-1">In partnership with Kiran Foundation, we actively promote organ and body donation through awareness drives, public pledges, and healthcare collaborations.

One donor can save multiple lives.

It is liberation.

Even in farewell, love can continue.

Pledge to Donate. Give the gift of life.</p>
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
							
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About113;
