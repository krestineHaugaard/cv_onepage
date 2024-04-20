import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header>
      <ul className={styles.ul}>
        <li className={styles.link}>
          <a
            className={styles.link}
            title="Opens new tab"
            href="https://www.linkedin.com/in/krestine-haugaard-a80447264/"
            target="_blank"
          >
            Linkedin
          </a>
        </li>
        <li className={styles.link}>
          <a
            className={styles.link}
            title="Opens new tab"
            href="https://github.com/krestineHaugaard"
            target="_blank"
          >
            Github
          </a>
        </li>
        <li className={styles.link}>
          <a className={styles.link} href="mailto:krestinehaugaard@gmail.com">
            krestinehaugaard@gmail.com
          </a>
        </li>
        <li className={styles.link}>+45 30 25 09 85</li>
      </ul>
    </header>
  );
}
