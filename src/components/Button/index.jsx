function Button(props) {
  if (props.dis === "true") {
    return <button disabled>{props.label}</button>;
  } else {
    return (
      <button type="yellow" onClick={props.onClick}>
        {props.label}
      </button>
    );
  }
}

export { Button };
