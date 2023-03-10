import { Input, RadioBtn, Button, UploadInput } from "../index";

function Form(props) {
  return (
    <div className="form">
      <h1>Working with a POST request</h1>
      <form className="main">
        <Input
          placeholder="Your Name"
          onChange={props.handlers.handleName}
          value={props.data.name.name}
          minL="2"
          maxL="60"
          errorMessage="Name should be 2-60 characters!"
        />
        <Input
          placeholder="Email"
          onChange={props.handlers.handleEmail}
          value={props.data.email.email}
          minL="2"
          maxL="100"
          pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
          errorMessage="Email must be a valid!"
        />
        <Input
          placeholder="Phone"
          onChange={props.handlers.handlePhone}
          value={props.data.phone.phone}
          pattern="^[\+]{0,1}380([0-9]{9})$"
          errorMessage="+380 (XX) XXX - XX - XX"
        />
        <div className="radioBtns">
          <p>Select your position</p>
          {props.pos.map((e) => (
            <RadioBtn
              id={e.id}
              value={e.name}
              onChange={props.handlers.handlePosition}
              name="position"
            />
          ))}
        </div>
        <UploadInput onChange={props.handlers.handlePhoto} />
      </form>
      <Button
        dis="false"
        label="Sign up"
        onClick={props.handlers.handleSubmit}
      />
    </div>
  );
}

export { Form };
