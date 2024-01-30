import React from "react";

import * as ST from "./styled/styled";
import ImageEnum from "./enum";
import { IImagePropsDefault } from "./mock";
import { ImageStyleProps, ImageType } from "./type";

const Image: React.FC<ImageType & ImageStyleProps> = (props) => {
  const {
    type,
    children,
    icon,
    isLoading,
    onClick,
    src,
    alt,
    background,
    ...otherProps
  } = props;
  if (isLoading) return <>Loading</>;
  switch (type) {
    case ImageEnum.enum_srcImage: {
      return (
        <ST.SrcImageBlock background={background} onClick={onClick} {...otherProps}>
          <ST.SrcImage isLoading={isLoading} src={src} alt={alt} />
        </ST.SrcImageBlock>
      );
    }
    case ImageEnum.enum_backgroundImage: {
      return (
        <ST.BackgroundImage onClick={onClick} background={background} {...otherProps} />
      );
    }
    case ImageEnum.enum_defaultSvg: {
      return (
        <ST.DefaultSvg
          onClick={onClick}
          background={background}
          isLoading={isLoading}
          {...otherProps}
        >
          {icon}
        </ST.DefaultSvg>
      );
    }
    case ImageEnum.enum_nodeSvgImage: {
      return (
        <ST.NodeSvgImage
          isLoading={isLoading}
          dangerouslySetInnerHTML={{ __html: children as string }}
        />
      );
    }
    default: {
      return <ST.Image>Ошибка</ST.Image>;
    }
  }
};

Image.defaultProps = IImagePropsDefault;
export default React.memo(Image);
