// @flow
import {StackNavigator} from "react-navigation";

import {StackNavigatorOptions} from "../components/Navigation";

import Contact from "./contact";

export const ContactNavigator = StackNavigator({
    Contact: { screen: Contact },
}, StackNavigatorOptions);
