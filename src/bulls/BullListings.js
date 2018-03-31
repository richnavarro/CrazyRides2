// @flow
import autobind from "autobind-decorator";
import * as React from "react";
import {ImageBackground} from "react-native";
import {Card, Feed} from "../components";
import BullAPI from "./api";

import type {Bull} from "./api";
import type {NavigationProps} from "../components";

export default class CategoryComp extends React.Component<NavigationProps<{ bullCategoryId: string }>> {

    @autobind
    renderItem(bulls: Bulls): React.Node {
        const {navigation} = this.props;
        const {bullCategoryId} = navigation.state.params;
        //const description = `${recipe.people} ${recipe.people > 1 ? "people" : "person"} · ${recipe.minutes} minutes`;
        return (
            <Card
                height={200}
                onPress={() => navigation.navigate("Details", { bullCategoryId, bullsId: bulls.id })}
                //{...{description}}
                {...bulls}
            />
        );
    }

    render(): React.Node {
        const {renderItem} = this;
        const {navigation} = this.props;
        const {bullCategoryId} = navigation.state.params;
        const data = BullAPI.bulls[bullCategoryId];
        const {title} = BullAPI.bullCategories.filter(bullCategory => bullCategory.id === bullCategoryId)[0];
        const back = "All Bulls";
        return (            
            <ImageBackground
                style={{
                width: '100%',
                height: '100%'
                }}
                source={require('../assets/images/Wood.jpg')}
            >
                <Feed {...{data, renderItem, title, navigation, back}} />
            </ImageBackground>
        );
    }
}
