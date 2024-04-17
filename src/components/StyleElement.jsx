export default function TopStyleElement(props) {
  return (
    <section className={`${props.layout} breakout`}>
      <div className={props.outerBox}>
        <div className={props.innerBox}></div>
      </div>
    </section>
  );
}
