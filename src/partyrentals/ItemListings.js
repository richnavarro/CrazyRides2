// @flow
import autobind from "autobind-decorator";
import * as React from "react";

import {Card, Feed} from "../components";
import ItemAPI from "./api";

import type {Item} from "./api";
import type {NavigationProps} from "../components";

export default class CategoryComp extends React.Component<NavigationProps<{ itemCategoryId: string }>> {

    @autobind
    renderItem(items: Items): React.Node {
        const {navigation} = this.props;
        const {itemCategoryId} = navigation.state.params;
        //const description = `${recipe.people} ${recipe.people > 1 ? "people" : "person"} · ${recipe.minutes} minutes`;
        return (
            <Card
                height={200}
                onPress={() => navigation.navigate("Details", { itemCategoryId, itemsId: items.id })}
                //{...{description}}
                {...items}
            />
        );
    }

    render(): React.Node {
        const {renderItem} = this;
        const {navigation} = this.props;
        const {itemCategoryId} = navigation.state.params;
        const data = ItemAPI.items[itemCategoryId];
        const {title} = ItemAPI.itemCategories.filter(itemCategory => itemCategory.id === itemCategoryId)[0];
        const back = "All Items";
        return (
            <Feed {...{data, renderItem, title, navigation, back}} />
        );
    }
}
