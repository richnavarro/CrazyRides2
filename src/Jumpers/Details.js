// @flow
import autobind from "autobind-decorator";
import * as React from "react";
import {StyleSheet, View} from "react-native";

import {
    Container, Header, NavigationBar, DetailsBar, Content, List, Button, ActionSheet, StyleGuide, notImplementedYet, Text
} from "../components";

import JumpAPI from "./api";
import {Ingredient, Step} from "./components";

import type {NavigationProps} from "../components/";

export default class JumpsComp extends React.Component<NavigationProps<{ jumpCategoryId: string, jumpsId: string }>> {

    render(): React.Node {
        const {navigation} = this.props;
        const {jumpCategoryId, jumpsId} = navigation.state.params;
        const jumpCategory = JumpAPI.jumpCategories.filter(cat => jumpCategoryId === cat.id)[0];
        const jumps = JumpAPI.jumps[jumpCategory.id].filter(r => r.id === jumpsId)[0];
        const cost = `${jumps.cost}`;
        return (
            <Container>
                <Header title={jumps.title} picture={jumps.picture} heightRatio={.85}>
                    <NavigationBar type="transparent" back={jumpCategory.title} {...{navigation}} />
                </Header>
                <Text style={styles.caption}>{cost}</Text>
                <Content style={styles.gutter}>
                    <List rows={jumps.instructions} renderRow={(step, i) => <Step index={i + 1} {...{step}} />} />
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
