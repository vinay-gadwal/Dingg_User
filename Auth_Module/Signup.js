import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  TouchableOpacity,
  View,  Image,Alert
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
const GLOBAL = require('../Component/Color');

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
    this.setState({ processing: true });
    if(this.state.usermobile.length == 0)
    {
      Alert.alert("Enter Mobile Number")
      this.setState({ processing: false, loginText: 'Successful!' });
    }else if(this.state.usermobile.length >= 11 || this.state.usermobile.length <= 9){
        Alert.alert("Size of Mobile Number Should be 10")
        this.setState({ processing: false, loginText: 'Successful!' });
    }else{
      apis.SIGN_UP(this.state.usermobile)
      .then((responseJson) => {
        this.setState({ processing: false, loginText: 'Successful!' });
        if(responseJson.success === true) {
          GLOBAL.mobile = this.state.usermobile
          this.props.navigation.navigate('SignOtp');
        }else {
          Alert.alert(responseJson.message)
        }
      })
      .catch((error) => {
        console.error(error);
        this.setState({ processing: false, loginText: 'Try Again' });
      });
    }
  }
 
  render() {
    
    return (
<KeyboardAwareScrollView  contentContainerStyle={styles.container}
  keyboardShouldPersistTaps='handled'
>      
      <View style={styles.Padding_verticele_signup}>
        <ResponsiveImage source={GLOBAL.Logo} initWidth={GLOBAL.COLOR.Logo_width} initHeight={GLOBAL.COLOR.Logo_height}/>
        </View>
        <View style={[styles.box_SignUp,styles.margin_3]}>
          <View style={styles.Row}>
              <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE}>

              <Text style={styles.Mobile_no}>+91     </Text>
              </TextInputLayout>
              <Text>   </Text>
          <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
          <TextInput
            value={this.state.usermobile}
            onChangeText={usermobile => this.setState({ usermobile })}
            style={styles.input_mobile}
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
        <TouchableOpacity onPress={this.handlePress.bind(this)} >
        {!this.state.processing ? <View style={styles.button}>
            <Text style={[styles.buttonText]}>Submit for OTP</Text>
            </View>: <ResponsiveImage
                source={require('../Image/new_images/Double_Ring.gif')}
                initWidth={GLOBAL.COLOR.Size_35} initHeight={GLOBAL.COLOR.Size_35}/> 
           }
          </TouchableOpacity>

        <View style={[styles.Row,styles.Padding_verticele_signup,{marginTop:hp("13%")}]}>
        <Text style={styles.text}>Already have an account? </Text>
        <View style={styles.column}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>
        <Text style={styles.text}>Sign In </Text>
        <Image
          source={GLOBAL.TAb_image_yellow}
          style={styles.Line_style}
        />
        </TouchableOpacity>
        </View>
        <Text style={styles.text}>here</Text>
        </View>
        <View style={styles.copy_right_column_Forgot}>
        <View style={styles.Row}>
        <Image
           source={GLOBAL.Copy_right}
           style={styles.copy_rigth_image}
        />
        <Text style={styles.copy_rigth}> All copyright reserved to </Text>
          </View>
          <Text style={[styles.Copy_right_text]}> Vrienden Tech Private Limited 2018 </Text>
          </View>
</KeyboardAwareScrollView>    );
  }
}