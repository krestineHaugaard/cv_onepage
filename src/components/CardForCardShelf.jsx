import styles from "../styles/CardForCardShelf.module.css";

export default function CardForCardShelf(props) {
  return (
    <article className={`${styles.card} flow`}>
      <h3>{props.title}</h3>
      <h4>- {props.semester}</h4>
      <p>{props.text}</p>
      <a href={props.link} target="_blank" title="Opens new tab">
        Link
      </a>
    </article>
  );
}
