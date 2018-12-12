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
    fetch('http://18.217.123.119:3000/api/user_reset_password', {
        method: 'POST',
        headers: {
          "content-type": "application/json",
          "cache-control": "no-cache",
          "postman-token": "272c8d92-9bf6-b32b-2e0f-c780530790bf"
        },
        body: JSON.stringify({
          mobile : GLOBAL.Mobile1,
          password : this.state.new_pass
        })
  })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        // if(responseJson.success === true){
        //   this.props.navigation.navigate('SignIn');
        // }
        // else{
        //   Alert.alert(responseJson.message)
        // }
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
<View style={{paddingVertical:hp("2%")}}>
        <ResponsiveImage source={require('../Image/icon/logo_3.png')} initWidth="130" initHeight="90"/>
        
        </View>
                <View style={[styles.box,{ height: hp('30%'),marginTop:"3%"}]}>
        <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
          <TextInput
            value={this.state.new_pass}
            onChangeText={new_pass => this.setState({ new_pass })}
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
            value={this.state.Old_pass}
            onChangeText={Old_pass => this.setState({ Old_pass })}
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
        <TouchableOpacity onPress={this.Password_Validate} style={[styles.button,{width: wp('25%'),}]} >
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
