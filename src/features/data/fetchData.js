import { endpoints } from "./endpoints";

export async function fetchData() {
  const args = Array.from(arguments);
  const requestData = await Promise.all(
    args.map((e) => fetch(endpoints[e]).then((response) => response.json()))
  );
  const formattedData = {};
  requestData.forEach((i) => {
    Object.assign(formattedData, i);
  });
  return formattedData;
}

export default fetchData;
