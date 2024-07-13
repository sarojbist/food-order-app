import { FaStar } from "react-icons/fa";
import { RES_CARD_LOGO } from "../utils/constants";

const ResturantCard = (props) => {
  //  desturing the props
  const { name, avgRating, cuisines, cloudinaryImageId } = props.rest.info;
  const { slaString } = props.rest.info.sla;
  return (
    <div className="resturant-card">
      <img src={RES_CARD_LOGO + cloudinaryImageId} />
      <h2 className="resturant-name">{name}</h2>
      <div className="resturant-info">
        <FaStar className="star-icon" />
        <span>{avgRating}</span>
        <span>●</span>
        <span>{slaString}</span>
      </div>
      <div className="resturant-type">{cuisines.join(", ")}</div>
    </div>
  );
};
export default ResturantCard;
