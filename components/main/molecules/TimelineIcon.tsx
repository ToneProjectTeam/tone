import React, { memo, VFC } from "react";
import timelineIconLink from "../../../public/images/timeline.png";
import Img from "next/image";

type Props = {
  className: string;
};

/* eslint-disable-next-line react/display-name */
export const TimelineIcon: VFC<Props> = memo((props) => {
  const { className } = props;
  return <Img className={className} src={timelineIconLink} />;
});

export default TimelineIcon;
