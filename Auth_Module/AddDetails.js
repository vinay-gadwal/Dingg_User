import React, { Component } from 'react';
import { TouchableOpacity,View,TextInput,Image,Text,Button,ScrollView
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

export default class App extends Component {
  constructor(){
    super()
  
    this.state = {
        First_name:"",Last_name:"",Email_id:"",Locality:"",Enter_pass:"", checked: false,
        data: [
          {
              label: 'Male',
              color: 'rgb(255,164,0)',
              fontFamily:'Muli-ExtraBold',
          },
          {
              label: 'Female',
              color: 'rgb(255,164,0)',
              fontFamily:'Muli-ExtraBold',
          },
        ],
        Check_box:true,
      }
    }

    handlePress = () =>{  
      apis.Create_Pass(this.state.password,this.state.First_name,this.state.Last_name,ths.state.display_name,
                        this.state.Email_id,this.state.Locality,this.state.Gender,GLOBAL.token)
        .then((responseJson) => {
          console.log(responseJson)
          if(responseJson.success === true){
            this.props.navigation.navigate('AddDetails');
            console.log(responseJson)
          }
          else{
            Alert.alert(responseJson.message)
            console.log(responseJson)
          }
        })
        .catch((error) => {
          console.error(error);
        });
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
    Gender = data => this.setState({ data });
    
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
      <TouchableOpacity style={[styles.button,{marginTop:hp("0%"),marginHorizontal:wp("30%")}]} >
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
    return (
      <KeyboardAwareScrollView style={{backgroundColor:"rgb(243,242,242)"}}>
          <View style={[styles.boxDetails,{marginVertical:hp("5%")}]}>
                  <TextInputLayout focusColor="rgb(204,204,204)" labelFontSize={0.1}>
                      <TextInput
                        value={this.state.First_name}
                        onChangeText={First_name => this.setState({ First_name })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={[styles.input,{marginBottom:"0%"}]}
                        placeholder="First Name"
                        placeholderTextColor="rgb(204,204,204)"
                        returnKeyType="next"                
                      />
                  </TextInputLayout> 
                  <TextInputLayout focusColor="rgb(204,204,204)" labelFontSize={0.1}>
                      <TextInput
                        value={this.state.Last_name}
                        onChangeText={Last_name => this.setState({ Last_name })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={styles.input}
                        placeholder="Last Name"
                        placeholderTextColor="rgb(204,204,204)"
                        returnKeyType="next" 
                      />
                  </TextInputLayout>
                  <TextInputLayout focusColor="rgb(204,204,204)" labelFontSize={0.1}>
                      <TextInput
                        value={this.state.Email_id}
                        onChangeText={Email_id => this.setState({ Email_id })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={styles.input}
                        placeholder="Email ID"
                        placeholderTextColor="rgb(204,204,204)"
                        returnKeyType="next"
                        
                      />
                  </TextInputLayout>
                  <TextInputLayout focusColor="rgb(204,204,204)" labelFontSize={0.1}>
                      <TextInput
                        value={this.state.Locality}
                        onChangeText={Locality => this.setState({ Locality })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={styles.input}
                        placeholder="Locality"
                        placeholderTextColor="rgb(204,204,204)"
                        returnKeyType="next"
                        keyboardType="email-address"
                      />
                  </TextInputLayout>
                  <TextInputLayout focusColor="rgb(204,204,204)" labelFontSize={0.1}>
                        <TextInput
                          value={this.state.Enter_pass}
                          onChangeText={Enter_pass => this.setState({ Enter_pass })}
                          ref={input => (this.passwordCInput = input)}
                          secureTextEntry="true"                          
                          style={styles.input}
                          placeholder="Enter Password"
                          placeholderTextColor="rgb(204,204,204)"
                          returnKeyType="next"
                          keyboardType="email-address"
                        />
                  </TextInputLayout>
                  <View style={{marginTop:hp("3%"),marginRight:wp("30%")}}>
                  <RadioGroup style={{fontWeight:"bold"}} radioButtons={this.state.data} onPress={this.Gender}  flexDirection='row' />
                  <View style={{marginHorizontal:"4%",marginLeft:wp("32%"),marginTop:hp("2%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="290" initHeight="2"/>
                   </View>
                  
                  </View>
                 
                  <View style={{flexDirection:"row",marginTop:hp("1%"),marginRight:wp("4%")}}>
                  <TouchableOpacity activeOpacity = { 0.8 }  onPress = { this.Select_unselect_mon }>
                        <Image source = { ( this.state.Check_box ) ? require('../Image/new_images/uncheckedIcon3x.png') : require('../Image/new_images/selectedIcon3x.png') } style = {{width:wp(4.5),height:hp(2.2),marginTop:hp("1%"),marginRight:wp("3%")}} />
                  </TouchableOpacity>
                <Text style={[styles.copy_rigth,{marginTop:hp("1%")}]}>I agree to Dingg's</Text>
                <TouchableOpacity onPress={ () => this.openDialog(true) }>
                <Text style={[styles.copy_rigth,{color:"rgb(255,163,0)",marginTop:hp("1%")}]}> Terms & Conditions</Text>
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
                                source={require('../Image/icon/cancel1.png')}
                                style={[styles.setting_Image,{marginLeft:wp("75%"),marginBottom:hp("0%"),marginTop:hp("0%")}]}
                    />
                    </TouchableOpacity>
                    <Text style={{fontWeight:"bold",fontSize:RF(2.5)}}>Terms & Conditions</Text>
                    <ScrollView>
                    <Text style={[styles.text,{color:"rgb(107,107,107)",marginVertical:hp("3%")}]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                    </ScrollView>
                </Dialog>
    </View>
    <TouchableOpacity onPress={this.handlePress} style={[styles.button,{marginTop:hp("0%"),marginHorizontal:wp("30%")}]} onPress={()=>{this.props.navigation.navigate('Setting')}} >
      <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
   </KeyboardAwareScrollView>
    );
  }
}

