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
// import Frisbee from 'frisbee';
// import Spinner from 'react-native-loading-spinner-overlay';
import Form from 'react-native-form';
import CountryPicker from 'react-native-country-picker-modal';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {TextInputLayout} from 'rn-textinputlayout';
import RF from "react-native-responsive-fontsize"
import ResponsiveImage from 'react-native-responsive-image'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// const api = new Frisbee({
//   baseURI: 'http://localhost:3000',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   }
// });

const MAX_LENGTH_CODE = 6;
const MAX_LENGTH_NUMBER = 20;

// if you want to customize the country picker
const countryPickerCustomStyles = {};

// your brand's theme primary color
const brandColor = 'rgb(255,163,0)';


export default class example extends Component {

  constructor(props) {
    super(props);
    this.state = {
      enterCode: false,
    //   spinner: false,
      country: {
        cca2: 'US',
        callingCode: '1'
      }
    };
  }

  _getCode(){

    // this.setState({ spinner: true });

    setTimeout(async () => {

      try {

        const res = await api.post('/v1/verifications', {
          body: {
            ...this.refs.form.getValues(),
            ...this.state.country
          }
        });

        if (res.err) throw res.err;

        this.setState({
          spinner: false,
          enterCode: true,
          verification: res.body
        });
        this.refs.form.refs.textInput.setNativeProps({ text: '' });

        setTimeout(() => {
          Alert.alert('Sent!', "We've sent you a verification code", [{
            text: 'OK',
            onPress: () => this.refs.form.refs.textInput.focus()
          }]);
        }, 100);

      } catch (err) {
        // <https://github.com/niftylettuce/react-native-loading-spinner-overlay/issues/30#issuecomment-276845098>
        this.setState({ spinner: false });
        setTimeout(() => {
          Alert.alert('Oops!', err.message);
        }, 100);
      }

    }, 100);

  }

  _verifyCode = () => {

    this.setState({ spinner: true });

    setTimeout(async () => {

      try {

        const res = await api.put('/v1/verifications', {
          body: {
            ...this.refs.form.getValues(),
            ...this.state.country
          }
        });

        if (res.err) throw res.err;

        this.refs.form.refs.textInput.blur();
        // <https://github.com/niftylettuce/react-native-loading-spinner-overlay/issues/30#issuecomment-276845098>
        this.setState({ spinner: false });
        setTimeout(() => {
          Alert.alert('Success!', 'You have successfully verified your phone number');
        }, 100);

      } catch (err) {
        // <https://github.com/niftylettuce/react-native-loading-spinner-overlay/issues/30#issuecomment-276845098>
        this.setState({ spinner: false });
        setTimeout(() => {
          Alert.alert('Oops!', err.message);
        }, 100);
      }

    }, 100);

  }

  _onChangeText = (val) => {
    if (!this.state.enterCode) return;
    if (val.length === MAX_LENGTH_CODE)
    this._verifyCode();
  }

  _tryAgain = () => {
    this.refs.form.refs.textInput.setNativeProps({ text: '' })
    this.refs.form.refs.textInput.focus();
    this.setState({ enterCode: false });
  }

  _getSubmitAction = () => {
    this.state.enterCode ? this._verifyCode() : this._getCode();
  }

  _changeCountry = (country) => {
    this.setState({ country });
    this.refs.form.refs.textInput.focus();
  }

  _renderFooter = () => {

    if (this.state.enterCode)
      return (
        <View>
          <Text style={styles.wrongNumberText} onPress={this._tryAgain}>
            Enter the wrong number or need a new code?
          </Text>
        </View>
      );

    return (
      <View>
        <Text style={styles.disclaimerText}>By tapping "Submi for OTP" above, we will send you an SMS to confirm your phone number. Message &amp; data rates may apply.</Text>
      </View>
    );

  }

  _renderCountryPicker = () => {

    if (this.state.enterCode)
      return (
        <View />
      );

    return (
      <CountryPicker
        ref={'countryPicker'}
        closeable
        style={styles.countryPicker}
        onChange={this._changeCountry}
        cca2={this.state.country.cca2}
        styles={countryPickerCustomStyles}
        translation='eng'/>
    );

  }

