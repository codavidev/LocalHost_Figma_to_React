import { FunctionComponent } from "react";
import styles from "./ListingCard.module.css";

const ListingCard: FunctionComponent = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.siblingEdgeParent}>
        <img
          className={styles.siblingEdgeIcon}
          loading="lazy"
          alt=""
          src="/frame-9@2x.png"
        />
        <div className={styles.ancestorEdge}>
          <img
            className={styles.ancestorEdgeChild}
            loading="lazy"
            alt=""
            src="/frame-46@2x.png"
          />
          <img
            className={styles.ancestorEdgeItem}
            loading="lazy"
            alt=""
            src="/frame-47@2x.png"
          />
          <img
            className={styles.ancestorEdgeInner}
            loading="lazy"
            alt=""
            src="/frame-48@2x.png"
          />
          <img
            className={styles.frameIcon}
            loading="lazy"
            alt=""
            src="/frame-49@2x.png"
          />
          <div className={styles.frameGroup}>
            <img className={styles.frameChild} alt="" src="/frame-50@2x.png" />
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.branchSubtrees}>
        <div className={styles.leafSubtreesParent}>
          <div className={styles.leafSubtrees}>
            <div className={styles.siblingsSubtree}>
              <div className={styles.brightwoodsCabinParent}>
                <h2 className={styles.brightwoodsCabin}>Brightwoods Cabin</h2>
                <div className={styles.bridlepathOntarioCanada}>
                  Bridlepath, Ontario, Canada
                </div>
              </div>
              <img
                className={styles.heartIcon}
                loading="lazy"
                alt=""
                src="/hearticon.svg"
              />
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.parent}>
                <div className={styles.div}>5.0</div>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
              <div className={styles.reviewsWrapper}>
                <div className={styles.reviews}>200 Reviews</div>
              </div>
            </div>
          </div>
          <div
            className={styles.welcomeToOur}
          >{`Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. `}</div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.group}>
              <b className={styles.b}>$658</b>
              <div className={styles.nightWrapper}>
                <div className={styles.night}>/night</div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.icontrendParent}>
                <div className={styles.icontrend}>
                  <div className={styles.iconParent}>
                    <img className={styles.icon} alt="" src="/icon.svg" />
                    <div className={styles.frameItem} />
                  </div>
                </div>
                <div className={styles.bestTimeToBookWrapper}>
                  <div className={styles.bestTimeTo}>Best time to Book</div>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.searchFlightsButton}>
            <div className={styles.button}>Book this home</div>
          </button>
        </div>
        <div className={styles.subtreeConnectionPlus}>
          <div className={styles.hostedBy}>Hosted by:</div>
          <div className={styles.formatter}>
            <img
              className={styles.dataProcessorIcon}
              loading="lazy"
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className={styles.controlCenter}>
              <div className={styles.michelleWard}>Michelle Ward</div>
              <div className={styles.joinedInMay}>Joined in May 2021</div>
            </div>
            <button className={styles.signalBoost}>
              <img
                className={styles.inputFilterIcon}
                alt=""
                src="/vector-2.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingCard;
