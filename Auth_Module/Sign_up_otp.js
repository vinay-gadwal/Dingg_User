import React, { Component } from 'react';

import {
  Text,
  TextInput,
  TouchableOpacity,
  View,Alert
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
      code:'',time:500,processing: false,
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
    }else{
      apis.OTP_SignUP(GLOBAL.mobile,code)
      .then((responseJson) => {
        this.setState({ processing: false, loginText: 'Successful!' });
        if(responseJson.success === false){
          GLOBAL.token = responseJson.data[0].auth_tokan
          console.log(responseJson.data[0].auth_tokan)
          if(!responseJson.data[0].is_password)
          {
            this.props.navigation.navigate('AddDetails');
          }else{
            this.props.navigation.navigate('SignIn');
            Alert.alert("Mobile Number Already Registered")
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
        this.setState({ processing: false, loginText: 'Try Again' });
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
        <Text style={styles.verify_big_text}>Verify your mobile Number</Text>
        <View style={[styles.box_SignUp]}>
          <Text style={styles.text}>Enter OTP sent to +91-{GLOBAL.mobile}</Text>
          <View style={styles.Row}>
          <View style={styles.Otp}> 
            <CodeInput
              ref="codeInputRef1"
              // secureTextEntry
              className={'border-b'}
              space={10}
              size={30}
              inputPosition='left'
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
        {/* <TouchableOpacity onPress={this.otp_verified}>
      {!this.state.processing ? <View style={styles.button}>
      <Text style={[styles.buttonText]}>Next</Text>
      </View>: <ResponsiveImage
        source={GLOBAL.Loader}
        initWidth={GLOBAL.COLOR.Size_75} initHeight={GLOBAL.COLOR.Size_75}/>   
      }            
      </TouchableOpacity> */}
       <TouchableOpacity style={styles.button} onPress={this.otp_verified}>
      <Text style={[styles.buttonText]}>Next</Text>          
      </TouchableOpacity>
      </KeyboardAwareScrollView>    );
  }
}
