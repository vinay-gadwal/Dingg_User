import React, { Component } from 'react';
import { TouchableOpacity,View,TextInput,Image,Text,Alert,ScrollView,AsyncStorage
        ,NetInfo} from 'react-native';
import styles from '../Style/Style'
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {TextInputLayout} from 'rn-textinputlayout';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import RadioGroup from 'react-native-radio-buttons-group';
import ResponsiveImage from 'react-native-responsive-image'
import CheckBox from 'react-native-checkbox-heaven'
import { Dialog } from "react-native-simple-dialogs";
import apis from '../apis/index'
const GLOBAL = require('../Component/Color');

export default class App extends Component {
  constructor(){
    super()
    this._bootstrapAsync();
    this.state = {
        First_name:"",Last_name:"",Email_id:"",Locality:"",Enter_pass:"", checked: false,
        data: [
          {
              label: 'Male',
              color: GLOBAL.COLOR.ORANGE,
              fontFamily:GLOBAL.COLOR.Font_bold,
          },
          {
              label: 'Female',
              color: GLOBAL.COLOR.ORANGE,
              fontFamily:GLOBAL.COLOR.Font_bold,
          },
        ],
        Check_box:true,processing: false,token_otp:""
      }
    }
//  DeleteTicket=()=>{
//   apis.LOCAL_Delete_DATA('OTPticket')
//  }
 _bootstrapAsync = async () => {
  const userTokenOTP = await AsyncStorage.getItem('OTPticket');
this.setState({token_otp:userTokenOTP})
GLOBAL.token=this.state.token_otp
};
    handlePress(){ 
      NetInfo.isConnected.fetch().done((isConnected) => {
        if(isConnected){
          console.log(GLOBAL.token) 
          this.setState({ processing: true });
          if(this.state.Check_box == false){
          apis.ADD_Details(GLOBAL.token,this.state.Enter_pass,this.state.First_name,this.state.Last_name,this.state.display_name,
                            this.state.Email_id,this.state.Locality,GLOBAL.Gender)
            .then((responseJson) => {
              this.setState({ processing: false, loginText: 'Successful!' });
              console.log(responseJson)
              if(responseJson.success === true){
                this.setState({ First_name:"" });
                this.setState({ Last_name:"" });
                this.setState({ Email_id:"" });
                this.setState({ Locality:"" });
                this.setState({ Enter_pass:"" });
              AsyncStorage.setItem('Registered', "true")
                Alert.alert("Profile Updated Successfully")
                // apis.LOCAL_Delete_DATA('OTPticket')
                  this.props.navigation.navigate('AuthStack');
                  // {this.DeleteTicket}
              }
              else{
                Alert.alert(responseJson.message)
                console.log(responseJson.message)
                this.setState({ processing: false, loginText: 'Successful!' });
              }
            })
            .catch((error) => {
              console.error(error);
              this.setState({ processing: false, loginText: 'Try Again' });
            });
          }
          else{
            Alert.alert("Please Accept Terms and Conditions")
          }
        }else{
          Alert.alert("Please check your internet connection")
        }
      });
    }
    
    Select_unselect_mon = () =>
    {
      this.setState({ Check_box: !this.state.Check_box });
    }

    Gender_Button = data => this.setState({ data });
    
    handleOnChange(val) {
      this.setState({ checked: val })
      console.log(checked)
    }
    openDialog = (show) => {
      this.setState({ showDialog: show });
  }
  componentDidMount(){
    this.submit_button()
  }
  submit_button(){
    if(this.state.Check_box == true){
      <TouchableOpacity style={[styles.button]} >
      <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    }
    else{
      <Text style={styles.buttonText}>Submit</Text>
    }
  }
  Password_Validate = () =>
  {
    if(this.state.First_name.trim() === "" ){
      Alert.alert("Please enter First Name")
  }
   else if(this.state.Last_name.trim() === ""){
    Alert.alert("Please enter Last Name")
  }
    else if(this.state.Email_id.trim() === ""){
      Alert.alert("Please enter Email")
  }
    else if(this.state.Locality.trim() === ""){
        Alert.alert("Please enter Locality")
      }
    else if(this.state.Enter_pass.trim() === "")
      {
        Alert.alert("Please enter Password")
      }
    else{
      {this.nameValidate()}
      }
  }
  nameValidate(){
    const reg = /^[A-Za-z_]{1,20}$/;
    if (reg.test(this.state.First_name) === true){
      {this.last_nameValidate()}
    }
    else{
      alert("Please Enter Valid First Name");
    }
  }

