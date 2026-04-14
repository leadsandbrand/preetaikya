import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
const About3 = ({ type }) => {
	return (
		<section className="tj-about-section-2 section-gap section-gap-x about-3">
			<div className="container">
				<div className="row">
					<div className="col-xl-6 col-lg-6 order-lg-1 order-2">
						<div
							className="about-1 style-2 wow fadeInLeft "
							data-wow-delay=".3s"
						>
							<div className="about-img overflow-hidden">
								<Image
									data-speed=".8"
									src="/images/about/about-5.webp"
									alt=""
									width={591}
									height={639}
								/>
							</div>
							<div className={`box-area ${type === 2 ? "style-2" : ""}`}>
								<div className="progress-box wow fadeInUp" data-wow-delay=".3s">
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
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 order-lg-2 order-1">
						<div className="about-content-area">
							<div className={`sec-heading ${type === 2 ? "" : "style-3"}`}>
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Get to Know Us
								</span>
								<h2 className="sec-title title-anim">
									{type === 2 ? (
										<>
											Driving Innovation and Excellence for Sustainable
											Corporate Success <span>Worldwide.</span>
										</>
									) : (
										"Welcome to the heart of Aikya Foundation"
									)}
								</h2>
							</div>
						</div >
						<div >

						<p  className="about-content-area">  	At the heart of Preet Aikya Foundation’s efforts lies a profound legacy of love, compassion and virtue, initiated by the late Smt Preeti Bhandari. Her indomitable spirit serves as an enduring source of inspiration to the Foundation.

							Our journey began in February 2017 when Deepak Bhandari, the founder and driving force behind Preet Aikya Foundation, embarked on a mission to plant more trees. To him, each new sapling symbolises the enduring spirit of his beloved wife Preeti, and serves as a poignant reminder of the cherished moments they shared.

							Initially incorporated as a charity trust in 2018, Preet Aikya Foundation is now a registered Section 8 not-for-profit company. We are driven by a sense of compassion and a relentless commitment to creating a brighter future for all. Our charitable endeavours encompass a wide range of programmes, each centred around causes that resonate deeply with our values and aspirations.

							Our dedication to fostering positive change extends to various domains – from environmental conservation to social welfare and educational empowerment. At Preet Aikya Foundation, we believe in the power of unity and collective effort to uplift communities, protect our planet, and inspire generations to come.

							Join us on this meaningful journey toward a world enriched by empathy, sustainability and enduring compassion. Together, we can shape a better future for all.</p>
						</div>



						{/* <div className="about-bottom-area">
							<div
								className="mission-vision-box wow fadeInLeft"
								data-wow-delay=".5s"
							>
								<h4 className="title">Our Mission</h4>
								<p className="desc">
									our mission is empower businesses through innovate best
									solution, exceptional service.
								</p>
								<ul className="list-items">
									<li>
										<i className="tji-list"></i>Innovation & Excellence
									</li>
									<li>
										<i className="tji-list"></i>Exceptional Customer
									</li>
									<li>
										<i className="tji-list"></i>Business Growth
									</li>
								</ul>
							</div>
							<div
								className="mission-vision-box wow fadeInRight"
								data-wow-delay=".5s"
							>
								<h4 className="title">Our Vision</h4>
								<p className="desc">
									Our vision is to become a global leader in providing
									transformative business solutions.
								</p>
								<ul className="list-items">
									<li>
										<i className="tji-list"></i>Global Leadership
									</li>
									<li>
										<i className="tji-list"></i>Transformative Impact
									</li>
									<li>
										<i className="tji-list"></i>Sustainable Success
									</li>
								</ul>
							</div>
						</div> */}




						<div className="about-btn-area wow fadeInUp" data-wow-delay=".5s">
							<ButtonPrimary text={"Learn More About Us"} url={"/about"} />
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

export default About3;
