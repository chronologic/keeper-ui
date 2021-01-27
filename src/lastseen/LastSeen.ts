import TimeAgo from "javascript-time-ago";
import ReactTimeAgo from "react-time-ago";

import en from "javascript-time-ago/locale/en";
import differenceInHours from "date-fns/differenceInHours";
import differenceInMinutes from "date-fns/differenceInMinutes";
import formatDistanceStrict from "date-fns/formatDistanceStrict";
import { canonical, getStep } from "javascript-time-ago/gradation";

TimeAgo.addLocale(en);

const timeStyle = {
  gradation: [
    getStep(canonical, "now"),
    getStep(canonical, "second"),
    getStep(canonical, "minute"),
    getStep(canonical, "hour"),
    {
      threshold: 60.5 * 60,
      factor: 60 * 60,
      format(value: number | Date, locale: any) {
        const now = Date.now();
        const excessMins =
          (differenceInMinutes(now, value) -
            differenceInHours(now, value) * 60) *
          1000 *
          60;

        return `${formatDistanceStrict(value, now, {
          addSuffix: false,
          unit: "hour",
        })} and ${formatDistanceStrict(now - excessMins, now, {
          addSuffix: true,
          unit: "minute",
        })}`;
      },
    },
    getStep(canonical, "day"),
    getStep(canonical, "week"),
    getStep(canonical, "month"),
    getStep(canonical, "year"),
  ],
  flavour: "long-convenient",
  units: ["now", "minute", "hour", "day", "week", "month", "year"],
};

export default function LastSeen({ date }) {
  return <ReactTimeAgo date={date} timeStyle={timeStyle} />;
}
