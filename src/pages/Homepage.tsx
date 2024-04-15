import { FunctionComponent, useState, useCallback} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import HeroContainer from "../components/HeroContainer";
import SearchSectionHeader from "../components/SearchSectionHeader";
import ListingItem from "../components/ListingItem";
import Footer from "../components/Footer";
import styles from "./Homepage.module.css";
import CardList from "../components/CardList";

const Homepage = () => {
  const navigate = useNavigate();

  const onListingItemContainerClick = useCallback(() => {
    navigate("/property-details");
  }, [navigate]);

  const [showAll, setShowAll] = useState(false)

  const onShowMoreButtonClick = useCallback(() => {
    if (!showAll) {
      setShowAll(true)
    } else {
      setShowAll(false)
    }
  }, []);

  return (
    <div className={styles.homepage}>
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection
      />
      <HeroContainer />
      <main className={styles.staysSection}>
        <SearchSectionHeader />
        <CardList showAll={showAll}/>
        
        <button
          className={styles.showMoreButton}
          onClick={onShowMoreButtonClick}
        >
          <div className={styles.showMoreText}>Show more</div>
        </button>
      </main>
      <Footer />
      <div className={styles.band}>
        <div className={styles.dataDispenser}>
          <div className={styles.dataCombiner}>
            <div className={styles.localhostIncAll}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.dataMerger}>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div
                className={styles.termsConditions}
              >{`Terms & Conditions`}</div>
              <div className={styles.contactUs}>Contact us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
