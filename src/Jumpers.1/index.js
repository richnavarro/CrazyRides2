// @flow
import { StackNavigator} from "react-navigation";

import {StackNavigatorOptions} from "../components/Navigation";

import JumpList from "./JumpList";
import JumpListings from "./JumpListings";
import Details from "./Details";

export const JumpNavigator = StackNavigator({
    JumpList: { screen: JumpList },
    JumpListings: { screen: JumpListings },
    Details: { screen: Details }
}, StackNavigatorOptions);