  _renderCallingCode = () => {
    GLOBAL.code=this.state.country.callingCode;

    if (this.state.enterCode)
      return (
        <View />
      );

    return (
      <View style={styles.callingCodeView}>
        <Text style={styles.callingCodeText}>+{this.state.country.callingCode}</Text>
      </View>
    );
      
  }

  render() {

    let headerText = `What's your ${this.state.enterCode ? 'verification code' : 'Enter Mobile Number'}?`
    let buttonText = this.state.enterCode ? 'Verify confirmation code' : 'Submit for OTP';
    let textStyle = this.state.enterCode ? {
      height: 50,
      textAlign: 'center',
      fontSize: 40,
      fontWeight: 'bold',
      fontFamily: 'Courier'
    } : {};

    return (
<KeyboardAwareScrollView  contentContainerStyle={styles.container}
  keyboardShouldPersistTaps='handled'
>      
<View style={{paddingVertical:hp("2%")}}>
        <ResponsiveImage source={require('../Image/icon/logo_3.png')} initWidth="94" initHeight="65"/>
        
        </View>
        <View style={[styles.box_SignUp,{height: hp('19%'),marginTop:hp("3%")}]}>
        {/* <Form ref={'form'} style={styles.form}>

          <View style={{ flexDirection: 'row' }}>

            {this._renderCountryPicker()}
            {this._renderCallingCode()}
              
            <TextInput
              ref={'textInput'}
              name={this.state.enterCode ? 'code' : 'phoneNumber' }
              type={'TextInput'}
              underlineColorAndroid={'transparent'}
              autoCapitalize={'none'}
              autoCorrect={false}
              onChangeText={this._onChangeText}
              placeholder={this.state.enterCode ? '_ _ _ _ _ _' : 'Enter Mobile Number'}
              // keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
              keyboardType="email-address"
            style={[styles.input,{width: wp('52'), height: hp('5%')}]}
              returnKeyType='next'
              autoFocus
             placeholderTextColor="rgb(204,204,204)"
              selectionColor={brandColor}
              maxLength={this.state.enterCode ? 6 : 20}
              onSubmitEditing={this._getSubmitAction} />

          </View>
        </Form> */}
          <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              <TextInputLayout focusColor="rgb(255,164,0)">

              <Text style={{marginTop:"11%",fontSize: RF(2.2),fontFamily:'Muli-Bold',}}>+91     </Text>
              </TextInputLayout>
              <Text>   </Text>
          <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
          <TextInput
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
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
        <View style={{marginBottom:"20%",marginTop:hp("3%")}} >
        <TouchableOpacity style={[styles.button,{width: wp('40'),}]} onPress={() => {this.props.navigation.navigate('AddDetails')}}>
            <Text style={styles.buttonText}>{ buttonText }</Text>
          </TouchableOpacity>

          {/* {this._renderFooter()} */}
          </View>
        <View style={{flexDirection:"row",marginTop:hp("5%")}}>
        <Text style={styles.text}>Already have an account? </Text>
        <View style={{flexDirection:"column"}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>
        <Text style={styles.text}>Sign In </Text>
        <Image
          source={require('../Image/icon/Line/rectangle1.png')}
          style={{
            width: wp('12.5%'),
            height: hp('.3%'),marginBottom:"5%",marginTop:"4%"
            // left: 20
          }}
        />
        </TouchableOpacity>
        </View>
        <Text style={styles.text}>here</Text>
        </View>
        <View style={{flexDirection:"row",marginTop:hp("5%")}}>
        <Image
          source={require('../Image/icon/copyright.png')}
          style={styles.copy_rigth_image}
        />
        <Text style={styles.copy_rigth}> All copyright reserved to </Text>
          </View>
          <Text style={[styles.copy_rigth]}> Vrienden Tech Private Limited 2018 </Text>

        {/* <Spinner
          visible={this.state.spinner}
          textContent={'One moment...'}
          textStyle={{ color: '#fff' }} /> */}

</KeyboardAwareScrollView>    );
  }
}

AppRegistry.registerComponent('example', () => example);