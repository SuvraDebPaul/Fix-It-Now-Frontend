"use client";

import Marquee from "react-fast-marquee";
import { companyLogos } from "./company-logos";
import Image from "next/image";

export function LogoMarquee() {
  return (
    <Marquee gradient gradientColor="var(--background)" speed={60} pauseOnHover>
      {companyLogos.map((company) => (
        <div
          key={company.name}
          className="mx-8 flex items-center opacity-90 transition-opacity hover:opacity-100"
        >
          <Image
            src={company.url}
            alt="Logo Image"
            height={100}
            width={200}
            className="w-full h-30"
          />
        </div>
      ))}
    </Marquee>
  );
}
