import Layout from "../../../components/home/layout";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import SideBarComponents from '../../../components/main/organisms/sideBar'
import { VFC, memo, ReactNode, useState } from "react";
import styles from "./Layout.module.scss";

const Index = (props) => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <SideBarComponents />
    </div>
  );
};


export default Index;
