import React from "react";
import {Svg,Path} from "react-native-svg";

export default ({width=6,height=12})=>{
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
                d="M1 1l6 6 6-6"
            ></Path>
        </Svg>
    );
}

