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
      code: '',switchThreeValue: true,time:500
    };
  }
  
  handlePress(code) {
    if(code == ""){
      return null;
    }
    else{
      apis.OTP_SignUP(GLOBAL.mobile,code)
      .then((responseJson) => {
        if(responseJson.success === false){
          Alert.alert(responseJson.message)
        }
        else{
          this.props.navigation.navigate('AddDetails');
          Alert.alert(responseJson.message)
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
  .then((response) => response.json())
  .then((responseJson) => {
   console.log(GLOBAL.mobile)
   this.setState({ time : 500 })
  })
  .catch((error) => {
    console.error(error);
    Alert.alert(error)
  });
}
 _onFulfill(code) {
  // TODO: call API to check code here
  // If code does not match, clear input with: this.refs.codeInputRef1.clear()
  // if (code == "1234") {
  //   Alert.alert(
  //     'Confirmation Code',
  //     'Successful!',
  //     [{text: 'OK'}],
  //     { cancelable: false }
  //   );
  // } else {
  //   Alert.alert(
  //     'Confirmation Code',
  //     'Code not match!',
  //     [{text: 'OK'}],
  //     { cancelable: false }
  //   );
    
  //   this.refs.codeInputRef1.clear();
  // }
}
  render() {
    const {
      switchThreeValue
    } = this.state;
    return (
    <KeyboardAwareScrollView  contentContainerStyle={styles.container}
      keyboardShouldPersistTaps='handled'
    >      
        <Text style={[styles.text,{fontSize:RF(3.5),fontFamily:'Muli-ExtraBold',marginVertical:hp("5%"),marginRight:wp("35%")}]}>Verify to continue</Text>
        <View style={[styles.box_SignUp,{marginVertical:hp("2%"),height:hp("20%")}]}>
          <Text style={styles.text}>Enter OTP sent to +91-{this.state.user}</Text>
          <View style={{alignItems:"flex-start",flexDirection:"row",justifyContent:"space-between"}}>
          <View style={{marginHorizontal:wp("15%"),marginTop:hp("2%")}}> 
            <CodeInput
              ref="codeInputRef1"
              // secureTextEntry
              className={'border-b'}
              space={10}
              size={30}
              inputPosition='left'
              // onFulfill={(code) => this._onFulfill(code)}
              onFulfill={(code) => this.handlePress(code)}
              codeLength={4}
              activeColor="rgb(255,164,0)"
              inactiveColor="rgb(176,176,176)"
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

