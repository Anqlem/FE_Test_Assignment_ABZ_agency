import { Logo } from "../../assets";
import { Button } from "../Button";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div>
        <Button label="Users" />
        <Button label="Sign Up" />
      </div>
    </div>
  );
}

export { Header };
