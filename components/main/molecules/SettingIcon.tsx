import React, { memo, VFC } from "react";
import settingIconLink from "../../../public/images/setting.png";
import Img from "next/image";

type Props = {
  className: string;
};

/* eslint-disable-next-line react/display-name */
export const SettingIcon: VFC<Props> = memo((props) => {
  const { className } = props;
  return <Img className={className} src={settingIconLink} />;
});

export default SettingIcon;
