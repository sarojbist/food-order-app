import ResturantCard from "./ResturantCard";
import restObj from "../utils/mockData";
import React, {useState} from "react";
const Body = () => {
  // creating state variable 
  const [restObj_new, setRestObj_new] = useState(restObj);
  return (
    <div>
      {/* search bar */}
      <div>Search bar will be here</div>
      <button className="filter-btn" onClick={() => {
        // filter logic here
      let restObj_filtered= restObj.filter((item) => {
          if(item.info.avgRating > 4.2) {
            return item;
          }
         
        })
        console.log(restObj_filtered)
        setRestObj_new(restObj_filtered);
      }}>
        Apply Filter
      </button>

      {/* Resturant card - we'll use a new component */}
      <div className="resturant-cards paddings">
        {/* mapping restobj */}
        {/* we are using () instead of {} for enabling jsx */}
        {restObj_new.map((resturant, index) => (
          <ResturantCard rest={resturant} key={index} />
        ))}
      </div>
    </div>
  );
};
export default Body;
