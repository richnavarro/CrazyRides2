import React, { Component } from 'react';
import { MapView } from 'expo';
import autobind from "autobind-decorator";
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, Dimensions, ImageBackground } from 'react-native';
import { WebBrowser } from 'expo';
import { NavigationHelpers, NavigationBar, Button} from "../components";
import Communications from 'react-native-communications';
import type { NavigationProps } from "../components";
//import { MonoText } from '../components/StyledText';
//import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
//import IonIcon from 'react-native-vector-icons/Ionicons';


const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Contact extends React.Component<NavigationProps<>> {
  state = {
    mapLoaded: false,
    region: {
        longitude: -117.97329,
        latitude: 34.0291996,
        longitudeDelta: 0.01,
        latitudeDelta: 0.025
    }
  }
  componentDidMount(){
    this.setState({mapLoaded:true});
  }

  @autobind
  onPress() {
    const {navigation} = this.props;
    NavigationHelpers.logout(navigation);
  }

  render(): React.Node{
    const {onPress} = this;
    const {navigation} = this.props;
    const expanded = true;
    const title = "Contact Us";
    const withGradient = true;
    const rightAction = {
        icon: "log-out",
        onPress
    };

    if(!this.state.mapLoaded){
      return (
          <View style={{flex:1, justifyContent: 'center'}}>
              <ActivityIndicator size="large"/>
          </View>
      );
    }
    return (
            <View style={styles.container}>
                <NavigationBar {...{ navigation, title, rightAction}}/>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>         
                    <View style={styles.getStartedContainer}>
                        <Text style={{color:'black', fontSize:18, fontWeight: 'bold'}}>Customer Service and Sales</Text>
                    </View>


                    <View style={styles.mapContainer}>
                        <MapView
                            style={{height:(SCREEN_WIDTH*.75), width:(SCREEN_WIDTH*.75)}}
                            initialRegion={{
                                longitude: -117.97329,
                                latitude: 34.0291996,
                                longitudeDelta: 0.15,
                                latitudeDelta: 0.05
                            }}
                        >
                        <MapView.Marker
                            coordinate={{                      
                                longitude: -117.97329,
                                latitude: 34.0291996}}
                            title={"CRAZY RIDES"}
                            description={"14825 Proctor Ave, La Puente, CA 91746"}
                            />
                        </MapView>
                    </View>
                    <View style={styles.getStartedContainer}>
                        <Text style={styles.addressText}>{'\n'}14825 Proctor Ave, La Puente, CA 91746</Text>
 
                        <Text style={{color:'black', fontSize:18, fontWeight: 'bold'}}>Hours of Operations:</Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 0}}>
                        <View style={styles.leftHoursContainer} >
                            <Text>Sunday</Text>
                            <Text>Monday</Text>
                            <Text>Tuesday</Text>
                            <Text>Wednesday</Text>
                            <Text>Thursday</Text>
                            <Text>Friday</Text>
                            <Text>Saturday</Text>
                        </View>
                        <View style={styles.hoursContainer} >
                            <Text>Closed</Text>
                            <Text>9am-5pm</Text>
                            <Text>9am-5pm</Text>
                            <Text>9am-5pm</Text>
                            <Text>9am-5pm</Text>
                            <Text>8:30am-3pm</Text>
                            <Text>7:30am-2pm</Text>
                        </View>
                    </View>
                    <View style={styles.socialIcons}>
                        {/*<Text style={styles.socialText}>Click to Visit!</Text>*/}
                        <TouchableOpacity onPress={this._handleFacebookPress}>
                            <Image style={{width: 72, height: 72}} source={require('../assets/images/facebook-logo.png')}/>
                        </TouchableOpacity>
                        <Text style={{fontSize:70, color: 'white'}}>'    '</Text>
                        <TouchableOpacity onPress={this._handleInstagramPress}>
                            <Image style={{width: 65, height: 65}} source={require('../assets/images/ig_logo.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.getStartedContainer}>
                        <Button primary label=" Vist Our Website" onPress={this._handleWebsitePress} icon={"globe"}/>
                        {/* <TouchableOpacity onPress={() => Communications.phonecall('8007703601', true)}>
                            <Text style={styles.phoneText}>(800) 770-3601</Text>
                        </TouchableOpacity> */}
                        <Text>{"\n"}</Text>
                        <Button primary label=" Call Now" onPress={() => Communications.phonecall('8007703601', true)} icon={"phone-call"}/>   
                        {/* <TouchableOpacity onPress={this._handleWebsitePress}>
                            <Text style={styles.helpLinkText}>www.VentaDeToroMecanico.com</Text>
                        </TouchableOpacity> */}
                        
                    </View>
                    
                </ScrollView>
                {/*</ImageBackground>*/}
            </View>

    );
  }

 
  _handleFacebookPress = () => {
    WebBrowser.openBrowserAsync('https://www.facebook.com/david.negrete.90');
  };

  _handleInstagramPress = () => {
    WebBrowser.openBrowserAsync('https://www.instagram.com/crazy.ridesofficial/');
  };

  _handleWebsitePress = () => {
    WebBrowser.openBrowserAsync(
      'http://ventadetoromecanico.com'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  socialIcons:{
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: -15
  },
  mapContainer:{
    flexDirection: 'row', 
    justifyContent: 'center', 
    //marginTop: -3,
    
    //backgroundColor: 'white',
  },
  hoursContainer:{
    width: (SCREEN_WIDTH/2)-3, 
    height: 200, 
    backgroundColor: '#fff', 
    justifyContent: 'center'
  },
  leftHoursContainer:{
    width: (SCREEN_WIDTH/2)-3, 
    height: 200, 
    backgroundColor: '#fff', 
    justifyContent: 'center',
    left:50
  },
  headerText: {
    marginTop:-15,
    marginBottom: 10,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  addressText: {
    marginBottom: 10,
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  socialText: {
    marginTop: 10,
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
    transform: [{ rotate: '-30deg'}],
    width: 70,
  },
  phoneText: {
    //marginBottom: 10,
    marginTop: 0,
    //color: 'white',
    fontSize: 30,
    color: '#18609C',
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 0,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom:-20
  },
  welcomeImage: {
    width: SCREEN_WIDTH,
    resizeMode: 'contain',
    marginTop: -10,
    marginBottom:-20
  },
  getStartedContainer: {
    left:5,
    alignItems: 'center',
    //marginHorizontal: SCREEN_WIDTH-20,
    width: SCREEN_WIDTH-25,
    marginTop:15
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    
    fontSize: 20,
    color: '#FED5C3',
    //lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },

  helpLinkText: {
    fontSize: 20,
    color: '#18609C',
  },
});


