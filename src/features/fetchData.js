const endpoints = {
  userData:
    "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/userData.json",
  categories:
    "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/categories.json",
  devices:
    "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/devices.json",
  books:
    "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/books.json",
  rooms:
    "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/rooms.json",
  weather:
    "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/weather.json",
  restaurants:
    "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/restaurants.json",
  stories:
    "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/stories.json",
};

function fetchData(endpointNames) {
  const apiData = {};
  endpointNames.forEach(async (e) => {
    const returnedData = await fetch(endpoints[e]).then((response) =>
      response.json()
    );
    Object.assign(apiData, returnedData);
  });
  return apiData;
}

export default fetchData;
