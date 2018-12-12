import React, { Component } from 'react';

import {
  AppRegistry,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,ScrollView,Alert
} from 'react-native';
import styles from '../Style/Style'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {TextInputLayout} from 'rn-textinputlayout';
import RF from "react-native-responsive-fontsize"
import ResponsiveImage from 'react-native-responsive-image'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CodeInput from 'react-native-confirmation-code-input';
import TimerCountdown from 'react-native-timer-countdown';
import apis from '../apis/index'

export default class example extends Component {

  constructor(props) {
    super(props);
    this.state = {
      code: '',time:500
    };
  }
  
  handlePress(code) {
    if(code == ""){
      return null;
    }else{
      apis.OTP_SignUP(GLOBAL.mobile,code)
      .then((responseJson) => {
        if(responseJson.success === false){
          GLOBAL.token = responseJson.token;
          GLOBAL.Auth_token = responseJson.data[0].auth_tokan
          if(!responseJson.data[0].is_password)
          {
            this.props.navigation.navigate('AddDetails');
          }else{
            this.props.navigation.navigate('SignIn');
            Alert.alert("Mobile Number already registered")
          }
        }else{
          this.props.navigation.navigate('AddDetails');
          GLOBAL.token = responseJson.token;
          console.log(responseJson)
        }
      })
      .catch((error) => {
        console.error(error);
        Alert.alert(error)
      });
    }
  }

_resend_OTP = async () =>{
  apis.Resend_OTP(GLOBAL.mobile)
  .then((responseJson) => {
   console.log(GLOBAL.mobile)
   this.setState({ time : 500 })
  })
  .catch((error) => {
    console.error(error);
    Alert.alert(error)
  });
}
  render() {
    return (
    <KeyboardAwareScrollView  contentContainerStyle={styles.container}
      keyboardShouldPersistTaps='handled'
    >      
        <Text style={[styles.text,{fontSize:RF(3.5),fontFamily:'Muli-ExtraBold',marginVertical:hp("5%"),marginRight:wp("35%")}]}>Verify to continue</Text>
        <View style={[styles.box_SignUp,{marginVertical:hp("2%"),height:hp("20%")}]}>
          <Text style={styles.text}>Enter OTP sent to +91-{GLOBAL.mobile}</Text>
          <View style={{alignItems:"flex-start",flexDirection:"row",justifyContent:"space-between"}}>
          <View style={{marginHorizontal:wp("15%"),marginTop:hp("2%")}}> 
            <CodeInput
              ref="codeInputRef1"
              // secureTextEntry
              className={'border-b'}
              space={10}
              size={30}
              inputPosition='left'
              onFulfill={(code) => this.handlePress(code)}
              codeLength={4}
              activeColor="rgb(255,164,0)"
              inactiveColor="rgb(176,176,176)"
              keyboardType="numeric"
            />
            </View>
            <View style={{marginRight:wp("15%"),marginTop:hp("2%")}}>
            <TimerCountdown
                        initialSecondsRemaining={(this.state.time)*60}
                        allowFontScaling={true}
                        style={{ fontSize:RF(2),marginTop:hp("2%"),color:"rgb(176,176,176)"}}
                    />
                  <TouchableOpacity onPress={this._resend_OTP.bind(this)}>
                  <Text style={[styles.text,{color:"rgb(255,164,0)",fontSize:RF(1.9)}]}>Resend OTP</Text>
                  </TouchableOpacity>
              </View>
          </View>
        </View>
        {/* onPress={() => {this.props.navigation.navigate('Crea_pass')}} */}
        <View style={{marginBottom:hp("25%")}}>
          <TouchableOpacity style={styles.button} onPress={this.handlePress(this.state.code)}>
          <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
      </View>
</KeyboardAwareScrollView>    );
  }
}

AppRegistry.registerComponent('example', () => example);

