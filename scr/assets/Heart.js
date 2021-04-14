import React from "react";
import {Svg,Path} from "react-native-svg";

export default ({width=18,height=17}) => {
    return (
        <Svg
            fill="none"
            viewBox="0 0 18 17"
        >
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15.92 2.757c-.4-.413-.874-.74-1.397-.964a4.19 4.19 0 00-3.296 0 4.3 4.3 0 00-1.397.964L9 3.613l-.83-.856a4.24 4.24 0 00-3.045-1.302A4.24 4.24 0 002.08 2.757 4.517 4.517 0 00.818 5.899c0 1.178.454 2.309 1.262 3.142l.83.856L9 16.182l6.09-6.285.83-.856c.4-.413.717-.902.934-1.442a4.566 4.566 0 000-3.4 4.453 4.453 0 00-.934-1.442v0z"
            ></Path>
        </Svg>
    );
}

