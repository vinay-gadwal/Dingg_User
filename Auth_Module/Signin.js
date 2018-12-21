import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
  AppRegistry,
  Image,
  Text,
  View,
  TextInput,Alert,
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

const GLOBAL = require('../Component/Color');

export default class Login extends Component {
  constructor(props)
   {
    super(props);
    this.state = {
      username: "",
      password: '',
      hidePassword:"true",
      loading: false,processing :false,
      data: [ 
        {
            label: 'Mobile Number',
            value:this.phone(),
            color: GLOBAL.COLOR.ORANGE,
            fontWeight:"bold"
        },
        {
            label: 'Email ID',
            value:this.email(),
            color: GLOBAL.COLOR.ORANGE,
        }, 
           
            ],
    };  
  }
  componentDidMount(){
    // this.props.navigation.navigate('AuthStack')
  }
  handlePress = () => {
    this.setState({ processing: true });
    apis.LOGIN_API(this.state.username, this.state.password)
      .then((responseJson) => {
        this.setState({ processing: false, loginText: 'Successful!' });
        console.log(responseJson)
        if(responseJson.success === true) {
          this.props.navigation.navigate('AuthStack');    
        } else {
          Alert.alert(responseJson.message)
        }
        this.setState({
          loading: false
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ processing: false, loginText: 'Try Again' });
      });
  }
  phone(){
    this.setState({password:"",username:""})
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
       <View style = { styles.textBoxBtnHolder } > 
       <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE}  labelFontSize={0.1}>
           <TextInput 
             placeholder="Enter Password"
             onChangeText={password => this.setState({ password })}
             underlineColorAndroid = "transparent"
             secureTextEntry ="true"
              style = { styles.input }/>
       </TextInputLayout>
</View>
</View>
    )
  }
  email(){
    this.setState({password:"",username:""})
    return(
      <View style={styles.Column_reverse}>
       <View style = { styles.textBoxBtnHolder } > 
        <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE}  labelFontSize={0.1}>
            <TextInput 
              placeholder="Enter Password"
              onChangeText={password => this.setState({ password })}
              underlineColorAndroid = "transparent"
              secureTextEntry ="true"
               style = { styles.input }/>
        </TextInputLayout>
</View>
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
</View>
    )
  }

  onPress = data => this.setState({ data });
  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  render() {
    let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.phone()
    return (
    <KeyboardAwareScrollView  contentContainerStyle={styles.container}
                 keyboardShouldPersistTaps='handled'>
        <View style={styles.Padding_verticele}>
        <ResponsiveImage source={GLOBAL.Logo} initWidth={GLOBAL.COLOR.Logo_width} initHeight={GLOBAL.COLOR.Logo_height}/>
        </View>
         <View style={[styles.box,styles.Padding_verticele]}>
         <Text style={[styles.Big_text]}>Sign In Using</Text>
         <Text></Text>
         
         <View style={styles.Row}>
         <RadioGroup  radioButtons={this.state.data} onPress={this.onPress}  flexDirection='row' />
         <Text style={{color:"white"}}>hm</Text>
         </View>
         {selectedButton}
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Forget_password')}}>
          <Text style={[styles.yello_text,{marginLeft:wp("40%")}]}>Forgot Password?</Text>
          </TouchableOpacity>
      </View>
      
          <TouchableOpacity onPress={this.handlePress}  >
          {!this.state.processing ? <View style={styles.button}>
            <Text style={[styles.buttonText]}>Sign In</Text>
            </View>: <ResponsiveImage
                source={GLOBAL.Loader}
                initWidth={GLOBAL.COLOR.Size_75} initHeight={GLOBAL.COLOR.Size_75}/> 
           }
          </TouchableOpacity>
      <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AuthStack')}}>
          <Text style={[styles.orange_text,styles.Padding_verticele]}>Continue without Signing In</Text>
          </TouchableOpacity>
      <View style={[styles.Row,styles]}>
        <Text style={styles.text}>Don't have an account? </Text>
        <View style={styles.column}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text style={styles.text}>Sign Up </Text>
            <Image
              source={GLOBAL.TAb_image_yellow}
              style={styles.Line_style}
            />
            </TouchableOpacity>
        </View>
        <Text style={styles.text}>here</Text>
      </View>
      <View style={[styles.copy_right_column]}>
        <View style={styles.Row}>
        <Image
           source={GLOBAL.Copy_right}
           style={styles.copy_rigth_image}
        />
        <Text style={styles.copy_rigth}> All copyright reserved to </Text>
          </View>
          <Text style={[styles.Copy_right_text]}> Vrienden Tech Private Limited 2018 </Text>
          </View>
</KeyboardAwareScrollView>
    );
  }
}

