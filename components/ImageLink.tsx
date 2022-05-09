import Image from "next/image";
import React from "react";

type ImageLinkProps = {
  src: string;
  alt: string;
  link: string;
};

export default function ImageLink({ src, alt, link }: ImageLinkProps) {
  return (
    <a className="imageLink" href={link} target="_blank" rel="noreferrer">
      <Image src={src} alt={alt} />
      <style jsx>{`
        .imageLink {
          transition: all 0.125s;
        }

        .imageLink:hover {
          transform: scale(1.1);
        }
      `}</style>
    </a>
  );
}
