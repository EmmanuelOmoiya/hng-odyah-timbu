// import Svg, { Path } from "react-native-svg"

// export default function Product (){
//     return(
//         <Svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><Path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z"></Path></Svg>
//     )
// }

import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

const Product = ({ ...props }: SvgProps) => {
    return(
        <Svg xmlns="http://www.w3.org/2000/svg" stroke="white" width="22" height="24" id="package"><G fill="none" fill-rule="evenodd" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><Path d="m11.89 1.45 8 4A2 2 0 0 1 21 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></Path><Path d="M1.32 6.16 11 11l9.68-4.84M11 22.76V11M6 3.5l10 5"></Path></G></Svg>
    )
};
export default Product;