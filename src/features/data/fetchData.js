import { endpoints } from "./endpoints";

async function fetchData(endpointNames) {
  const requestData = await Promise.all(
    endpointNames.map((e) =>
      fetch(endpoints[e]).then((response) => response.json())
    )
  );
  const formattedData = {};
  requestData.forEach((i) => {
    Object.assign(formattedData, i);
  });
  return formattedData;
}

export default fetchData;
