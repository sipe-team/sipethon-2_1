import { ComponentPropsWithoutRef } from "react";
import * as style from "./style.css";

type ImageContainerProps = ComponentPropsWithoutRef<"img"> & {
  m?: string | number;
};

export const ImageContainer = (props: ImageContainerProps) => {
  return (
    <img
      {...props}
      className={style.imgContainer}
      style={props.m ? { margin: props.m } : undefined}
      alt="container"
    />
  );
};
