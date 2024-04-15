import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./AmenitiesSection.module.css";

export type AmenitiesSectionType = {
  mdilake?: string;
  lakeside?: string;
  tablertoolsKitchen2?: string;
  kitchen?: string;
  materialSymbolsnestCamIqO?: string;
  securityCamerasOnProperty?: string;
  ionwifi?: string;
  wifi?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinHeight?: CSSProperties["minHeight"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  propFlex1?: CSSProperties["flex"];
  propMinWidth1?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propMinWidth2?: CSSProperties["minWidth"];
  propMinWidth3?: CSSProperties["minWidth"];
};

const AmenitiesSection: FunctionComponent<AmenitiesSectionType> = ({
  mdilake,
  lakeside,
  tablertoolsKitchen2,
  kitchen,
  materialSymbolsnestCamIqO,
  securityCamerasOnProperty,
  ionwifi,
  wifi,
  propFlex,
  propMinHeight,
  propMinWidth,
  propWidth,
  propFlex1,
  propMinWidth1,
  propAlignSelf,
  propMinWidth2,
  propMinWidth3,
}) => {
  const amenitiesSection1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const mdilakeIconStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  const lakesideStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const phfireextinguisherStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const kitchenStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
      minWidth: propMinWidth1,
    };
  }, [propFlex1, propMinWidth1]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const securityCamerasOnStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const wifiStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  return (
    <div className={styles.amenitiessection1} style={amenitiesSection1Style}>
      <div className={styles.mdilakeParent}>
        <img
          className={styles.mdilakeIcon}
          loading="lazy"
          alt=""
          src={mdilake}
          style={mdilakeIconStyle}
        />
        <div className={styles.lakeside} style={lakesideStyle}>
          {lakeside}
        </div>
      </div>
      <div
        className={styles.phfireextinguisher}
        style={phfireextinguisherStyle}
      >
        <img
          className={styles.tablertoolsKitchen2Icon}
          loading="lazy"
          alt=""
          src={tablertoolsKitchen2}
        />
        <div className={styles.kitchen} style={kitchenStyle}>
          {kitchen}
        </div>
      </div>
      <div
        className={styles.materialSymbolsnestCamIqOParent}
        style={frameDivStyle}
      >
        <img
          className={styles.materialSymbolsnestCamIqOIcon}
          loading="lazy"
          alt=""
          src={materialSymbolsnestCamIqO}
        />
        <div
          className={styles.securityCamerasOn}
          style={securityCamerasOnStyle}
        >
          {securityCamerasOnProperty}
        </div>
      </div>
      <div className={styles.securityCameras}>
        <img
          className={styles.ionwifiIcon}
          loading="lazy"
          alt=""
          src={ionwifi}
        />
        <div className={styles.wifi} style={wifiStyle}>
          {wifi}
        </div>
      </div>
    </div>
  );
};

export default AmenitiesSection;
