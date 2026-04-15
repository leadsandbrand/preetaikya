"use client";

import Image from "next/image";
import Link from "next/link";
const Logo = ({ headerType, isStickyHeader }) => {
	return (
		<div className="site_logo">
			<Link className="logo" href="/">
				<Image
					src={
						(headerType === 2 ||
							headerType === 5 ||
							headerType === 7 ||
							headerType === 9) &&
						!isStickyHeader
							? "/images/logos/preet_logo1.png"
							: "/images/logos/preet_logo1.png"
					}
					alt=""
					width={544}
					height={300}
					style={{ height: "auto" }}
				/>
			</Link>
		</div>
	);
};

export default Logo;
