// @flow
import autobind from "autobind-decorator";
import * as React from "react";

import {Card, Feed, NavigationHelpers} from "../components";

import BullAPI from "./api";
import type {BullCategory} from "./api";

import type {NavigationProps} from "../components";

export default class BullsList extends React.Component<NavigationProps<>> {

    @autobind
    renderItem(bullCategory: BullCategory): React.Node {
        const {navigation} = this.props;
        return <Card {...bullCategory} onPress={() => navigation.navigate("BullListings", { bullCategoryId: bullCategory.id})} />;
    }

    @autobind
    onPress() {
        const {navigation} = this.props;
        NavigationHelpers.logout(navigation);
    }

    render(): React.Node {
        const {renderItem, onPress} = this;
        const {navigation} = this.props;
        const data = BullAPI.bullCategories;
        const title = "Bulls";
        const rightAction = {
            icon: "log-out",
            onPress
        };
        return (
            <Feed {...{data, renderItem, title, navigation, rightAction}} />
        );
    }
}
