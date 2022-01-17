import { endpoints } from "./endpoints";
import { processRestaurantData } from "utils";
import { toast } from "react-toastify";

async function fetchData(endpointNames) {
  const promises = endpointNames.map((e) =>
    fetch(endpoints[e]).then((response) => response.json())
  );

  const requestData = await Promise.all(
    promises.map((p) =>
      p.catch((e) => {
        toast.error(`${e}`, { theme: "colored" });
        return e;
      })
    )
  );
  const validData = requestData.filter((data) => !(data instanceof Error));

  const hasError = validData.length < requestData.length;

  const formattedData = {};

  requestData.forEach((i) => {
    Object.assign(formattedData, i);
  });

  const processedData = processRestaurantData(formattedData);
  return { data: processedData, hasError: hasError };
}

export default fetchData;
