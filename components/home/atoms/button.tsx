import React from "react";
import Head from "next/head";

export default function Button(props) {
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
      <div className="d-grid gap-2 col-2 mx-auto my-auto">
        <button className="btn btn-primary w-100 h-75">
          {props.buttonText}
        </button>
      </div>
    </div>
  );};
