'use client'

import styles from '../styles/HomeSection.module.css';

export default function BaseHomeSection({
  id,
  heading,
  children
}) {

  const isBrowser = () => typeof window !== "undefined";
  // console.log('isBrowser', isBrowser);

  function handleContentsToggle() {
    isBrowser() &&
      document.querySelector(`#${id}`).classList.toggle(`${styles.isOpen}`);
  }

  return (
    <section className={styles.entry}>
      <h4
        className={styles.entryHeading}
        onClick={handleContentsToggle}
      >
        {heading}
        <span className={styles.ellipsis}>...</span>
      </h4>
      <div id={id} className={styles.wrapper}>
        <div className={styles.inner}>
          {children}
        </div>
      </div>
    </section>
  );
};