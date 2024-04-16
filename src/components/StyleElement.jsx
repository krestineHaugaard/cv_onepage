export default function TopStyleElement(props) {
  return (
    <section className="breakout element_grid">
      <div className={props.outerBox}>
        <div className={props.innerBox}></div>
      </div>
    </section>
  );
}
