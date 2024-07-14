import ResturantCard from "./ResturantCard";
import restObj from "../utils/mockData";
import React, {useState, useEffect} from "react";
const Body = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.486463086305346&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }
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
