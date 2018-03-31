// @flow
import autobind from "autobind-decorator";
import * as React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Image, StatusBar, Platform, ImageBackground } from "react-native";

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

    // @autobind
    // food() {
    //     this.navigate("Food");
    // }

    // @autobind
    // social() {
    //     this.navigate("Social");
    // }

    // @autobind
    // music() {
    //     this.navigate("Music");
    // }

    // @autobind
    // photography() {
    //     this.navigate("Photography");
    // }

    @autobind
    travel() {
        this.navigate("Travel");
    }

    @autobind
    bulls() {
        this.navigate("Bulls");
    }

    @autobind
    jumps() {
        this.navigate("Jumps");
    }

    @autobind
    items() {
        this.navigate("Items");
    }

    @autobind
    contact() {
        this.navigate("Contact");
    }

    render(): React.Node {
        return (
            <ImageBackground
            style={{
              width: '100%',
              height: '100%'
            }}
            source={require('../assets/images/Wood.jpg')}
            >
                <View style={styles.container}>
                    <SafeAreaView style={styles.safeHeader}>
                        <View style={styles.header}>
                            <View>
                                <Text type="footnote" color='white'>Mechanical Bull Rentals and Sales</Text>
                                <Text type="title1" color='white'>Crazy Rides</Text>
                            </View>
                            <Image source={require('../assets/images/bull_icon_white.png')} style={styles.logo} />
                        </View>
                    </SafeAreaView>
                    <ScrollView contentContainerStyle={styles.content}>
                        {/* <Kit
                            uri={images.food.uri}
                            preview={images.food.preview}
                            title="Food"
                            backgroundColor={Colors.Food.primary}
                            onPress={this.food}
                        />
                        <Kit

                            uri={images.social.uri}
                            preview={images.food.preview}
                            title="Social"
                            backgroundColor={Colors.Social.primary}
                            onPress={this.social}
                        />
                        <Kit
                            uri={images.music.uri}
                            preview={images.music.preview}
                            title="Music"
                            backgroundColor={Colors.Music.primary}
                            onPress={this.music}
                        />
                        <Kit
                            uri={images.photography.uri}
                            preview={images.photography.preview}
                            title="Photography"
                            backgroundColor={Colors.Photography.primary}
                            onPress={this.photography}
                        />*/}
                        {/* <Kit
                            uri={images.travel.uri}
                            preview={images.travel.preview}
                            title="Travel"
                            backgroundColor={Colors.Travel.primary}
                            onPress={this.travel}
                        />  */}

                        <Kit
                            uri={images.bulls.uri}
                            preview={images.bulls.preview}
                            title="Bulls"
                            backgroundColor={Colors.Music.primary}
                            onPress={this.bulls}
                        />

                        <Kit
                            uri={images.jumps.uri}
                            preview={images.jumps.preview}
                            title="Jumpers"
                            backgroundColor={Colors.Social.primary}
                            onPress={this.jumps}
                        />

                        <Kit
                            uri={images.items.uri}
                            preview={images.items.preview}
                            title="Party Rentals"
                            backgroundColor={Colors.Photography.primary}
                            onPress={this.items}
                        />

                        <Kit
                            uri={images.contact.uri}
                            preview={images.contact.preview}
                            title="Contact"
                            backgroundColor={Colors.Travel.primary}
                            onPress={this.contact}
                        /> 
                    </ScrollView>
                </View>
            </ImageBackground>
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
        width: 70,
        height: 70
    },
    content: {
        paddingVertical: StyleGuide.spacing.small
    }
});

export default withTheme(Welcome);
