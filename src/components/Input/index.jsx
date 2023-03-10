import { useState } from "react";

function Input(props) {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <div className="input_conteiner">
      <input
        required
        minLength={props.minL}
        maxLength={props.maxL}
        className="text_input"
        type="text"
        id={props.placeholder}
        placeholder=" "
        onChange={props.onChange}
        value={props.value}
        pattern={props.pattern}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <label className="label" htmlFor={props.placeholder}>
        {props.placeholder}
      </label>
      <span>{props.errorMessage}</span>
    </div>
  );
}

export { Input };
