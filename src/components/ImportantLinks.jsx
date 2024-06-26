import styles from "../styles/ImportantLinks.module.css";

export default function ImportantLinks() {
  return (
    <section className={styles.container}>
      <ul className={styles.layout}>
        <li>
          <a
            title="Opens new tab"
            className={styles.li}
            href="https://www.linkedin.com/in/krestine-haugaard-a80447264/"
            target="_blank"
          >
            My <span className={styles.link}>Linkedin</span>
          </a>
        </li>
        <li>
          <a
            title="Opens new tab"
            className={styles.li}
            href="https://github.com/krestineHaugaard"
            target="_blank"
          >
            My <span className={styles.link}>Github</span>
          </a>
        </li>
        <li>
          <a className={styles.li} href="mailto:krestinehaugaard@gmail.com">
            Mail:{" "}
            <span className={styles.link}>krestinehaugaard@gmail.com</span>
          </a>
        </li>
        <li className={styles.li}>
          Tlf: <span className={styles.link}>+45 30 25 09 85</span>
        </li>
      </ul>
    </section>
  );
}
