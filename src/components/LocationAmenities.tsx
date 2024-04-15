import { FunctionComponent } from "react";
import AmenitiesSection from "./AmenitiesSection";
import styles from "./LocationAmenities.module.css";

const LocationAmenities: FunctionComponent = () => {
  return (
    <div className={styles.locationAmenities}>
      <div className={styles.generator}>
        <h3 className={styles.amenities}>Amenities</h3>
        <div className={styles.multiplier}>
          <div className={styles.regulator}>
            <AmenitiesSection
              mdilake="/mdilake.svg"
              lakeside="Lakeside"
              tablertoolsKitchen2="/tablertoolskitchen2.svg"
              kitchen="Kitchen"
              materialSymbolsnestCamIqO="/materialsymbolsnestcamiqoutdooroutline.svg"
              securityCamerasOnProperty="Security cameras on property"
              ionwifi="/ionwifi.svg"
              wifi="Wifi"
            />
            <AmenitiesSection
              mdilake="/phcar.svg"
              lakeside="Free parking"
              tablertoolsKitchen2="/cilshower.svg"
              kitchen="Outdoor shower"
              materialSymbolsnestCamIqO="/materialsymbolswatervocoutlinerounded.svg"
              securityCamerasOnProperty="Hot water"
              ionwifi="/covidpersonalhygienehandliquidsoap.svg"
              wifi="Shampoo"
              propFlex="0.605"
              propMinHeight="20px"
              propMinWidth="89px"
              propWidth="unset"
              propFlex1="unset"
              propMinWidth1="114px"
              propAlignSelf="unset"
              propMinWidth2="68px"
              propMinWidth3="70px"
            />
            <AmenitiesSection
              mdilake="/phfireextinguisher.svg"
              lakeside="Fire Extinguisher"
              tablertoolsKitchen2="/streamlinefoodkitchenwarerefrigeratorfridgecookappliancescookingnutritionfreezerappliancefood.svg"
              kitchen="Freezer"
              materialSymbolsnestCamIqO="/materialsymbolscoffeemakeroutline.svg"
              securityCamerasOnProperty="Coffee Maker"
              ionwifi="/mdistove.svg"
              wifi="Glass stove"
              propFlex="0.6303"
              propMinHeight="20px"
              propMinWidth="120px"
              propWidth="unset"
              propFlex1="unset"
              propMinWidth1="55px"
              propAlignSelf="unset"
              propMinWidth2="95px"
              propMinWidth3="84px"
            />
          </div>
          <button className={styles.searchFlightsButton}>
            <div className={styles.button}>Show all amenities</div>
          </button>
        </div>
      </div>
      <div className={styles.chart}>
        <div className={styles.model}>
          <div className={styles.simulation}>
            <div className={styles.analysis}>
              <h3 className={styles.whereYoullBe}>Where you’ll be</h3>
              <div className={styles.design}>
                <img
                  className={styles.prototypeIcon}
                  alt=""
                  src="/vector-3.svg"
                />
                <div className={styles.theBridlePath}>The Bridle Path</div>
              </div>
            </div>
            <div className={styles.template}>
              <div className={styles.weatherInfo}>
                <img
                  className={styles.suncloudIcon}
                  loading="lazy"
                  alt=""
                  src="/suncloud.svg"
                />
                <div className={styles.weatherInfo1}>
                  <div className={styles.temperature}>20°C</div>
                  <div className={styles.weatherDetail}>Broken clouds</div>
                </div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.sunParent}>
                  <img className={styles.sunIcon} alt="" src="/sun.svg" />
                  <div className={styles.cWrapper}>
                    <b className={styles.c}>23°C</b>
                  </div>
                </div>
                <div className={styles.sunGroup}>
                  <div className={styles.sun}>Sun</div>
                  <div className={styles.aug}>27 Aug</div>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.suncloudParent}>
                  <img
                    className={styles.suncloudIcon1}
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <div className={styles.cContainer}>
                    <b className={styles.c1}>22°C</b>
                  </div>
                </div>
                <div className={styles.monParent}>
                  <div className={styles.mon}>Mon</div>
                  <div className={styles.aug1}>28 Aug</div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.sunContainer}>
                  <img className={styles.sunIcon1} alt="" src="/sun.svg" />
                  <div className={styles.cFrame}>
                    <b className={styles.c2}>23°C</b>
                  </div>
                </div>
                <div className={styles.tueParent}>
                  <div className={styles.tue}>Tue</div>
                  <div className={styles.aug2}>29 Aug</div>
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.suncloudGroup}>
                  <img
                    className={styles.suncloudIcon2}
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <div className={styles.cWrapper1}>
                    <b className={styles.c3}>20°C</b>
                  </div>
                </div>
                <div className={styles.wedParent}>
                  <div className={styles.wed}>Wed</div>
                  <div className={styles.aug3}>30 Aug</div>
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.suncloudContainer}>
                  <img
                    className={styles.suncloudIcon3}
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <div className={styles.cWrapper2}>
                    <b className={styles.c4}>19°C</b>
                  </div>
                </div>
                <div className={styles.thuParent}>
                  <div className={styles.thu}>Thu</div>
                  <div className={styles.aug4}>31 Aug</div>
                </div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.sunParent1}>
                  <img className={styles.sunIcon2} alt="" src="/sun.svg" />
                  <div className={styles.cWrapper3}>
                    <b className={styles.c5}>24°C</b>
                  </div>
                </div>
                <div className={styles.friParent}>
                  <div className={styles.fri}>Fri</div>
                  <div className={styles.sep}>1 Sep</div>
                </div>
              </div>
            </div>
          </div>
          <img className={styles.modelChild} alt="" src="/rectangle-1@2x.png" />
          <img
            className={styles.dataAggregatorIcon}
            loading="lazy"
            alt=""
            src="/frame-92.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationAmenities;
