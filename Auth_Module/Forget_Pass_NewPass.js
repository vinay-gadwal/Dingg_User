import React, { Component } from "react";
import {
  AppRegistry,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,ScrollView
} from "react-native";
import styles from '../Style/Style'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {TextInputLayout} from 'rn-textinputlayout';
import ResponsiveImage from 'react-native-responsive-image'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      new_pass:"",
      password: "",
      hidePassword:"true"
    };
    
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
<View style={{paddingVertical:hp("2%")}}>
        <ResponsiveImage source={require('../Image/icon/logo_3.png')} initWidth="130" initHeight="90"/>
        
        </View>
                <View style={[styles.box,{ height: hp('30%'),marginTop:"3%"}]}>
        <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
          <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.input}
            placeholder="Enter New Password"
            placeholderTextColor="rgb(204,204,204)"
            returnKeyType="next"
             secureTextEntry
          />
          </TextInputLayout>
          <Text></Text>
          <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
           <TextInput
            value={this.state.new_pass}
            onChangeText={new_pass => this.setState({ new_pass })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="rgb(204,204,204)"
            returnKeyType="next"
             secureTextEntry
          />
        </TextInputLayout>
    </View>
    <View style={{marginBottom:"15%",marginTop:hp("5%")}}> 
        <TouchableOpacity style={[styles.button,{width: wp('25%'),}]} onPress={() => {this._getSubmitAction;this.props.navigation.navigate('SignIn')}}>
        <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row",marginTop:hp("5%")}}>
        <Image
          source={require('../Image/icon/copyright.png')}
          style={styles.copy_rigth_image}
        />
        <Text style={styles.copy_rigth}> All copyright reserved to </Text>
          </View>
          <Text style={[styles.copy_rigth]}> Vrienden Tech Private Limited 2018 </Text>
</KeyboardAwareScrollView>
    );
  }
}

AppRegistry.registerComponent("Login", () => Login);
