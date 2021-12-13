import { PlaceholderCard } from "components/NewPlaces/PlaceholderCard/PlaceholderCard";
import React from "react";
// import { useAPI } from "features/context/APIContext";

export const EatOutPage = () => {
  // const [data, getData] = useAPI();
  // useEffect(() => {
  //   getData("userData", "restaurants");
  // }, []); // eslint-disable-line

  return (
    <div>
      <PlaceholderCard />
    </div>
  );
};

// return (

//   <>

//     <section className={styles.dashboardSection}>
//       <HelloWidget />
//     </section>
//     <section>
//       <ReservationsWidget />
//     <section className={styles.dashboardSection}>
//       <ReservationsWidget data={data} />
//     </section>
//     <section className={styles.dashboardSection}>
//       <EatOutSection data={data} />
//     </section>
//   </>
// );
// };
