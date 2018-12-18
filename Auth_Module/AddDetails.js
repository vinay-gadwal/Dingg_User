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
        Check_box:true,
      }
    }
 
    handlePress = () =>{  
      if(this.state.Check_box == false){
      apis.ADD_Details(GLOBAL.token,this.state.Enter_pass,this.state.First_name,this.state.Last_name,this.state.display_name,
                        this.state.Email_id,this.state.Locality,GLOBAL.Gender)
        .then((responseJson) => {
          console.log(responseJson)
          if(responseJson.success === true){
            console.log(responseJson)
              this.props.navigation.navigate('AuthStack');
          }
          else{
            Alert.alert(responseJson.message)
            console.log(responseJson.message)
          }
        })
        .catch((error) => {
          console.error(error);
        });
      }
      else{
        Alert.alert("Please accept the Terms and Conditions")
      }
    }
    
    Password_Validate = () =>
    {
      if(this.state.Uid == ""){
        Alert.alert("Enter User ID")
      }
      else if(this.state.conf_pass === this.state.password){
          {this.handlePress()}
        }
        else{
          this.setState({conf_pass:""})
          Alert.alert("Confirm Password is Different")
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
                          secureTextEntry                         
                          style={styles.input}
                          placeholder="Enter Password"
                          returnKeyType="next"
                          keyboardType="email-address"
                        />
                  </TextInputLayout>
                  <View style={styles.radio_button}>
                  <RadioGroup radioButtons={this.state.data} onPress={this.Gender_Button}  flexDirection='row' />
                  {/* <View style={{marginHorizontal:"4%",marginLeft:wp("32%"),marginTop:hp("2%")}}>
                   <ResponsiveImage source={GLOBAL.rectangle_image_black} initWidth={GLOBAL.size_290} initHeight={GLOBAL._height}/>
                   </View>
                   */}
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
    <TouchableOpacity onPress={this.handlePress} style={[styles.button,{marginVertical:hp("2%"),marginHorizontal:wp("30%")}]} >
      <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
   </KeyboardAwareScrollView>
    );
  }
}

