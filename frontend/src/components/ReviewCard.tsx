import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ReviewCard.module.css";

export type ReviewCardType = {
  nA?: string;
  johnnyCash?: string;
  june2023?: string;
  prop?: string;
  michellesPlaceWasSoGreatA?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const ReviewCard: FunctionComponent<ReviewCardType> = ({
  nA,
  johnnyCash,
  june2023,
  prop,
  michellesPlaceWasSoGreatA,
  propMinWidth,
  propMinWidth1,
}) => {
  const johnnyCashStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const june2023Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={styles.reviewcard}>
      <div className={styles.nAParent}>
        <div className={styles.nA}>
          <img className={styles.nAIcon} loading="lazy" alt="" src={nA} />
          <div className={styles.nA1}>
            <div className={styles.johnnyCash} style={johnnyCashStyle}>
              {johnnyCash}
            </div>
            <div className={styles.june2023} style={june2023Style}>
              {june2023}
            </div>
          </div>
        </div>
        <div className={styles.michelleReviewCard}>
          <div className={styles.div}>{prop}</div>
          <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
        </div>
      </div>
      <div className={styles.michellesPlaceWas}>
        {michellesPlaceWasSoGreatA}
      </div>
    </div>
  );
};

export default ReviewCard;
