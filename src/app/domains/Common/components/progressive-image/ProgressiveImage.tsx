import { FC, useEffect, useState } from "react";

export interface ProgressiveImageProps {
  placeholderImg: string;
  src: string;
  alt: string;
  className: string;
}

const ProgressiveImage: FC<ProgressiveImageProps> = ({
  placeholderImg,
  src,
  alt,
  className,
}) => {
  const [imageMeta, setImageMeta] = useState({
    src: placeholderImg,
    isLoading: true,
  });

  useEffect(() => {
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () => {
      // When image is loaded replace the image's src and set loading to false
      setImageMeta({ src, isLoading: false });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <img
      loading="lazy"
      src={imageMeta.src}
      className={`${className} ${
        imageMeta.isLoading ? "opacity-50" : "opacity-100"
      } transition-opacity`}
      alt={alt}
      height={100}
      width={100}
    />
  );
};

export default ProgressiveImage;
