export default function TopStyleElement(props) {
  return (
    <div className={`${props.layout} breakout`}>
      <div className={props.outerBox}>
        <div className={props.innerBox}></div>
      </div>
    </div>
  );
}
