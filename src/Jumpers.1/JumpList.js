// @flow
import autobind from "autobind-decorator";
import * as React from "react";

import {Card, Feed, NavigationHelpers} from "../components";

import JumpAPI from "./api";
import type {JumpCategory} from "./api";

import type {NavigationProps} from "../components";

export default class JumpsList extends React.Component<NavigationProps<>> {

    @autobind
    renderItem(jumpCategory: JumpCategory): React.Node {
        const {navigation} = this.props;
        return <Card {...jumpCategory} onPress={() => navigation.navigate("JumpListings", { jumpCategoryId: jumpCategory.id})} />;
    }

    @autobind
    onPress() {
        const {navigation} = this.props;
        NavigationHelpers.logout(navigation);
    }

    render(): React.Node {
        const {renderItem, onPress} = this;
        const {navigation} = this.props;
        const data = JumpAPI.jumpCategories;
        const title = "Jumpers";
        const rightAction = {
            icon: "log-out",
            onPress
        };
        return (
            <Feed {...{data, renderItem, title, navigation, rightAction}} />
        );
    }
}
