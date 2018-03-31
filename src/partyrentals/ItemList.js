// @flow
import autobind from "autobind-decorator";
import * as React from "react";

import {Card, Feed, NavigationHelpers} from "../components";

import ItemAPI from "./api";
import type {ItemCategory} from "./api";

import type {NavigationProps} from "../components";

export default class ItemsList extends React.Component<NavigationProps<>> {

    @autobind
    renderItem(itemCategory:ItemCategory): React.Node {
        const {navigation} = this.props;
        return <Card {...itemCategory} onPress={() => navigation.navigate("ItemListings", { itemCategoryId: itemCategory.id})} />;
    }

    @autobind
    onPress() {
        const {navigation} = this.props;
        NavigationHelpers.logout(navigation);
    }

    render(): React.Node {
        const {renderItem, onPress} = this;
        const {navigation} = this.props;
        const data = ItemAPI.itemCategories;
        const title = "Party Rentals";
        const rightAction = {
            icon: "log-out",
            onPress
        };
        return (
            <Feed {...{data, renderItem, title, navigation, rightAction}} />
        );
    }
}
