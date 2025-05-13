import * as React from "react";
import Svg, { G, Circle, Path, Defs, ClipPath } from "react-native-svg";

const WarningIcon = ({ size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 52 52" fill="none">
    <Circle cx={26} cy={26} r={16} fill="#FF6B86" />
    <G clipPath="url(#clip0)">
      <Path
        fill="#fff"
        d="M25 29h2v2h-2v-2Zm0-8h2v6h-2v-6Zm.99-5C20.47 16 16 20.48 16 26s4.47 10 9.99 10C31.52 36 36 31.52 36 26s-4.48-10-10.01-10ZM26 34c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z"
      />
    </G>
    <Defs>
      <ClipPath id="clip0">
        <Path fill="#fff" d="M14 14h24v24H14z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default WarningIcon;
