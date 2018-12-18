import React, { Component } from "react";
import {
  AppRegistry,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,KeyboardAvoidingView,ScrollView
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
      Uid:"",
      conf_pass:"",
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
                <View style={[styles.box,{ height: hp('34%'),marginTop:hp("3%")}]}>
        <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
        <TextInput
            value={this.state.Uid}
            onChangeText={Uid => this.setState({ Uid })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={[styles.input]}
            placeholder="User ID"
            placeholderTextColor="rgb(204,204,204)"
            returnKeyType="next"
            //  secureTextEntry
          />
          </TextInputLayout>
          <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
          <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.input}
            placeholder="Enter Password"
            placeholderTextColor="rgb(204,204,204)"
            returnKeyType="next"
             secureTextEntry
          />
          </TextInputLayout>
          <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
          <TextInput
            value={this.state.conf_pass}
            onChangeText={conf_pass => this.setState({ conf_pass })}
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
    <View style={{marginBottom:"10%",marginTop:hp("3%")}}>
        <TouchableOpacity style={[styles.button,{width: wp('50%'),}]} onPress={() => {this._getSubmitAction;this.props.navigation.navigate('AddDetails')}}>
        <Text style={styles.buttonText}>Complete Signup</Text>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:"column",alignItems:"center",marginBottom:hp("3%")}}>
        <View style={{flexDirection:"row"}}>
        <Image
          source={require('../Image/icon/copyright.png')}
          style={styles.copy_rigth_image}
        />
        <Text style={styles.copy_rigth}> All copyright reserved to </Text>
          </View>
          <Text style={[styles.copy_rigth,{paddingVertical:hp(".5%")}]}> Vrienden Tech Private Limited 2018 </Text>
          </View>

</KeyboardAwareScrollView>
    );
  }
}