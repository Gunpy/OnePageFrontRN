import React from "react";
import {Svg,Path} from "react-native-svg";

export default ({width=22,height=22})=> {
    return (
        <Svg
            fill="none"
            viewBox="0 0 22 22"
        >
            <Path
                stroke="#F5F5F5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M16.1 5.9L5.9 16.1M5.9 5.9l10.2 10.2"
            ></Path>
        </Svg>
    );
}


