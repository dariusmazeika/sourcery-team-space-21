import { endpoints } from "./endpoints";
import { addRestaurantRatings } from "./addRestaurantRatings";

async function fetchData(endpointNames) {
  const requestData = await Promise.all(
    endpointNames.map((e) =>
      fetch(endpoints[e]).then((response) => response.json())
    )
  );
  const formattedData = {};
  requestData.forEach((i) => {
    if (i.restaurants) {
      i = { restaurants: addRestaurantRatings(i) };
    }
    Object.assign(formattedData, i);
  });
  return formattedData;
}

export default fetchData;
