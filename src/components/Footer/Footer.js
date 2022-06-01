// Assets
import happycowAndroidApp from "../../assets/img/happycow-android-app.png";
import happycowIosApp from "../../assets/img/happycow-ios-app.png";
import iosLogo from "../../assets/img/Bitmap@2x.png";
import andoridLogo from "../../assets/img/google-play-badge@2x.png";
// Styles
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main_container}>
        <div className={styles.container}>
          <button className={styles.main_button}>Community</button>
          <button className={styles.button}>My Profile</button>
          <button className={styles.button}>Ambassadors</button>
          <button className={styles.button}>Veg Events</button>
          <button className={styles.button}>Forum</button>
          <button className={styles.button}>Newsletter</button>
          <button className={styles.button}>Our Story</button>
          <button className={styles.button}>Get Involved</button>
        </div>
        <div className={styles.container}>
          <button className={styles.main_button}>About</button>
          <button className={styles.button}>FAQ</button>
          <button className={styles.button}>Contact</button>
          <button className={styles.button}>Link to us</button>
          <button className={styles.button}>Site Map</button>
        </div>
        <div className={styles.container}>
          <button className={styles.main_button}>Shop</button>
          <button className={styles.button}>T-Shirts</button>
          <button className={styles.button}>Books</button>
        </div>
        <div className={styles.container}>
          <button className={styles.main_button}>HappyCow App</button>
          <button className={styles.button}>Over 2 million downloads.</button>
          <div className={styles.img}>
            <div className={styles.ios_img}>
              <img className={styles.logo} src={iosLogo} alt="AppStore logo" />
              <img
                className={styles.ios_app_img}
                src={happycowIosApp}
                alt="iOS app"
              />
            </div>
            <div className={styles.android_img}>
              <img
                className={styles.logo}
                src={andoridLogo}
                alt="PlayStore logo"
              />
              <img
                className={styles.android_app_img}
                src={happycowAndroidApp}
                alt="Android app"
              />
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <button className={styles.main_button}>Connect</button>
          <button className={styles.main_button}>Search</button>
        </div>
      </div>
      <div className={styles.bottom_footer}>
        Made with React by Nicolas Benais
      </div>
    </footer>
  );
}
