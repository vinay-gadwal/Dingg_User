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
const GLOBAL = require('../Component/Color');

export default class example extends Component {

  constructor(props) {
    super(props);
    this.state = {
      code: '',switchThreeValue: true,time:500,processing: false,
    };
  }
otp_verified = () =>{
  if(this.state.code == ''){
    Alert.alert("Please Enter Valid OTP")
  }
}
  handlePress(code) {
    this.setState({ processing: true });
    if(code == ""){
      return null;
    }
    else{
      apis.OTP_FORGOT(GLOBAL.Mobile1,code)
      .then((responseJson) => {
        this.setState({ processing: false, loginText: 'Successful!' });
        if(responseJson.success === true){
            this.props.navigation.navigate('For_New_Pass');
            GLOBAL.token = responseJson.token;
            Alert.alert(responseJson.message)
        }
        else{
          Alert.alert(responseJson.message)
        }
      })
      .catch((error) => {
        console.error(error);
        Alert.alert(error)
        this.setState({ processing: false, loginText: 'Try Again' });
      });
    }
  }

_resend_OTP = async () =>{
  apis.Resend_OTP(GLOBAL.Mobile1)
  .then((responseJson) => {
   console.log(responseJson)
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
        <Text style={styles.verify_big_text}>Verify to continue</Text>
        <View style={[styles.box_SignUp]}>
          <Text style={styles.text}>Enter OTP sent to +91-{GLOBAL.Mobile1}</Text>
          <View style={styles.Row}>
          <View style={styles.Otp}>
            <CodeInput
              ref="codeInputRef1"
              // secureTextEntry
              className={'border-b'}
              space={10}
              size={30}
              inputPosition='left'
              onFulfill={(code) => this._onFulfill(code)}
              onFulfill={(code) => this.handlePress(code)}
              codeLength={4}
              activeColor={GLOBAL.COLOR.ORANGE}
              inactiveColor={GLOBAL.COLOR.GRAY}
              keyboardType="numeric"
            />
            </View>
            <View style={styles.otp_timer}>
            <TimerCountdown
                        initialSecondsRemaining={(this.state.time)*60}
                        allowFontScaling={true}
                        style={styles.Timer_countdown}
                    />
                  <TouchableOpacity onPress={this._resend_OTP.bind(this)}>
        <Text style={[styles.orange_text]}>Resend OTP</Text>               
    </TouchableOpacity>
              </View>
          </View>
        </View>
        {/* onPress={() => {this.props.navigation.navigate('Crea_pass')}} */}
          <TouchableOpacity onPress={this.otp_verified}>
          {!this.state.processing ? <View style={styles.button}>
          <Text style={[styles.buttonText]}>Next</Text>
          </View>: <ResponsiveImage
                source={GLOBAL.Loader}
                initWidth={GLOBAL.COLOR.Size_75} initHeight={GLOBAL.COLOR.Size_75}/> 
          }           
          </TouchableOpacity>
</KeyboardAwareScrollView>    );
  }
}