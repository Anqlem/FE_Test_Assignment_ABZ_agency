import { Success } from "../../assets";

function SuccessForm() {
  return (
    <div className="successForm">
      <h1>User successfully registered</h1>
      <img src={Success} alt="success_img" />
    </div>
  );
}

export { SuccessForm };
