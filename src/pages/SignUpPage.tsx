import { FunctionComponent, useCallback } from "react";
import Header from "../components/Header";
import SocialMediaLogin from "../components/SocialMediaLogin";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpPage.module.css";

const SignUpPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIAlreadyHaveClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  return (
    <div className={styles.signUpPage}>
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection={false}
      />
      <main className={styles.loginSections}>
        <div className={styles.formWrapper}>
          <div className={styles.form}>
            <div className={styles.createAccountParent}>
              <h2 className={styles.createAccount}>Create Account</h2>
              <div className={styles.passwordField}>
                <form className={styles.form1}>
                  <div className={styles.formFields}>
                    <div className={styles.email}>
                      <input
                        className={styles.emailAddress}
                        placeholder="Email address"
                        type="text"
                      />
                      <img
                        className={styles.iconaccount}
                        alt=""
                        src="/iconaccount.svg"
                      />
                    </div>
                    <div className={styles.password}>
                      <input
                        className={styles.password1}
                        placeholder="Password"
                        type="password"
                        required
                      />
                      <img
                        className={styles.iconpassword}
                        alt=""
                        src="/iconpassword.svg"
                      />
                    </div>
                    <div className={styles.confirmPassword}>
                      <input
                        className={styles.confirmPassword1}
                        placeholder="Confirm password"
                        type="password"
                        required
                      />
                      <img
                        className={styles.iconpassword1}
                        alt=""
                        src="/iconpassword.svg"
                      />
                    </div>
                  </div>
                  <button className={styles.searchFlightsButton}>
                    <div className={styles.button}>Sign up</div>
                  </button>
                </form>
              </div>
              <div className={styles.lineWrapper}>
                <div className={styles.frameChild} />
              </div>
              <SocialMediaLogin
                orSignUpWith="Or sign up with"
                image="/image@2x.png"
                image1="/image-15@2x.png"
                image2="/image-21@2x.png"
              />
            </div>
            <div
              className={styles.iAlreadyHaveContainer}
              onClick={onIAlreadyHaveClick}
            >
              <span>{`I already have an account. `}</span>
              <span className={styles.login}>Login</span>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.band}>
        <div className={styles.bandInner}>
          <div className={styles.localhostIncAllRightsResParent}>
            <div className={styles.localhostIncAll}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.privacyPolicyParent}>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div
                className={styles.termsConditions}
              >{`Terms & Conditions`}</div>
              <div className={styles.contactUs}>Contact us</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignUpPage;
