import React from "react";
import {Svg,Path} from "react-native-svg";

export default ({width=14,height=8}) => {
    return (
        <Svg
            fill="none"
            viewBox="0 0 14 8"
        >
            <Path
                stroke="#8C93A2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7L7 1 1 7"
            ></Path>
        </Svg>
    );
}
