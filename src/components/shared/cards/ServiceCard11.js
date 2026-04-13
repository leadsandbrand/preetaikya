import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";
import Image from "next/image";
import ButtonPrimary from "../buttons/ButtonPrimary";

const ServiceCard11 = ({ service, idx, lastItemIdx }) => {
  const {
    title,
    id,
    img4,
    iconName,
  } = service || {};
  
  return (


<div className="service-item style-4">
<h6 className="h10-service-sln">{title}.</h6>

  {/* IMAGE */}
  <div className="image-wrapper">
    <Image
      src={img4 || "/images/service/default.jpg"}
      alt={title}
      fill
      className="object-cover"
    />
  </div>
      


  {/* HOVER CONTENT */}
  <div className="hover-content">
  <Link href="/donate" className="h10-service-btn">
  <span className="h10-service-btn-text">Donate</span>
  <span className="h10-service-btn-icon">↗</span>
</Link>
  </div>

</div>
  );
};

export default ServiceCard11;