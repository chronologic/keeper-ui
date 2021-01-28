import TimeAgo from "javascript-time-ago";
import ReactTimeAgo from "react-time-ago";

import en from "javascript-time-ago/locale/en";

TimeAgo.addLocale(en);

export default function LastSeen() {
  return ReactTimeAgo.LastSeen({ date: Date.now() });
}
