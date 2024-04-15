import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DetailsCard.module.css";

export type DetailsCardType = {
  container?: string;
  dedicatedWorkspace?: string;
  aPrivateRoomEquippedWithW?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const DetailsCard: FunctionComponent<DetailsCardType> = ({
  container,
  dedicatedWorkspace,
  aPrivateRoomEquippedWithW,
  propMinWidth,
  propMinWidth1,
}) => {
  const dedicatedWorkspaceStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const aPrivateRoomStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={styles.detailscard}>
      <img
        className={styles.containerIcon}
        loading="lazy"
        alt=""
        src={container}
      />
      <div className={styles.dedicatedWorkspaceParent}>
        <div
          className={styles.dedicatedWorkspace}
          style={dedicatedWorkspaceStyle}
        >
          {dedicatedWorkspace}
        </div>
        <div className={styles.aPrivateRoom} style={aPrivateRoomStyle}>
          {aPrivateRoomEquippedWithW}
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
