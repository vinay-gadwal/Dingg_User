import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
  Text,
  View,
  TextInput,Alert,AsyncStorage,NetInfo,
  TouchableOpacity,KeyboardAvoidingView,Keyboard,ScrollView
} from "react-native";
import styles from '../Style/Style'
import RF from "react-native-responsive-fontsize"
import ResponsiveImage from 'react-native-responsive-image'
import {TextInputLayout} from 'rn-textinputlayout';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RadioGroup from 'react-native-radio-buttons-group';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import apis from '../apis/index'
import SpinnerButton from 'react-native-spinner-button';
import SplashScreen from 'react-native-splash-screen';


const GLOBAL = require('../Component/Color');

export default class Login extends Component {
  constructor(props)
   {
    super(props);
    this.state = {
      username: "",
      password: '',password_email:'',
      hidePassword:"true",token_saved:"",
      loading: false,processing :false,Mobile_no:"",
      data: [ 
        {
            label: 'Mobile Number',
            value:this.phone(),
            color: GLOBAL.COLOR.ORANGE,
            fontWeight:"bold",
            size: 18,
        },
        {
            label: 'Email ID',
            value:this.email(),
            color: GLOBAL.COLOR.ORANGE,
            size: 18,
        }, 
           
            ],
    };  
  }
  componentWillReceiveProps(){
    this.setState({username:""})
    this.setState({password:""})
  }
  componentDidMount(){
    {this.onPress}
    this.setState({username:""})
    this.setState({password:""})
    NetInfo.isConnected.fetch().done((isConnected) => {
      if(isConnected){
        apis.LOCAL_GET_DATA('ticket').then((value) => {
          if (value) {
            this.setState({ processing: true });
            this.props.navigation.dangerouslyGetParent().navigate('AuthStack');
          }
        }).catch((error) => {
          Alert.alert(error);
          this.setState({ processing: false });
        });
      }else{
Alert.alert("Please check your internet connection")
      }
    });
  }
  forceUpdate
  handlePress = () => {
    console.log(this.state.password)
    NetInfo.isConnected.fetch().done((isConnected) => {
      if(isConnected){
        this.setState({ processing: true });
        apis.LOGIN_API(this.state.username, this.state.password)
          .then((responseJson) => {
            console.log(responseJson)
            this.setState({ processing: false, loginText: 'Successful!' });
            if(responseJson.success === true) {
              apis.LOCAL_SET_DATA('ticket',responseJson.token).then(() => {
              this.props.navigation.navigate('AuthStack');  
              this.setState({ username:"" });
              this.setState({ password:"" });  
              }).catch((error) => {
                console.error(error);
                this.setState({ processing: false });
              });
            } else {
              if(isNaN(this.state.username)){
                Alert.alert("No user registered with this Email.")
              }
              else{
              Alert.alert("No user registered with this mobile number.")
              }
            }
            this.setState({
              loading: false
            });
          })
          .catch((error) => {
            Alert.alert(error)
            this.setState({ processing: false });
          });
      }else{
        Alert.alert("Please check your internet connection")
      }
    });
    }
passwordHandle=(value)=>{
    if (value === " "){
      Alert.alert("Invalid Password")
    }
    else{
     this.setState({password:value});
     console.log(value)
    }
}
// passwordHandle(value){
//   this.setState({
//       password:removeWhiteSpace(value)
//   })
//   // console.log(removeWhiteSpace(value))
//   Alert.alert(removeWhiteSpace(value))
// }
  phone(){
    this.setState({username:""})
    this.setState({password:""})
    return(
      <View style={styles.column}>
      <View style={styles.Row}>
      <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE}>
      <Text style={styles.Mobile_no}>+91     </Text>
      </TextInputLayout>
       <Text>   </Text>
       <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
       <TextInput
        //  value={this.state.username}
         onChangeText={username => this.setState({ username })}
         style={[styles.input_mobile]}
         returnKeyType='done'
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
      <View style={styles.Row}>
      <View></View>
       <View style = { styles.textBoxBtnHolder } > 
       <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE}  labelFontSize={0.1}>
           <TextInput 
             placeholder="Enter Password"
             onChangeText={password => this.setState({ password })}
            // onChange={password => this.passwordHandle(password)}
             underlineColorAndroid = "transparent"
             textContentType='password'
             secureTextEntry
              style = { styles.input }/>
       </TextInputLayout>
</View>
</View>
</View>
    )
  }
  email(){
    this.setState({password:""})
    return(
      <View style={styles.column}>
      <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
       <TextInput
        //  value={this.state.username}
         onChangeText={username => this.setState({ username })}
         style={[styles.input]}
         returnKeyType='next'
         underlineColorAndroid='transparent'
         ref={input => (this.emailInput = input)}
         // onSubmitEditing={() => this.passwordCInput.focus()}
         keyboardType="email-address"
         autoCapitalize="none"
         autoCorrect={false}
         placeholder="Enter Email ID"
       />
      </TextInputLayout>
      <View style = { styles.textBoxBtnHolder } > 
        <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE}  labelFontSize={0.1}>
            <TextInput 
              placeholder="Enter Password"
              onChangeText={password_email => this.setState({ password_email })}
              // onChange={password => this.passwordHandle(password)}
              underlineColorAndroid = "transparent"
              secureTextEntry
               style = { styles.input }/>
        </TextInputLayout>
</View>
</View>
    )
  }
  onPress = data => {[this.setState({ data }),this.setState({username:""}),this.setState({password:""})]}
  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }
  forceUpdate(){
    this.setState({username:""})
  }

  render() {
    let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.email()
    return (
    <KeyboardAwareScrollView  contentContainerStyle={styles.container}
                 keyboardShouldPersistTaps='handled'>
        <View style={styles.padding_vertical_3}>
        <ResponsiveImage source={GLOBAL.Logo} initWidth={GLOBAL.COLOR.Logo_width} initHeight={GLOBAL.COLOR.Logo_height}/>
        </View>
         <View style={[styles.box,{paddingVertical:hp("4.2%")}]}>
         <Text style={[styles.Big_text,styles.margin_left]}>Sign In Using</Text>
         <Text></Text>
         
         <View style={styles.radio_button}>
         <RadioGroup  radioButtons={this.state.data} onPress={this.onPress}  flexDirection='row' />
         </View>
         {selectedButton}
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Forget_password')}}>
          <Text style={[styles.yello_text,{marginLeft:wp("42%")}]}>Forgot Password?</Text>
          </TouchableOpacity>
      </View>
      
          {/* <TouchableOpacity onPress={this.handlePress}  >
          {!this.state.processing ? <View style={styles.button}>
            <Text style={[styles.buttonText]}>Sign In</Text>
            </View>: <ResponsiveImage
                source={GLOBAL.Loader}
                initWidth={GLOBAL.COLOR.Size_75} initHeight={GLOBAL.COLOR.Size_75}/> 
           }
          </TouchableOpacity> */}
            <TouchableOpacity style={styles.button} onPress={this.handlePress}  >
            <Text style={[styles.buttonText]}>Sign In</Text>
          </TouchableOpacity>
      <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AuthStack')}}>
          <Text style={[styles.orange_text]}>Continue without Signing In</Text>
          </TouchableOpacity>
      <View style={[styles.Row,{marginTop:hp("1%")}]}>
        <Text style={styles.text}>Don't have an account? </Text>
        <View style={styles.column}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text style={styles.text}>Sign Up </Text>
            <ResponsiveImage
              source={GLOBAL.TAb_image_yellow}
              style={styles.Line_style}
            />
            </TouchableOpacity>
        </View>
        <Text style={styles.text}>here</Text>
      </View>
      <View style={[styles.copy_right_column]}>
        <View style={[styles.Row]}>
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

