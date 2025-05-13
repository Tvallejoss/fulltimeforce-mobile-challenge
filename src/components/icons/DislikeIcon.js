import * as React from "react";
import Svg, { G, Circle, Path, Defs, ClipPath } from "react-native-svg";

const DislikeIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={78}
    height={78}
    fill="none"
    {...props}
  >
    <G>
      <Circle cx={39} cy={39} r={29} fill={props.fill || "#D0BFBF"} />
    </G>
    <Path
      fill={props.iconColor || "#fff"}
      d="M48.255 31.485l-6.899 6.898 6.899 6.898-1.74 1.74-6.898-6.898-6.898 6.898-1.74-1.74 6.898-6.898-6.899-6.898 1.74-1.74 6.9 6.898 6.897-6.898 1.74 1.74Z"
    />
    {/* <Defs>
      <ClipPath id="b">
        <Path fill="#fff" d="M24.809 23.575h29.617v29.617H24.809z" />
      </ClipPath>
    </Defs> */}
  </Svg>
);

export default DislikeIcon;
