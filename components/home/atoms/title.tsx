import React from "react";
import Head from "next/head";

export default function Title(props) {
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
      <h1 className="text-center m-5 p-5 display-3 text-primary">
        <strong>Dive into the Tone.</strong>
      </h1>
    </div>
  );
}
