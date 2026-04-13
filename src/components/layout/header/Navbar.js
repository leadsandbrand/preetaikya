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

	console.log(navItems);

	return (
		<div className="menu-area d-none d-lg-inline-flex align-items-center">
			<nav id="mobile-menu" className="mainmenu">
				<ul>
					<li
						className={`has-dropdown ${
							homeNav?.isActive ? "current-menu-ancestor" : ""
						}`}
					>
						<Link href={homeNav?.path ? homeNav?.path : "#"}>
							{homeNav?.name}
						</Link>
						<ul className="sub-menu header__mega-menu mega-menu  ">
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
						</ul>
					</li>
					



					<li className={contactNav?.isActive ? "current-menu-ancestor" : ""}>
						<Link href={contactNav?.path ? contactNav?.path : "#"}>
							{contactNav?.name ? contactNav?.name : "Contact"}
						</Link>
					</li>


					<li   
  className={`${
    project?.isActive ? "current-menu-ancestor" : ""
  }`}
>
  <Link href={project?.path ? project?.path : "#"}>
    {project?.name ? project?.name : "Projects"}
  </Link>
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
  className={`${
    about?.isActive ? "current-menu-ancestor" : ""
  }`}
>
  <Link href={about?.path ? about?.path : "#"}>
    {about?.name ? about?.name : "About Us"}
  </Link>
</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
