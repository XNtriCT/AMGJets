import { ImgHTMLAttributes } from 'react';

export default function BrandLogo(props: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src="/images/logo.png"
      alt="Aircraft Management Group | AMG Jets Logo"
      {...props}
    />
  );
}
