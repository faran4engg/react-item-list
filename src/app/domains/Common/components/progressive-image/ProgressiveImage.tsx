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
  const [loading, setLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState(placeholderImg);

  useEffect(() => {
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () => {
      // When image is loaded replace the image's src and set loading to false
      setLoading(false);
      setCurrentSrc(src);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <img
      loading="lazy"
      src={currentSrc}
      className={className}
      style={{
        opacity: loading ? 0.5 : 1,
        transition: "opacity .15s linear",
      }}
      alt={alt}
    />
  );
};

export default ProgressiveImage;
