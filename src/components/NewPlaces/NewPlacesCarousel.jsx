// import React, { useState } from "react";
// import { NewPlaces } from "./NewPlaces";
// import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

// export const NewPlacesSlider = () => {
//   const [sliderRef, setSliderRef] = useState(null);

//   const sliderSettings = {
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     infinite: false,
//     dots: true,
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={sliderRef?.slickPrev}>prev</button>
//         <button onClick={sliderRef?.slickNext}>next</button>
//       </div>
//       <Slider ref={setSliderRef} {...sliderSettings}>
//         {restaurants?.map((item, index) => (
//           <div key={item.name}>
//             <div>{item.name}</div>
//             <div>{item.image}</div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };
