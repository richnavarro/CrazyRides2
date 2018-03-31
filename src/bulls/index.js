// @flow
import {StackNavigator} from "react-navigation";

import {StackNavigatorOptions} from "../components/Navigation";

import BullsList from "./BullsList";
import BullListings from "./BullListings";
import Details from "./Details";


export const RidesNavigator = StackNavigator({
    BullsList: { screen: BullsList },
    BullListings: { screen: BullListings },
    Details: { screen: Details }
}, StackNavigatorOptions);
