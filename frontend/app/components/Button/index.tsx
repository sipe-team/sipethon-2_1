import { ComponentPropsWithoutRef } from "react";
import * as style from "./style.css";

type ButtonProps = ComponentPropsWithoutRef<"button">;
export const Button = (props: ButtonProps) => {
  return <button {...props} className={style.button} />;
};
