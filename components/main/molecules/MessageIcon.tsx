import React, { memo, VFC } from "react";
import messageIconLink from "../../../public/images/message.png";
import Img from "next/image";

type Props = {
  className: string;
};

/* eslint-disable-next-line react/display-name */
export const MessageIcon: VFC<Props> = memo((props) => {
  const { className } = props;
  return <Img className={className} src={messageIconLink} />;
});

export default MessageIcon;
