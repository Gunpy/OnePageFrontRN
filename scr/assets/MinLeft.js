import React from "react";
import {Svg,Path} from "react-native-svg";

export default ({width=8,height=14}) => {
    return (
        <Svg
            fill="none"
            viewBox="0 0 8 14"
        >
            <Path
                stroke="#8C93A2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 1L1 7l6 6"
            ></Path>
        </Svg>
    );
}
