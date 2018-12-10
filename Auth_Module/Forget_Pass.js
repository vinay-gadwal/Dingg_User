import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Image,ScrollView,Alert
} from 'react-native';
import styles from '../Style/Style'
import apis from '../apis/index';
import Spinner from 'react-native-loading-spinner-overlay';
import Form from 'react-native-form';
import CountryPicker from 'react-native-country-picker-modal';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {TextInputLayout} from 'rn-textinputlayout';
import RF from "react-native-responsive-fontsize"
import ResponsiveImage from 'react-native-responsive-image'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class example extends Component {

  constructor(props) {
    super(props);
    this.state = {
      usermobile: "",
      spinner: false,processing: false,
      country: {
        cca2: 'US',
        callingCode: '1'
      }
    };
  }
  handlePress = async () => {
    if(this.state.usermobile.length == 0)
    {
      Alert.alert("Enter Mobile Number")
    }
    else if(this.state.usermobile.length >= 11 || this.state.usermobile.length <= 9){
        Alert.alert("Size of Mobile Number Should be 10")
    }
    else{
      apis.FORGET_PASS(this.state.usermobile)
      .then((responseJson) => {
        console.log(responseJson)
   GLOBAL.Mobile1 =this.state.usermobile
   if(responseJson.success === true){
   this.props.navigation.navigate('ForgotOtp');
   }
   else{
     Alert.alert(responseJson.message)
   }
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }
 
  render() {
    
    return (
<KeyboardAwareScrollView  contentContainerStyle={styles.container}
  keyboardShouldPersistTaps='handled'
>      
<View style={{paddingVertical:hp("2%")}}>
        <ResponsiveImage source={require('../Image/icon/logo_3.png')} initWidth="110" initHeight="77"/>
        </View>
        <View style={[styles.box_SignUp,{marginTop:hp("3%")}]}>
          <Text style={styles.text}>Enter the registered mobile number</Text>
          <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              <TextInputLayout focusColor="rgb(255,164,0)">

              <Text style={{marginTop:hp("1%"),fontSize: RF(2.2),fontFamily:'Muli-Bold',}}>+91     </Text>
              </TextInputLayout>
              <Text>   </Text>
          <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
          <TextInput
            value={this.state.usermobile}
            onChangeText={usermobile => this.setState({ usermobile })}
            style={[styles.input,{width: wp('52'), height: hp('5%')}]}
            placeholderTextColor="rgb(204,204,204)"
            returnKeyType="done"
            underlineColorAndroid='transparent'
            ref={input => (this.emailInput = input)}
            // onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="numeric"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Enter Mobile Number"
          />
         </TextInputLayout>
          </View>
        </View>
        {/* onPress={() => {this.props.navigation.navigate('Crea_pass')}} */}
        <TouchableOpacity onPress={this.handlePress.bind(this)} style={[styles.button,{width: wp('40'),marginVertical:hp("3%")}]}>
            <Text style={styles.buttonText}>Submit for OTP</Text>
          </TouchableOpacity>

        <View style={{flexDirection:"row",marginVertical:hp("9.5%")}}>
        <Text style={styles.text}>Already have an account? </Text>
        <View style={{flexDirection:"column"}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>
        <Text style={styles.text}>Sign In </Text>
        <Image
          source={require('../Image/icon/Line/rectangle1.png')}
          style={{
            width: wp('12.5%'),
            height: hp('.3%'),marginBottom:hp("1%"),marginTop:hp(".5%")
            // left: 20
          }}
        />
        </TouchableOpacity>
        </View>
        <Text style={styles.text}>here</Text>
        </View>
        <View style={{flexDirection:"column",alignItems:"center",marginVertical:hp("2%")}}>
        <View style={{flexDirection:"row"}}>
        <Image
          source={require('../Image/icon/copyright.png')}
          style={styles.copy_rigth_image}
        />
        <Text style={styles.copy_rigth}> All copyright reserved to </Text>
          </View>
          <Text style={[styles.copy_rigth]}> Vrienden Tech Private Limited 2018 </Text>
          </View>
        {/* <Spinner
          visible={this.state.spinner}
          textContent={'One moment...'}
          textStyle={{ color: '#fff' }} /> */}

</KeyboardAwareScrollView>    );
  }
}

AppRegistry.registerComponent('example', () => example);