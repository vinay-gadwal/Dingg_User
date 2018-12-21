import React, { Component } from 'react';
import { TouchableOpacity,View,TextInput,Image,Text,Alert,ScrollView
        } from 'react-native';
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
        Check_box:true,processing: false,
      }
    }
 
    handlePress = () =>{  
      this.setState({ processing: true });
      if(this.state.Check_box == false){
      apis.ADD_Details(GLOBAL.token,this.state.Enter_pass,this.state.First_name,this.state.Last_name,this.state.display_name,
                        this.state.Email_id,this.state.Locality,GLOBAL.Gender)
        .then((responseJson) => {
          this.setState({ processing: false, loginText: 'Successful!' });
          console.log(responseJson)
          console.log(this.state.Enter_pass)
          console.log(GLOBAL.token)
          if(responseJson.success === true){
            // console.log(responseJson)
              this.props.navigation.navigate('AuthStack');
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
        Alert.alert("Accept the Terms & Conditions")
      }
    }
    
    Password_Validate = () =>
    {
      if(this.state.conf_pass === "" && this.state.password === ""){
        Alert.alert("Please enter new password")
    }
     else if(this.state.Uid == ""){
        Alert.alert("Enter User ID")
      }
      else if(this.state.conf_pass === this.state.password){
          {this.handlePress()}
        }
        else{
          this.setState({conf_pass:""})
          Alert.alert("Password and ConfirmPassword should be same")
        }
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
  render() {
    let selectedButton = this.state.data.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
    GLOBAL.Gender = selectedButton
    return (
      <KeyboardAwareScrollView style={GLOBAL.COLOR.rootBAckgroundColor}>
          <View style={styles.box}>
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
                        returnKeyType="next"
                        
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
                        keyboardType="email-address"
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
                  <View style={styles.radio_button}>
                  <RadioGroup radioButtons={this.state.data} onPress={this.Gender_Button}  flexDirection='row' />
                  <View style={styles.Add_details_line}>
                  <ResponsiveImage style={styles.Profile_line} source={GLOBAL.rectangle_image_black} initWidth={GLOBAL.COLOR.width} initHeight={GLOBAL.COLOR._height}/>
                   </View>
                  
                  </View>
                 
                  <View style={[styles.Row,{marginRight:wp("1%")}]}>
                  <TouchableOpacity activeOpacity = { 0.8 }  onPress = { this.Select_unselect_mon }>
                        <Image source = { ( this.state.Check_box ) ? GLOBAL.Unchecked : GLOBAL.Checked } style = {styles.Checked_button} />
                  </TouchableOpacity>
                <Text style={[styles.copy_rigth,{marginTop:hp("1%")}]}>I agree to Dingg's</Text>
                <TouchableOpacity onPress={ () => this.openDialog(true) }>
                <Text style={[styles.orange_text,{marginTop:hp("1%")}]}> Terms & Conditions</Text>
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
                     <Image
                                source={GLOBAL.Cancel_Button}
                                style={[styles.setting_Image,{marginLeft:wp("75%")}]}
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
              <TouchableOpacity onPress={this.handlePress} >
              {!this.state.processing ? <View style={styles.button}>
                <Text style={[styles.buttonText]}>Submit</Text>
                </View>: <ResponsiveImage
                     source={GLOBAL.Loader}
                     initWidth={GLOBAL.COLOR.Size_75} initHeight={GLOBAL.COLOR.Size_75}/> 
                }        
                </TouchableOpacity>
            </KeyboardAwareScrollView>
    );
  }
}

