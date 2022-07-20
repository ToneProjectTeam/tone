import React, { memo, VFC } from "react";
import clockIconLink from "../../../public/images/clockIcon.png";
import Img from 'next/image'

type Props = {
  className: string;
};

/* eslint-disable-next-line react/display-name */
export const ClockIcon: VFC<Props> = memo((props) => {
  const { className } = props;
  return (
    <Img className={className} src={clockIconLink} />
  );
});

export default ClockIcon