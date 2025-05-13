import * as React from "react";
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

export default function ExpandIcon({ style }) {
  return (
    <Svg width={64} height={64} fill="none" style={style}>
      <G>
        <Circle cx={32} cy={32} r={22} fill="url(#grad)" />
      </G>
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="m39.293 27.293 1.414 1.414L32 37.414l-8.707-8.707 1.414-1.414L32 34.586l7.293-7.293Z"
        clipRule="evenodd"
      />
      <Defs>
        <LinearGradient
          id="grad"
          x1={33.877}
          x2={33.464}
          y1={10}
          y2={54.014}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FF58A4" />
          <Stop offset={1} stopColor="#FF6B86" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
