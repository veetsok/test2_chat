import { css } from "styled-components";

import { ImageStyleProps } from "../../type";

export const commonImageStyles = css<ImageStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.background ? `#fff 50% / contain no-repeat url(${props.background})` : "none"};
  border-radius: ${(props) => props.$borderRadius};
  border: ${(props) => props.border};
  margin: ${(props) => props.margin};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  width: ${(props) => (props.width ? props.width : "auto")};
  cursor: ${(props) => props.cursor};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
`;
