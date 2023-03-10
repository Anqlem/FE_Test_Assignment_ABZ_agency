function RadioBtn(props) {
  return (
    <div className="radioBtn">
      <input
        id={props.id}
        type="radio"
        name={`${props.name}`}
        onChange={props.onChange}
        value={props.value}
        minLength="1"
      ></input>
      <p htmlFor={props.id}>{props.value}</p>
    </div>
  );
}
export { RadioBtn };
