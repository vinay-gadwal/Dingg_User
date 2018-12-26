import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,Text,
  View,
} from 'react-native';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('ticket');
    const userTokenOTP = await AsyncStorage.getItem('OTPticket');
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    GLOBAL.token=userTokenOTP
    if(userTokenOTP != undefined){
        this.props.navigation.navigate(userTokenOTP ? 'AddDetails' : 'SignIn');
    }
    else{
    this.props.navigation.navigate(userToken ? 'Home' : 'SignIn');
    }
    // this.props.navigation.navigate(userTokenOTP ? 'Crea_pass' : 'SignIn');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <Text style={{ fontSize:3, 
        fontFamily:"Muli-ExtraBold",
        justifyContent:"flex-start",
        color:'#ffa400',
        }}>Loading...</Text>
      </View>
    );
  }
}
