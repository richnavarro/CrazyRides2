// @flow
import autobind from "autobind-decorator";
import * as React from "react";
import {StyleSheet, View} from "react-native";
import {
    Container, Header, NavigationBar, DetailsBar, Content, List, Button, ActionSheet, StyleGuide, notImplementedYet, Text
} from "../components";
import Communications from 'react-native-communications';
import BullAPI from "./api";
import {Ingredient, Step} from "./components";

import type {NavigationProps} from "../components/";

export default class BullsComp extends React.Component<NavigationProps<{ bullCategoryId: string, bullsId: string }>> {

    render(): React.Node {
        const {navigation} = this.props;
        const {bullCategoryId, bullsId} = navigation.state.params;
        const bullCategory = BullAPI.bullCategories.filter(cat => bullCategoryId === cat.id)[0];
        const bulls = BullAPI.bulls[bullCategory.id].filter(r => r.id === bullsId)[0];
        const cost = `${bulls.cost}`;
        return (
            <Container>
                <Header title={bulls.title} picture={bulls.picture} heightRatio={.85}>
                    <NavigationBar type="transparent" back={bullCategory.title} {...{navigation}} />
                </Header>
                <Text style={styles.caption}>{cost}</Text>
                <Content style={styles.gutter}>
                    <List rows={bulls.instructions} renderRow={(step, i) => <Step index={i + 1} {...{step}} />} />
                    <Button primary label=" Call Now" onPress={() => Communications.phonecall('8007703601', true)} icon={"phone-call"}/>
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
