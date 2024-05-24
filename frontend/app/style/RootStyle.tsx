import styled from "@emotion/styled";
import { ReactNode } from "react";
import "./reset.css";

interface RootStyleProps {
  children: ReactNode;
}

export const RootStyle = (props: RootStyleProps) => {
  return <StyleLayout>{props.children}</StyleLayout>;
};

const StyleLayout = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;
