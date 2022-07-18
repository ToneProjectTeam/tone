import React from "react";
import Head from "next/head";

export default function Sentence(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <div className="">
        <h1 className="text-center m-5 text-primary">Toneの世界へようこそ!</h1>
        <h1 className="text-center m-5 text-primary pb-5">
          Toneは古河中等生が集い、楽しむことができるインターネット上の世界です。
        </h1>
      </div>
    </div>
  );
}
