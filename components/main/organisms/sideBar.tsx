import { useRouter } from "next/router";
import Link from "next/link";
import { VFC, memo, ReactNode, useState } from "react";
import styles from "../../../components/layouts/Layout.module.scss";
import { HomeIcon } from "../molecules/HomeIcon";
import { ClockIcon } from "../molecules/ClockIcon";
import { TimelineIcon } from "../molecules/TimelineIcon";
import { MessageIcon } from "../molecules/MessageIcon";
import { SettingIcon } from "../molecules/SettingIcon";


type Props = Partial< {
  children: ReactNode;

}>;

type Navigation = {
  pageName: string;
  path: string;
  icon: JSX.Element;
};

const navigations: Navigation[] = [
  {
    pageName: "",
    path: "/page2",
    icon: <TimelineIcon className={styles.icon} />,
  },
  {
    pageName: "",
    path: "/page3",
    icon: <ClockIcon className={styles.icon} />,
  },
  {
    pageName: "",
    path: "/page4",
    icon: <MessageIcon className={styles.icon} />,
  },
  {
    pageName: "",
    path: "/",
    icon: <SettingIcon className={styles.icon} />,
  },
];

/* eslint-disable-next-line react/display-name */
export const Layout: VFC<Props> = memo((props) => {
  const { children } = props;

  const [menuOpen, setMenuOpen] = useState(true);

  const router = useRouter();

  const isPageActive = (pagePath: string): boolean => {
    return pagePath === String(router.route);
  };

  return (
    <div className={styles.root}>
      <aside
        className={styles.sidebar}
        style={{ width: menuOpen ? "200px" : "60px" }}
      >
        <div
          className={styles.hamburger}
          role="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {[...Array(3)].map((_, index: number) => (
            <span
              className={
                menuOpen ? styles.menuCloseArrow : styles.menuOpenArrow
              }
              key={index}
            ></span>
          ))}
        </div>
        {navigations.map((navigation) => (
          <Link href={navigation.path} key={navigation.pageName}>
            <a
              className={styles.flexContainer}
              style={{
                background: isPageActive(navigation.path) ? "#1B555A" : "none",
              }}
            >
              {navigation.icon}
              {menuOpen && (
                <p className={styles.pageName}>{navigation.pageName}</p>
              )}
            </a>
          </Link>
        ))}
      </aside>

      <main className={styles.mainContent}>{children}</main>
    </div>
  );
});

export default Layout
