"use client";

import styled from "styled-components";
import { ImageStyleProps } from "../type";
import { commonImageStyles } from "../constants/commonButtonStyles";

export const SrcImageBlock = styled.div<ImageStyleProps>`
  ${commonImageStyles};
  background: ${(props) => props.background};
`;

export const SrcImage = styled.img<ImageStyleProps>`
  height: 100%;
  max-height: 100%;
  max-width: 100%;
  width: 100%;
`;

export const BackgroundImage = styled.div<ImageStyleProps>`
  ${commonImageStyles};
`;

export const NodeSvgImage = styled.div<ImageStyleProps>``;

export const DefaultSvg = styled.div<ImageStyleProps>`
  ${commonImageStyles};
  background: ${(props) => props.background};
  & svg {
    width: 100%;
    height: 100%;
    fill: ${(props) => props.fill};
    stroke: ${(props) => props.stroke};
    &:hover {
      fill: ${(props) => props.$hoverFill};
    }
  }
`;

export const Image = styled.div<ImageStyleProps>``;
