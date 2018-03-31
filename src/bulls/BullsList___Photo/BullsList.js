// @flow
import autobind from "autobind-decorator";
import * as React from "react";
import { ScrollView, StyleSheet, View, Image, StatusBar, Platform } from "react-native";

import { NavigationHelpers, Colors, StyleGuide, Images, Text, withTheme } from "../components";

import Kit from "./Kit";

import type {ThemeProps, ThemeName} from "../components/theme";
import type {NavigationProps} from "../components/Navigation";

const images = require("./images");

class Welcome extends React.Component<ThemeProps & NavigationProps<>> {

    componentWillMount() {
        StatusBar.setBarStyle("dark-content");
        if (Platform.OS === "android") {
            StatusBar.setBackgroundColor("white");
        }
    }

    navigate(themeName: ThemeName) {
        const { navigation, theme } = this.props;
        StatusBar.setBarStyle("light-content");
        if (Platform.OS === "android") {
            StatusBar.setBackgroundColor(Colors[themeName].primary);
        }
        theme.switchColors(Colors[themeName]);
        NavigationHelpers.reset(navigation, themeName);
    }

    render(): React.Node {
        return (
            <View style={styles.container}>
               
                <ScrollView contentContainerStyle={styles.content}>
                    <Kit
                        uri={images.food.uri}
                        preview={images.food.preview}
                    />
                    <Kit

                        uri={images.social.uri}
                        preview={images.food.preview}
                    />
                    <Kit
                        uri={images.music.uri}
                        preview={images.music.preview}
                    />
                    <Kit
                        uri={images.photography.uri}
                        preview={images.photography.preview}
                    />
                    <Kit
                        uri={images.travel.uri}
                        preview={images.travel.preview}
                    />

                    <Kit
                        uri={images.bulls.uri}
                        preview={images.bulls.preview}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    safeHeader: {
        ...StyleGuide.styles.shadow
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: StyleGuide.spacing.small
    },
    logo: {
        width: 50,
        height: 50
    },
    content: {
        paddingVertical: StyleGuide.spacing.small
    }
});

export default withTheme(Welcome);
