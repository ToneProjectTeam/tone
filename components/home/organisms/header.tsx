import React from "react";
import Head from "next/head";
import HeaderLogo from "../atoms/HeaderLogo";
import HeaderBack from "../atoms/HeaderBack";

export default function Header(props) {
  return (
    <div className="">
      <HeaderLogo />
      <HeaderBack />
    </div>
  );
}
