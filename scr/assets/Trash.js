import React from "react";
import {Svg,Path} from "react-native-svg";

export default ({width=24,height=24})=>{
    return (
        <Svg
            fill="none"
            viewBox="0 0 24 24"
        >
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14zM10 11v6M14 11v6"
            ></Path>
        </Svg>
    );
}
