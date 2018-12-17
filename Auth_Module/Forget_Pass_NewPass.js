import React, { Component } from "react";
import {
  AppRegistry,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,Alert
} from "react-native";
import styles from '../Style/Style'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {TextInputLayout} from 'rn-textinputlayout';
import ResponsiveImage from 'react-native-responsive-image'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import apis from '../apis/index'
const GLOBAL = require('../Component/Color');

export default class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Old_pass:"",
      new_pass: "",
      hidePassword:"true"
    };
  }

  handlePress(){  
    apis.Reset_Pass(GLOBAL.Mobile1, this.state.new_pass)
      .then((responseJson) => {
        console.log(responseJson)
        if(responseJson.success === true){
          this.props.navigation.navigate('SignIn');
        }
        else{
          Alert.alert(responseJson.message)
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  Password_Validate = () =>
  {
     if(this.state.Old_pass === this.state.new_pass){
        {this.handlePress()}
      }
      else{
        this.setState({new_pass:""})
        Alert.alert("Confirm Password is Different")
      }
  }

  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  render() {
    return (
<KeyboardAwareScrollView  contentContainerStyle={styles.container}
  keyboardShouldPersistTaps='handled'
>
    <View style={styles.Padding_verticele}>
        <ResponsiveImage source={GLOBAL.Logo} initWidth={GLOBAL.COLOR.Logo_width} initHeight={GLOBAL.COLOR.Logo_height}/>
        </View>
                <View style={[styles.box]}>
        <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
          <TextInput
            value={this.state.new_pass}
            onChangeText={new_pass => this.setState({ new_pass })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.input}
            placeholder="Enter New Password"
            returnKeyType="next"
             secureTextEntry
          />
          </TextInputLayout>
          <Text></Text>
          <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
           <TextInput
            value={this.state.Old_pass}
            onChangeText={Old_pass => this.setState({ Old_pass })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.input}
            placeholder="Confirm Password"
            returnKeyType="next"
             secureTextEntry
          />
        </TextInputLayout>
    </View>
        <TouchableOpacity onPress={this.Password_Validate} style={[styles.button,{width: wp('25%'),marginTop:hp("4%")}]} >
        <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <View style={styles.copy_right_column_signup}>
        <View style={styles.Row}>
        <Image
           source={GLOBAL.Copy_right}
           style={styles.copy_rigth_image}
        />
        <Text style={styles.copy_rigth}> All copyright reserved to </Text>
          </View>
          <Text style={[styles.copy_rigth]}> Vrienden Tech Private Limited 2018 </Text>
          </View>
</KeyboardAwareScrollView>
    );
  }
}