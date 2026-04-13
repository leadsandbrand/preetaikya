import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import { FaRegSmile, FaSmile } from "react-icons/fa";
import Link from "next/link";
import { FaLeaf, FaFemale } from "react-icons/fa";
const Cta = () => {
	return (
		<section className="tj-cta-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="cta-area">
							<div className="cta-content">
   

         
							<div className="cta-item">
      <div className="cta-value">
         
         <p  className=" volunteer"> 
			<br></br>
			"Your hands our impact"</p>
		 <div>  <div className="hover-content">
  <Link href="/donate" className="h10-service-btn">
  <span className="h10-service-btn-text"> Become volunteer</span>
  <span className="h10-service-btn-icon">↗</span>
</Link>
  </div> </div>
		
		</div>
		
  
</div>

    

							</div>
							<div className="cta-img">
								<img src="/images/cta/become_a_volunteers.jpg " alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cta;