  last_nameValidate(){
    const reg = /^[A-Za-z_]{1,20}$/;
    if (reg.test(this.state.Last_name) === true){
      {this.go()}
    }
    else{
      alert("Please Enter Valid Last Name");
    }
  }

  go() {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(this.state.Email_id) === true){
      {this.handlePress()}
    }
    else{
        alert("Please Enter Valid Email");
    }
}
  render() {
    let selectedButton = this.state.data.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
    GLOBAL.Gender = selectedButton
    return (
      <KeyboardAwareScrollView style={{backgroundColor:GLOBAL.COLOR.rootBAckgroundColor}}>
          <View style={[styles.box,styles.margin_top]}>
                  <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
                      <TextInput
                        value={this.state.First_name}
                        onChangeText={First_name => this.setState({ First_name })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={[styles.input]}
                        placeholder="First Name"
                        returnKeyType="next"                
                      />
                  </TextInputLayout> 
                  <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
                      <TextInput
                        value={this.state.Last_name}
                        onChangeText={Last_name => this.setState({ Last_name })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={styles.input}
                        placeholder="Last Name"
                        returnKeyType="next" 
                      />
                  </TextInputLayout>
                  <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
                      <TextInput
                        value={this.state.Email_id}
                        onChangeText={Email_id => this.setState({ Email_id })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={styles.input}
                        placeholder="Email ID"
                        keyboardType="email-address"
                        
                      />
                  </TextInputLayout>
                  <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
                      <TextInput
                        value={this.state.Locality}
                        onChangeText={Locality => this.setState({ Locality })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={styles.input}
                        placeholder="Locality"
                        returnKeyType="next"
                      />
                  </TextInputLayout>
                  <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
                        <TextInput
                          value={this.state.Enter_pass}
                          onChangeText={Enter_pass => this.setState({ Enter_pass })}
                          ref={input => (this.passwordCInput = input)}
                          secureTextEntry={true}                     
                          style={styles.input}
                          placeholder="Enter Password"
                          returnKeyType="next"
                          keyboardType="email-address"
                        />
                  </TextInputLayout>
                  <View style={styles.radio_button_addDeat}>
                  <RadioGroup radioButtons={this.state.data} onPress={this.Gender_Button}  flexDirection='row' />
                  </View>
                  <ResponsiveImage style={styles.Profile_line} source={GLOBAL.rectangle_image_black} initWidth={GLOBAL.COLOR.width} initHeight={GLOBAL.COLOR._height}/>

                  <View style={[styles.Row,{marginRight:wp("1%")}]}>
                  <TouchableOpacity activeOpacity = { 0.8 }  onPress = { this.Select_unselect_mon }>
                        <Image source = { ( this.state.Check_box ) ? GLOBAL.Unchecked : GLOBAL.Checked } style = {styles.Checked_button} />
                  </TouchableOpacity>
                <Text style={[styles.copy_rigth,{marginTop:hp(".3%")}]}>I agree to Dingg's</Text>
                <TouchableOpacity onPress={ () => this.openDialog(true) }>
                <Text style={[styles.orange_text,styles.copy_rigth_image]}> Terms & Conditions</Text>
                </TouchableOpacity>
                  </View>                   
                  <Dialog
                    animationType="fade"
                    contentStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialog(false) }
                    visible={ this.state.showDialog }
                >
                     <TouchableOpacity onPress={() => this.openDialog(false)}>
                     <ResponsiveImage
                                source={GLOBAL.Cancel_Button}
                                initWidth={GLOBAL.COLOR.Size_12} initHeight={GLOBAL.COLOR.Size_12}
                    />
                    </TouchableOpacity>
                    <Text style={styles.text}>Terms & Conditions</Text>
                    <ScrollView>
                    <Text style={styles.grey_text_PROFILE_EDIT}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                    </ScrollView>
                </Dialog>
              </View>
              <TouchableOpacity style={[styles.button,{marginLeft:wp("30%")}]} onPress={this.Password_Validate} >
                <Text style={[styles.buttonText]}>Submit</Text>     
                </TouchableOpacity>
              {/* <TouchableOpacity style={{alignItems:"center"}} onPress={this.handlePress} >
              {!this.state.processing ? <View style={[styles.button]}>
                <Text style={[styles.buttonText]}>Submit</Text>
                </View>: <ResponsiveImage
                     source={GLOBAL.Loader}
                     initWidth={GLOBAL.COLOR.Size_75} initHeight={GLOBAL.COLOR.Size_75}/> 
                }        
                </TouchableOpacity> */}
            </KeyboardAwareScrollView>
    );
  }
}

