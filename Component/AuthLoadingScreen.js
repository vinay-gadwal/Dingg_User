import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,Text,
  View,
} from 'react-native';
import RF from "react-native-responsive-fontsize"

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('ticket');
    const userTokenOTP = await AsyncStorage.getItem('OTPticket');
    const Registered = await AsyncStorage.getItem('Registered');
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    // console.log(Registered)
    // GLOBAL.token=userTokenOTP
    // if(Registered != null){
    //   this.props.navigation.navigate('Home');
    // }else if(userTokenOTP != undefined){
    //     this.props.navigation.navigate(userTokenOTP ? 'AddDetails' : 'SignIn');
    //       GLOBAL.Sign_Token=userTokenOTP
    //   }
    // else{
    // this.props.navigation.navigate(userToken ? 'Home' : 'SignIn');
    // }
    // this.props.navigation.navigate(userTokenOTP ? 'Crea_pass' : 'SignIn');
    this.props.navigation.navigate('AuthStack');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"white"}}>
      <ActivityIndicator />
      <Text style={{ fontSize: RF(3), 
      fontFamily:"Muli-ExtraBold",
      justifyContent:"flex-start",
      color:'#ffa400',
      }}>Loading...</Text>
    </View>
    );
  }
}
