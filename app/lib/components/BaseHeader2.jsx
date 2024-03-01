import styles from '../styles/Header2.module.css';

export default function BaseHeader() {
  return (
    <header className={styles.homeHeader}>
      <div className={styles.logo}>
        <h1 className={styles.hapistax}>
          <span className={styles.hapi}>HAP</span><span className={styles.i}>i</span>
          <span className={styles.stax}>STAX</span>
        </h1>
      </div>
      <div className={styles.details}>
        <p className={styles.contact}>contact</p>
        {/* <h2>WEB DESIGN & DEVELOPMENT</h2> */}
        {/* <h3>ROBIN KING, BASED IN HARPENDEN, HERTS, UK</h3> */}
      </div>
    </header>
  );
}