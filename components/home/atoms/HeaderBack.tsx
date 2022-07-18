import React from "react";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import Head from "next/head";


const HeaderBack = () => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <div className="">
        <Image
          src="/images/headerBack.jpg"
          alt="ヘッダー背景"
          layout="fill"
          objectFit="cover"
          className="z-index-n1"
        />
      </div>
    </div>
  );
};
export default HeaderBack;