import styles from './blockQuote.module.scss';
import Image from '../image/image';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const BlockQuote = ({ image, quote, book, author }) => (
  <blockquote className={styles.blockquote}>
    {image && (
      <div className={styles['img-container']}>
        <Image src={image.src} alt={image.alt} />
      </div>
    )}
    <p>
      <span className={`${styles.quote} ${styles.left}`}>
        <FaQuoteLeft />
      </span>
      {quote}
      <span className={`${styles.quote} ${styles.right}`}>
        <FaQuoteRight />
      </span>
    </p>
    <footer>
      —{author}
      {book && (
        <>
          , <cite>{book}</cite>
        </>
      )}
    </footer>
  </blockquote>
);

export default BlockQuote;
