export const addRestaurantRatings = (data) => {
  let ratings = [];
  const initRestaurants = data.restaurants;
  for (let restaurant of initRestaurants) {
    let rating = 0;
    let ratingSum = 0;
    if (restaurant.reviews && restaurant.reviews.length) {
      for (let review of restaurant.reviews) {
        ratingSum += review.rating;
      }
      rating = Math.round((ratingSum / restaurant.reviews.length) * 10) / 10;
    }
    ratings.push(rating);
  }
  const restaurants = initRestaurants.map((restaurant, index) => {
    return { ...restaurant, rating: ratings[index] };
  });
  return restaurants;
};
