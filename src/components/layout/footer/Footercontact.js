import Link from "next/link";

const Footercontact = () => {
	return (
		<footer className="tj-footer-section-contact-us  footer-1 section-gap-x">
				{/* here is wow animation  which i had removed  wow fadeInUp */}
			<div className="footer-main-area">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="footer-widget ">
								<div className="footer-logo">
									<Link href="/">
										<img src="/images/logos/logo-2.Webp" alt="Logos" />
									</Link>
								</div>
								<div className="footer-text">
									<p>
									A -163, Mahakali Society,<br></br> Trilanga, Bhopal 462016
									</p>
								</div>
							
							</div>
						</div> 
						  

						{/* here is wow animation  which i had removed  wow fadeInUp */}
						<div className="col-xl-3 col-lg-4 col-md-6">  
					
							<div
								className="footer-widget widget-nav-menu"
								data-wow-delay=".3s"
							>
								<h5 className="title">Important Links</h5>
								<ul>
									<li>
										<Link href="/services/1">Privacy Policy</Link>
									</li>
									<li>
										<Link href="/services/2">Terms and Conditions</Link>
									</li>
									<li>
										<Link href="/services/3">Disclaimer</Link>
									</li>
									<li>
										<Link href="/services/4">Training Program</Link>
									</li>
									<li>
										<Link href="/services/5">Cancellations / Refunds</Link>
									</li>
									
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-lg-4 col-md-6">
							<div  
							    // here is also wow fadeInUp  animation
								className="footer-widget widget-nav-menu"
								data-wow-delay=".5s"
							>
								<h5 className="title">Useful Links</h5>
								<ul>
									<li>
										<Link href="/contact">HOME</Link>
									</li>
									<li>
										<Link href="/team">About</Link>
									</li>
									<li>
										<Link href="#">Project</Link>
									</li>
									<li>
										<Link href="/careers">
										Contact <span className="badge"></span>
										</Link>
									</li>
									<li>
										<Link href="/blogs">Campaigns</Link>
									</li>
									{/* <li>
										<Link href="#">Feedback</Link>
									</li> */}
								</ul>
							</div>
						</div>
						<div className="col-xl-4 col-lg-5 col-md-6">
								{/* here is wow animation  which i had removed  wow fadeInUp */}
							<div

								className="footer-widget widget-subscribe "
								data-wow-delay=".7s"
							>
								<h3 className="title">Subscribe Us</h3>
								<div className="subscribe-form">
									<form action="#">
										<input
											type="email"
											name="email"
											placeholder="Enter email"
										/>
										<button type="submit">
											<i className="tji-plane"></i>
										</button>
										<label htmlFor="agree">
											<input id="agree" type="checkbox" />
											Agree to our{" "}
											<Link href="/terms-and-conditions">
												Terms & Condition?
											</Link>
										</label>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="tj-copyright-area">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area">
								<div className="footer-contact">
									<ul>
										<li>
											<Link href="tel:10095447818">
												<span className="icon">
													<i className="tji-phone-2"></i>
												</span>
												<span className="text"> +91 9630539366</span>
											</Link>
										</li>
										<li>
											<Link href="mailto:info@bexon.com">
												<span className="icon">
													<i className="tji-envelop-2"></i>
												</span>
												<span className="text"> connect@preetaikya.org</span>
											</Link>
										</li>
									</ul>
								</div>
								<div className="social-links">
									<ul>
										<li>
											<Link href="https://www.facebook.com/" target="_blank">
												<i className="fa-brands fa-facebook-f"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.instagram.com/" target="_blank">
												<i className="fa-brands fa-instagram"></i>
											</Link>
										</li>
										<li>
											<Link href="https://x.com/" target="_blank">
												<i className="fa-brands fa-x-twitter"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.linkedin.com/" target="_blank">
												<i className="fa-brands fa-linkedin-in"></i>
											</Link>
										</li>
									</ul>
								</div>
								<div className="copyright-text">
									<p>
									Copyright ©2024 Deepak Pushkarmal Bhandari. All Rights Reserved 
										{/* <Link
											href="https://themeforest.net/user/theme-junction/portfolio"
											target="_blank"
										>
											Bexon
										</Link>{" "}
										All right reserved */}
									</p>
								</div>
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
		</footer>
	);
};

export default Footercontact;
