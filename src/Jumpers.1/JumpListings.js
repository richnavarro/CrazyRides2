// @flow
import autobind from "autobind-decorator";
import * as React from "react";

import {Card, Feed} from "../components";
import JumpAPI from "./api";

import type {Jump} from "./api";
import type {NavigationProps} from "../components";

export default class CategoryComp extends React.Component<NavigationProps<{ jumpCategoryId: string }>> {

    @autobind
    renderItem(jumps: Jumps): React.Node {
        const {navigation} = this.props;
        const {jumpCategoryId} = navigation.state.params;
        //const description = `${recipe.people} ${recipe.people > 1 ? "people" : "person"} · ${recipe.minutes} minutes`;
        return (
            <Card
                height={200}
                onPress={() => navigation.navigate("Details", { jumpCategoryId, jumpsId: jumps.id })}
                //{...{description}}
                {...jumps}
            />
        );
    }

    render(): React.Node {
        const {renderItem} = this;
        const {navigation} = this.props;
        const {jumpCategoryId} = navigation.state.params;
        const data = JumpAPI.jumps[jumpCategoryId];
        const {title} = JumpAPI.jumpCategories.filter(jumpCategory => jumpCategory.id === jumpCategoryId)[0];
        const back = "All Jumpers";
        return (
            <Feed {...{data, renderItem, title, navigation, back}} />
        );
    }
}
