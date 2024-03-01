import styles from '../styles/Header.module.css';

export default function BaseHeader() {
  return (
    <header>
      <div className={styles.headerWrapper}>
        <h1 className={styles.hapistax}>
          <span className={styles.hapi}>HAP<span className={styles.i}>i</span></span>
          <span className={styles.stax}>STAX</span>
        </h1>
        <div className={styles.secondaryHeadings}>
          <h2>WEB DESIGN<br/>& DEVELOPMENT</h2>
          <h3 className={styles.name}>ROBIN KING</h3>
          <h3 className={styles.location}>BASED IN HARPENDEN, HERTS, UK</h3>
        </div>
      </div>
    </header>
  );
}