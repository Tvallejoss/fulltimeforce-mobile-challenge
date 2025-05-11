import * as React from "react";
import Svg, { G, Circle, Path, Defs } from "react-native-svg";

const LikeIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={78}
    height={78}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Circle cx={39} cy={39} r={29} fill={props.fill || "#FEB5DB"} />
    </G>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="m36.787 42.447 11.468-11.468L50 32.724 36.787 45.937l-7.043-7.043 1.745-1.745 5.298 5.298Z"
      clipRule="evenodd"
    />
    <Defs></Defs>
  </Svg>
);
export default LikeIcon;
