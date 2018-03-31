// @flow
import { StackNavigator} from "react-navigation";

import {StackNavigatorOptions} from "../components/Navigation";

import ItemList from "./ItemList";
import ItemListings from "./ItemListings";
import Details from "./Details";

export const ItemNavigator = StackNavigator({
    ItemList: { screen: ItemList },
    ItemListings: { screen: ItemListings },
    Details: { screen: Details }
}, StackNavigatorOptions);
