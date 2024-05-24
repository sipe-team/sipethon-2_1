import { ComponentPropsWithoutRef } from "react";
import * as style from "./style.css";

type BlockProps = ComponentPropsWithoutRef<"div">;

export const Block = (props: BlockProps) => {
  return <div {...props} className={style.block} />;
};
