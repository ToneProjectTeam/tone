import React from 'react'
import Image from 'next/image'
import "tailwindcss/tailwind.css";
import Head from "next/head";

const HeaderLogo = () => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <div style={{ position: "relative", width: "180px", height: "100px" }}>
        <Image
          src="/images/ToneLogo.png"
          alt="Toneのロゴ"
          //width={200}
          //height={100}
          layout="fill"
          objectFit="contain"
          priority
          className="z-index-master"
        />
      </div>
    </div>
  );

};
export default HeaderLogo;