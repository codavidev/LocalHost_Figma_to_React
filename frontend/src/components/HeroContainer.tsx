import { FunctionComponent } from "react";
import DateTimeContainer from "./Frame 37";
import styles from "./HeroContainer.module.css";

const HeroContainer: FunctionComponent = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.errorHandler}>
        <div className={styles.logManager}>
          <div className={styles.findAHostForEveryJourneyParent}>
            <b className={styles.findAHostContainer}>
              <span>{`Find a `}</span>
              <span className={styles.host}>host</span>
              <span> for every journey</span>
            </b>
            <h3 className={styles.discoverTheBest}>
              Discover the best local rental properties that fits your every
              travel needs
            </h3>
          </div>
          <div className={styles.form}>
            <div className={styles.autocompletebasic}>
              <input
                className={styles.branchlet}
                placeholder="Accommodation"
                type="text"
              />
              <img className={styles.iconhome} alt="" src="/iconhome.svg" />
            </div>
            <div className={styles.grouped}>
              <DateTimeContainer />
              <DateTimeContainer />
              <div className={styles.labelParent}>
                <input
                  className={styles.label}
                  placeholder="Guest"
                  type="text"
                />
                <img className={styles.iconuser} alt="" src="/iconuser.svg" />
              </div>
            </div>
            <button className={styles.searchButton}>
              <img className={styles.iconsearch} alt="" src="/iconsearch.svg" />
              <div className={styles.button}>Search</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
