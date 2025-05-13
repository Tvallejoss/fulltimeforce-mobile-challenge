import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const BackgroundPattern = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    // height={950}
    viewBox="0 0 377 812"
    preserveAspectRatio="xMidYMid slice"
  >
    <Path
      fill="url(#a)"
      d="M97 0c11.461 14.848 29.344 24.942 48.196 24.995 8.127.023 16.244-1.575 24.347-.944 11.224.873 22.039 6.195 29.572 14.549 0 0 5.196 9.781 18.495 32.551 13.3 22.77 38.948 37.95 64.597 32.258 25.649-5.693 35.082.968 35.082.968 8.877 5.194 16.272 14.212 16.443 24.487.166 9.895-6.174 18.728-7.832 28.481-2.726 16.043 8.412 32.3 23.307 38.894 8.469 3.748 17.783 4.815 27.045 3.985V0H97Z"
    />
    <Path
      fill="url(#b)"
      d="M375 811.998H151.13c-4.106-13.729-4.252-28.997.034-42.675 6.54-20.868 23.181-37.334 42.426-41.976 24.348-5.871 50.177 6.193 74.335-.611 17.034-4.799 31.175-18.648 41.125-34.912 6.809-11.138 11.997-23.586 19.985-33.683 11.818-14.934 28.37-23.088 45.965-27.54v181.397Z"
    />
    <Path
      fill="url(#c)"
      d="M0 77.495v25.03c11.744-.475 17.915-6.334 29.66-5.951 9.758.32 18.937 4.41 28.512 6.27 15.195 2.951 31.495.031 44.632-7.999 14.395-8.794 24.365-22.87 35.157-35.685 10.792-12.814 23.83-25.272 40.463-28.565 15.294-3.03 35.87 1.1 49.91-5.566C240.966 17.209 248.695 9.446 258 .03H0v77.464Z"
    />
    <Path
      fill="url(#d)"
      d="M0 532.998c16.811 11.451 28.24 29.318 28.3 48.153.027 8.119-1.783 16.229-1.069 24.325.988 11.213 7.015 22.019 16.473 29.545 0 0 11.075 5.192 36.856 18.479 25.781 13.287 42.968 38.913 36.523 64.538-6.445 25.626 1.096 35.05 1.096 35.05 5.881 8.869 16.091 16.258 27.725 16.429 11.204.166 21.205-6.169 32.248-7.825 18.164-2.724 36.571 8.404 44.037 23.286 4.243 8.461 5.451 17.767 4.511 27.02H0v-279Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={219.312}
        x2={449.839}
        y1={118.546}
        y2={-127.471}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.08} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={197.107}
        x2={549.143}
        y1={700.418}
        y2={788.573}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.016} stopColor="#FFD9E9" stopOpacity={0.08} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.03} />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={88.426}
        x2={72.212}
        y1={25.794}
        y2={127.19}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.04} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.08} />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={134.222}
        x2={-111.649}
        y1={655.2}
        y2={916.291}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.08} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default BackgroundPattern;
