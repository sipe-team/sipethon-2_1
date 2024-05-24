import * as style from "./style.css";
import LogoImage from "../../assets/logo.png";

export const Header = () => {
  return (
    <div className={style.container}>
      <img className={style.logo} src={LogoImage} alt="logo" />
    </div>
  );
};
