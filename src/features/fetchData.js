const endpoints = [
  "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/userData.json",
  "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/weather.json",
  "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/restaurants.json",
  "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/stories.json",
];

const fetchData = async () => {
  const requestData = await Promise.all(
    endpoints.map((url) => fetch(url).then((response) => response.json()))
  );
  return formatData(requestData);
};

const formatData = (apiData) => {
  const formattedData = {};
  apiData.forEach((e) => Object.assign(formattedData, e));
  return formattedData;
};

export default fetchData;
