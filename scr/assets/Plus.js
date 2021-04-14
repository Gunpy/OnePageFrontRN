import React from "react";
import {Svg,Path} from "react-native-svg";

export default ({width=25,height=24}) => {
    return (
        <Svg
            fill="none"
            viewBox="0 0 25 24"
        >
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12.596 5v14M5.629 12h13.934"
            ></Path>
        </Svg>
    );
}
