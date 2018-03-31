// @flow
import autobind from "autobind-decorator";
import * as React from "react";
import {StyleSheet, View} from "react-native";

import {
    Container, Header, NavigationBar, DetailsBar, Content, List, Button, ActionSheet, StyleGuide, notImplementedYet, Text
} from "../components";

import ItemAPI from "./api";
import {Ingredient, Step} from "./components";

import type {NavigationProps} from "../components/";

export default class ItemsComp extends React.Component<NavigationProps<{ itemCategoryId: string, itemsId: string }>> {

    render(): React.Node {
        const {navigation} = this.props;
        const {itemCategoryId, itemsId} = navigation.state.params;
        const itemCategory = ItemAPI.itemCategories.filter(cat => itemCategoryId === cat.id)[0];
        const items = ItemAPI.items[itemCategory.id].filter(r => r.id === itemsId)[0];
        const cost = `${items.cost}`;
        return (
            <Container>
                <Header title={items.title} picture={items.picture} heightRatio={.85}>
                    <NavigationBar type="transparent" back={itemCategory.title} {...{navigation}} />
                </Header>
                <Text style={styles.caption}>{cost}</Text>
                <Content style={styles.gutter}>
                    <List rows={items.instructions} renderRow={(step, i) => <Step index={i + 1} {...{step}} />} />
                    <Button primary label=" Call Now" onPress={this.toggleIngredientList} icon={"phone-call"}/>
                </Content>
            </Container>
        );
    }

}

const styles = StyleSheet.create({
    gutter: {
        padding: StyleGuide.spacing.small
    },
    caption: {
        padding: StyleGuide.spacing.tiny
    }
});
