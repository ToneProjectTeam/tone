import { VFC, memo, ReactNode, useState } from "react";
import styles from "./Layout.module.scss";
import { HomeIcon } from "../main/molecules/HomeIcon";

type Props = {
  children: ReactNode;
};

type Navigation = {
  pageName: string;
  path: string;
  icon: JSX.Element;
};

const navigations: Navigation[] = [
  {
    pageName: "トップ",
    path: "/",
    icon: <HomeIcon className={styles.icon} />,
  },
  {
    pageName: "ページ2",
    path: "/page2",
    icon: <HomeIcon className={styles.icon} />,
  },
  {
    pageName: "ページ3",
    path: "/page3",
    icon: <HomeIcon className={styles.icon} />,
  },
  {
    pageName: "ページ4",
    path: "/page4",
    icon: <HomeIcon className={styles.icon} />,
  },
];

/* eslint-disable-next-line react/display-name */
export const Layout: VFC<Props> = memo((props) => {
  const { children } = props;

  return null;
});
