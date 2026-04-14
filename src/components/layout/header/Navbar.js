import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import useActiveLink from "@/hooks/useActiveLink";
import getNavItems from "@/libs/getNavItems";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ headerType, isStickyHeader }) => {
	const makeActiveLink = useActiveLink();
	const navItems = getNavItems();
	const homeNav = makeActiveLink(navItems[0]);
	
	const contactNav = makeActiveLink(navItems[1]);
	const project=makeActiveLink(navItems[2]);
	const campaign =makeActiveLink(navItems[3])
	const about = makeActiveLink(navItems[4]);
    const licence = makeActiveLink(navItems[5]);
	

	return (
		<div className="menu-area d-none d-lg-inline-flex align-items-center">
			<nav id="mobile-menu" className="mainmenu">
				<ul>
					<li
						className={` ${
							homeNav?.isActive ? "current-menu-ancestor" : ""
						}`}
					>  
						<Link href={homeNav?.path ? homeNav?.path : "#"}>
							{homeNav?.name}
						</Link>
						{/* <ul className="sub-menu header__mega-menu mega-menu  ">
							<li>
								<div className="mega-menu-wrapper">
									<div className="container-fluid gap-60-25">
										<div className="row">
											{homeNav?.submenu?.length
												? homeNav?.submenu?.map((item, idx) => (
														<div key={idx} className="col-xl-3 col-lg-3 col-12">
															<div
																className={`tj-demo-thumb ${
																	item?.isComming ? "coming" : ""
																}`}
															>
																<div className="image">
																	<Image
																		src={
																			item?.img
																				? item?.img
																				: "/images/header/demo/home-1.webp"
																		}
																		alt=""
																		width={570}
																		height={434}
																	/>
																	{item?.badge ? (
																		<span className="tj-demo-badge tj-zoom-in-out-anim">
																			{item?.badge}
																		</span>
																	) : (
																		""
																	)}
																	{!item?.isComming ? (
																		<div className="tj-demo-button">
																			<ButtonPrimary
																				text={"View demo"}
																				url={item?.path}
																				className={"header_btn"}
																			/>
																		</div>
																	) : (
																		""
																	)}
																</div>
																<h6 className="tj-demo-title">
																	{item?.isComming ? (
																		item?.name
																	) : (
																		<Link href={item?.path ? item?.path : "#"}>
																			{item?.name}
																		</Link>
																	)}
																</h6>
															</div>
														</div>
												  ))
												: ""}
										</div>
									</div>
								</div>
							</li>
						</ul> */}
					</li>
					
  
					<li
  className={`has-dropdown ${
    about?.isActive ? "current-menu-ancestor" : ""
  }`}
>
  <Link href={about?.path ? about?.path : "#"}>
    {about?.name ? about?.name : "About Us"}
  </Link>

  <ul className="dropdown">
    <li><a href="#">Guiding Spirit</a></li>
    <li><a href="#">About us</a></li>
    <li><a href="#">Group Ventures</a></li>
  </ul>
</li>

<li
  className={`${
    licence?.isActive ? "current-menu-ancestor" : ""
  }`}
>
  <Link href={licence?.path ? licence?.path : "#"}>
    {licence?.name ? licence?.name : "Licence"}
  </Link>
</li>
				
<li
  className={`has-dropdown ${
    project?.isActive ? "current-menu-ancestor" : ""
  }`}
>
  <Link href={project?.path || "#"}>
    {project?.name || "Projects"}
  </Link>

  <ul className="dropdown">
    <li><a href="#food-for-life">Food for Life</a></li>
    <li><a href="#green-earth">Green Earth</a></li>
    <li><a href="#girl-child">Girl Child Education</a></li>
  </ul>
</li>


<li
  className={`${
    campaign?.isActive ? "current-menu-ancestor" : ""
  }`}
>
  <Link href={campaign?.path ? campaign?.path : "#"}>
    {campaign?.name ? campaign?.name : "Campaign"}
  </Link>
</li>


  


<li
  className={`has-dropdown ${
    contactNav?.isActive ? "current-menu-ancestor" : ""
  }`}
>
  <Link href={contactNav?.path ? contactNav?.path : "#"}>
    {contactNav?.name ? contactNav?.name : "Contact"}
  </Link>

  <ul className="dropdown">
    <li><a href="#contact-us">Corporate Office</a></li>
    <li><a href="#contact-us">Contact Coordinates</a></li>
  </ul>
</li>

				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
