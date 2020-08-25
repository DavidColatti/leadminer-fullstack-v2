import React from "react";
import { useQuery } from "@apollo/client";
import { GET_LEADSCOUNT } from "../../graphql/queries";
import styles from "./landingpage.module.scss";
import landingGuy from "../../assets/images/landing-guy-icon.png";

const LandingPage = () => {
  const { data } = useQuery(GET_LEADSCOUNT);

  return (
    <div className={styles.landing}>
      <div className={styles.landingCenter}>
        <div className={styles.landingHeading}>
          <h1 className={styles.landingName}>LeadMiner</h1>
          <i className={styles.landingQuote}>" good leads, easy sales "</i>
        </div>
        <img
          alt="Man with laptop"
          className={styles.landingIconGuy}
          src={landingGuy}
        />
      </div>

      <div className={styles.landingFeatureGroup}>
        <section className={styles.landingFeature}>
          <h2>{`${data ? data.leadsCount : ""} Fresh Leads`}</h2>
          <p>
            Our software is created to mine small business information that is
            brand new, with little to no web-presence.
          </p>
        </section>

        <section className={styles.landingFeature}>
          <h2>Close Deals</h2>
          <p>
            With having a consistent pipeline of new leads coming in, you'll
            find yourself generating more revenue and closing more deals!
          </p>
        </section>

        <section className={styles.landingFeature}>
          <h2>Retain Clients</h2>
          <p>
            LeadMiner will let you become more organized with your workload and
            let you increase client retention by keeping notes and following up
            to client requests.
          </p>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
