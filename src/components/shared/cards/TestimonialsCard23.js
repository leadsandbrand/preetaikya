import Image from "next/image";
import ButtonPrimary from "../buttons/ButtonPrimary";

const TestimonialsCard23 = ({ testimonial }) => {
	const { authorName, authorDesig, desc3, img, logoImg, logoImgLight } =
		testimonial ? testimonial : {};
	return (
		<div className="testimonial-item">
			<span className="quote-icon">
				<i className="tji-quote"></i>
			</span>
			<div className="desc">
				<p>{desc3}</p>
			</div>
         
		
			<div className="testimonial-author">

			<ButtonPrimary   text={"Donate Now"}   />
				<div className="author-inner">
					<div className="author-img">

						
						{/* <Image
							src={img ? img : "/images/testimonial/client-1.webp"}
							alt="Images"
							width={89}
							height={89}
							style={{ height: "auto" }}
						/> */}
					</div>
					{/* <div className="author-header">
						<h4 className="title">{authorName}</h4>
						<span className="designation">{authorDesig}</span>
					</div> */}
					
				</div>
			</div>
		</div>
	);
};

export default TestimonialsCard23;
