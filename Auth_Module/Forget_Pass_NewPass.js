import React, { Component } from "react";
import {
  AppRegistry,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,Alert,NetInfo
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
      hidePassword:"true",processing: false,
    };
  }
  handlePress(){  
    NetInfo.isConnected.fetch().done((isConnected) => {
      if(isConnected){
        this.setState({ processing: true });
        apis.Reset_Pass(GLOBAL.Mobile1, this.state.new_pass)
          .then((responseJson) => {
            this.setState({ processing: false, loginText: 'Successful!' });
            console.log(responseJson)
            if(responseJson.success === true){
              Alert.alert(responseJson.message)
              this.setState({ Old_pass:"" });
              this.setState({ new_pass:"" });
              this.props.navigation.navigate('SignIn');
            }
            else{
              Alert.alert(responseJson.message)
              this.setState({ processing: false, loginText: 'Successful!' });
            }
          })
          .catch((error) => {
            console.error(error);
            this.setState({ processing: false, loginText: 'Try Again' });
          });
      }else{
Alert.alert("Please check your internet connection")
      }
    });
  } 
  Password_Validate = () =>
  { 
    if(this.state.Old_pass.trim() === "" && this.state.new_pass.trim() === ""){
      Alert.alert("Enter the new password and confirm password")
  }  else if(this.state.Old_pass.trim() === ""){ 
    Alert.alert("Enter the confirm password")
  }
  else if(this.state.Old_pass.trim() !== this.state.new_pass.trim()){
    Alert.alert("Password and Confirm Password Should be same")
  }
  else if(this.state.Old_pass.trim() === this.state.new_pass.trim()){
        {this.handlePress()}
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
    <View style={styles.padding_vertical_3}>
        <ResponsiveImage source={GLOBAL.Logo} initWidth={GLOBAL.COLOR.Logo_width} initHeight={GLOBAL.COLOR.Logo_height}/>
        </View>
                <View style={[styles.box,styles.Padding_verticele,{paddingBottom:hp("5%")}]}>
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
        {/* <TouchableOpacity onPress={this.Password_Validate} >
        {!this.state.processing ? <View style={styles.button}>
      <Text style={[styles.buttonText]}>Submit</Text>
      </View>: <ResponsiveImage
           source={GLOBAL.Loader}
           initWidth={GLOBAL.COLOR.Size_75} initHeight={GLOBAL.COLOR.Size_75}/>  
      }        
       </TouchableOpacity> */}
       <TouchableOpacity style={styles.button} onPress={this.Password_Validate} >
      <Text style={[styles.buttonText]}>Submit</Text>     
       </TouchableOpacity>
        <View style={styles.copy_right_column_signup}>
        <View style={styles.Row}>
        <ResponsiveImage style={styles.copy_rigth_image}
           source={GLOBAL.Copy_right}
           initWidth={GLOBAL.COLOR.Size_12} initHeight={GLOBAL.COLOR.Size_12}
        />
        <Text style={styles.copy_rigth}> All copyright reserved to </Text>
          </View>
          <Text style={[styles.Copy_right_text]}> Vrienden Tech Private Limited 2018 </Text>
          </View>
</KeyboardAwareScrollView>
    );
  }
}