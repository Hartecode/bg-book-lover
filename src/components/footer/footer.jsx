import styles from './footer.module.scss';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => (
  <footer className={styles['jsx-footer']}>
    <div className={styles['inner-container']}>
      <div className={styles.copyright}>
        <small>&copy; 2020, Brown Girl Book Lover</small>
      </div>
      <div className={styles.social}>
        <a
          aria-label="facebook"
          href="https://www.facebook.com/browngirlbooklover/"
        >
          <FaFacebookF />
        </a>
        <a
          aria-label="Instagram"
          href="https://www.instagram.com/browngirlbooklover/"
        >
          <FaInstagram />
        </a>
        <a aria-label="Youtube" href="https://www.youtube.com/user/Lmurray81/">
          <FaYoutube />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
