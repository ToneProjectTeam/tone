import { useState } from "react";
import Layout from "../../../components/home/layout";
import Button from "../../../components/home/atoms/button";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/components/home/stylesheet.module.scss";
import HeaderLogo from "../../../components/home/atoms/HeaderLogo";
import HeaderBack from "../../../components/home/atoms/HeaderBack";
import Head from "next/head";
import Title from "../../../components/home/atoms/title"
import Sentence from "../../../components/home/atoms/sentence";

const Index = () => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <div>
        <HeaderLogo />
      </div>
      <div>
        <Title />
        <Sentence />
      </div>
      <div className="">
        <Link href="/home">
          <a>
            <Button type="button" buttonText="飛び込む" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Index;
