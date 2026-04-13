import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const About9 = () => {
	return (
	  <section className="h10-about section-gap">
		<div className="container">
		  <div className="row flex-column-reverse flex-md-row">
  
			{/* IMAGE (Desktop only) */}
			<div className="col-12 col-lg-4 d-block d-md-none d-lg-block">
			  <div
				className="about-img-area h10-about-banner wow bounceInLeft"
				data-wow-delay=".3s"
			  >
				<div className="about-img overflow-hidden">
				  <img
					data-speed=".8"
					src="/images/about/h10-about-banner.webp"
					alt="about"
				  />
				</div>
			  </div>
			</div>
  
			{/* TEXT SECTION */}
			<div className="col-12 col-lg-8">
			  <div className="h10-about-content-wrapper">
  
				{/* Heading */}
				<div className="sec-heading style-3">
				  <span
					className="sub-title wow fadeInUp"
					data-wow-delay=".3s"
				  >
					<i className="tji-box"></i> ABOUT OUR FOUNDATION
				  </span>
  
				  <h2
					className="sec-title title-highlight wow fadeInUp"
					data-wow-delay=".3s"
				  >
					Preet Aikya Foundation
				  </h2>
				</div>
  
				<div className="row">
  
				  {/* MOBILE IMAGE */}
				  <div className="col-12 col-md-6 d-none d-md-block d-lg-none">
					<div
					  className="about-img-area h10-about-banner wow bounceInLeft"
					  data-wow-delay=".3s"
					>
					  <div className="about-img">
						<img
						  src="/images/about/h10-about-banner.webp"
						  alt="about"
						/>
					  </div>
					</div>
				  </div>
  
				  {/* TEXT CONTENT */}
				  <div className="col-12 col-md-6 col-lg-12">
					<div className="h10-about-content">
					  <p
						className="desc wow fadeInUp"
						data-wow-delay=".4s"
					  >
						Founded in the sacred memory of{" "}
						<strong>Smt. Preeti Deepak Bhandari</strong>, whose life
						embodied grace, compassion, and silent strength,
						<strong> Preet Aikya Foundation</strong> is not just an
						organization — it is love in action.
						<br /><br />
  
						What began in 2016 with the planting of a single tree in her
						memory has grown into a living movement of service. Led by{" "}
						<strong>Deepak Bhandari</strong>, and formally registered
						as a <strong>Section 8 nonprofit company in 2018</strong>,
						the Foundation carries forward a deeply personal promise:
						<br /><br />
  
						<em>
						  To serve humanity with compassion, unity, and purpose —
						  creating meaningful impact in the lives of those who need
						  it most.
						</em>
					  </p>
					  <ButtonPrimary   text="Donate" />
					</div>
				  </div>
  
				</div>
			  </div>
			</div>
  
		  </div>
		</div>
	  </section>
	);
  };
  
  export default About9;