import * as React from "react";
import Svg, { G, Circle, Path, Defs, ClipPath } from "react-native-svg";

const WarningIcon = ({ size = 40 }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 44 44" // recortamos el espacio sobrante
    fill="none"
    preserveAspectRatio="xMidYMid meet"
  >
    <Circle cx={22} cy={22} r={22} fill="#FF6B86" />
    <G clipPath="url(#clip0)">
      <Path
        fill="#fff"
        d="M21 25h2v2h-2v-2Zm0-8h2v6h-2v-6Zm1-5C16.48 12 12 16.48 12 22s4.48 10 10 10 10-4.48 10-10S27.52 12 22 12Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z"
      />
    </G>
    <Defs>
      <ClipPath id="clip0">
        <Path fill="#fff" d="M10 10h24v24H10z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default WarningIcon;
