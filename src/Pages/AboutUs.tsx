import React from "react";
import styles from "./AboutUs.module.css";
import Wrapper from "../UI/Wrapper";

/* Images */
import commitment from "../assets/about/mobile/image-commitment.jpg";
import quality from "../assets/about/mobile/image-quality.jpg";
import uk from "../assets/about/desktop/illustration-uk.svg";
import canada from "../assets/about/desktop/illustration-canada.svg";
import australia from "../assets/about/desktop/illustration-australia.svg";

/* Desktop Images */
import lgCommitment from "../assets/about/desktop/image-commitment.jpg";
import lgQuality from "../assets/about/desktop/image-quality.jpg";
import mdCommitment from "../assets/about/tablet/image-commitment.jpg";
import mdQuality from "../assets/about/tablet/image-quality.jpg";

export default function AboutUs() {
  return (
    <>
      <main>
        <Wrapper>
          <section className={styles.aboutUsHeroContainer}>
            <h1 className={styles.aboutUsHeroTitle}>About Us</h1>
            <p className={styles.aboutUsHeroText}>
              Coffeeroasters began its journey of exotic discovery in 1999,
              highlighting stories of coffee from around the world. We have
              since been dedicated to bring the perfect cup - from bean to brew
              - in every shipment.
            </p>
          </section>

          <section className={styles.ourCommitmentContainer}>
            <picture className={styles.ourCommitmentImage}>
              <source srcSet={lgCommitment} media="(min-width: 1200px)" />
              <source srcSet={mdCommitment} media="(min-width: 600px)" />
              <img
                className={styles.ourCommitmentImage}
                src={commitment}
                alt="picture of a guy pouring coffee"
              />
            </picture>
            <div className={styles.ourCommitmentContent}>
              <h1 className={styles.ourCommitmentTitle}>Our commitment</h1>
              <p>
                We’re built on a simple mission and a commitment to doing good
                along the way. We want to make it easy for you to discover and
                brew the world’s best coffee at home. It all starts at the
                source. To locate the specific lots we want to purchase, we
                travel nearly 60 days a year trying to understand the challenges
                and opportunities in each of these places. We collaborate with
                exceptional coffee growers and empower a global community of
                farmers through with well above fair-trade benchmarks. We also
                offer training, support farm community initiatives, and invest
                in coffee plant science. Curating only the finest blends, we
                roast each lot to highlight tasting profiles distinctive to
                their native growing region.
              </p>
            </div>
          </section>

          <section className={styles.qualityContainer}>
            <div className={styles.qualityImageWrapper}>
              <picture className={styles.qualityImageLg}>
                <source srcSet={lgQuality} media="(min-width: 1200px)" />
                <source srcSet={mdQuality} media="(min-width: 600px)" />
                <img
                  className={styles.qualityImage}
                  src={quality}
                  alt="image of coffee"
                />
              </picture>
            </div>
            <div className={styles.qualityContentWrapper}>
              <h1 className={styles.qualityTitle}>Uncomprimising quality</h1>
              <p>
                Although we work with growers who pay close attention to all
                stages of harvest and processing, we employ, on our end, a
                rigorous quality control program to avoid over-roasting or
                baking the coffee dry. Every bag of coffee is tagged with a
                roast date and batch number. Our goal is to roast consistent,
                user-friendly coffee, so that brewing is easy and enjoyable.
              </p>
            </div>
          </section>

          <section className={styles.hqContainer}>
            <h1 className={styles.hqTitle}>Our headquarters</h1>
            <div className={styles.countryWrapper}>
              <img
                className={styles.mapImages}
                src={uk}
                alt="image of UK map"
              />
              <h2 className={styles.countryTitle}>United Kingdom</h2>
              <p>
                68 Asfordby Rd
                <br />
                Alcaston
                <br />
                SY6 1YA
                <br />
                +44 1241 918425
              </p>
            </div>
            <div className={styles.countryWrapper}>
              <img
                className={styles.mapImages}
                src={canada}
                alt="image of Canada map"
              />
              <h2 className={styles.countryTitle}>Canada</h2>
              <p>
                1528 Eglinton Avenue
                <br />
                Toronto
                <br />
                Ontario M4P 1A6
                <br />
                +1 416 485 2997
              </p>
            </div>
            <div className={styles.countryWrapper}>
              <img
                className={styles.mapImages}
                src={australia}
                alt="image of Australia map"
              />
              <h2 className={styles.countryTitle}>Australia</h2>
              <p>
                36 Swanston Street
                <br />
                Kewell
                <br />
                Victoria
                <br />
                +61 4 9928 3629
              </p>
            </div>
          </section>
        </Wrapper>
      </main>
    </>
  );
}
