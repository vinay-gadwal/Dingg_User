import React, { Component } from 'react';
import { Text,View,ScrollView,TextInput,TouchableOpacity,Image
        } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import styles from '../Style/Style'
import {GooglePlacesAutocomplete,} from 'react-native-google-places-autocomplete'; // 1.2.12
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {TextInputLayout} from 'rn-textinputlayout';
import ResponsiveImage from 'react-native-responsive-image'

export default class App extends Component {
  constructor(){
    super()
  
    this.state = {
        avatarSource: null,avatarSource1:null,
        first_name:"",last_name:"",display_name:"",mobile_no:"",email:"",
        dob:"",anniversary:""
      }
    }
    Fun_Phot_save(){
        GLOBAL.Category=this.state.Category
        GLOBAL.Buss_name=this.state.Add_Bus_Details;
        GLOBAL.Address=this.state.Address;
        GLOBAL.Locality=this.state.Locality;
        GLOBAL.City=this.state.City;
        GLOBAL.Website_url=this.state.Website_url;
        GLOBAL.Email=this.state.Email;
        GLOBAL.Contact_Name=this.state.Contact_Name;
        GLOBAL.Primary_No=this.state.Primary_No;
        GLOBAL.Secondry_no=this.state.Secondry_no;
        GLOBAL.Landline_No=this.state.Landline_No;
        GLOBAL.Master_Ven_ID=this.state.Master_Ven_ID
    }
    
      selectPhotoTapped1() 
      {
                        const options = 
                        {
                          quality: 1.0,
                          maxWidth: 500,
                          maxHeight: 500,
                          storageOptions: {
                            skipBackup: true
                                           }
                           };
          ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled photo picker');
          }
          else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          }
          else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          }
          else {
            let source = { uri: response.uri };
              GLOBAL.Image=source;
              this.setState({ avatarSource: source });
              this.setState({ avatarSource1:source });
          }
        });
      }
     
  render() {
    return (
      <ScrollView style={{backgroundColor:"rgb(243,242,242)"}}>
          <View style={{paddingVertical:"5%"}}>

        <TouchableOpacity onPress={this.selectPhotoTapped1.bind(this)}>
                <View style={[styles.avatarMultiple, styles.avatarContainer,{marginHorizontal:wp("40%")}]}>
                      { this.state.avatarSource === null ? <Image
                                          source={require('../Image/icon/plus.png')}
                                          style={{
                                            width: wp('3%'),
                                            height: hp('2%'),
                                            // left: 20
                      }}
                      /> :
                        <Image style={styles.avatarMultiple} source={this.state.avatarSource} />
                      }
                </View>
                <View style={{height:"1%",justifyContent:"center",alignItems:"center",marginLeft:wp("18%")}}>
                  <TouchableOpacity onPress={this.selectPhotoTapped1.bind(this)}>
                  <ResponsiveImage source={require('../Image/main/editButton3x.png')}  initWidth="60" initHeight="60"/>
                  </TouchableOpacity>
                  </View>
          </TouchableOpacity>
                      <Text></Text>
                      <Text></Text>
          <View style={[styles.boxDetails,{alignItems:"flex-start",paddingLeft:wp("10%")}]}>
          <Text style={styles.grey_text_PROFILE_EDIT}>First Name</Text>
                  <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
                      <TextInput
                        value={this.state.first_name}
                        onChangeText={first_name => this.setState({ first_name })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={[styles.input,{marginBottom:"3%",height: hp('3%'),}]}
                        // placeholder="Salon Name"
                        placeholderTextColor="rgb(204,204,204)"
                        returnKeyType="next"
                        
                      />
                  </TextInputLayout>              
                <Text style={[styles.grey_text_PROFILE_EDIT,{marginTop:hp("2")}]}>Last Name</Text>
                  <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
                      <TextInput
                        value={this.state.last_name}
                        onChangeText={last_name => this.setState({ last_name })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={[styles.input,{marginBottom:"3%",height: hp('3%'),}]}                        // placeholder="Locality"
                        placeholderTextColor="rgb(204,204,204)"
                        returnKeyType="next"
                        
                      />
                  </TextInputLayout>
                  <Text style={[styles.grey_text_PROFILE_EDIT,{marginTop:hp("2")}]}>Display Name</Text>
                  <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
                      <TextInput
                        value={this.state.display_name}
                        onChangeText={display_name => this.setState({ display_name })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={[styles.input,{marginBottom:"3%",height: hp('3%'),}]}                        // placeholder="City"
                        placeholderTextColor="rgb(204,204,204)"
                        returnKeyType="next"
                        
                      />
                  </TextInputLayout>
                  <Text style={[styles.grey_text_PROFILE_EDIT,{marginTop:hp("2")}]}>Mobile Number</Text>
                  <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                  <TextInputLayout focusColor="rgb(255,164,0)">

                      <Text style={{fontSize: RF(2.2)}}>+91     </Text>
                  </TextInputLayout>
                          <Text>   </Text>
                  <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
                  <TextInput
                        value={this.state.mobile_no}
                        onChangeText={mobile_no => this.setState({ mobile_no })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={[styles.input,{marginBottom:"3%",height: hp('3%'),width:wp("55%")}]}                        // placeholder="City"
                        placeholderTextColor="rgb(204,204,204)"
                        returnKeyType="next"
                      />
                </TextInputLayout>
                  </View>  
                  <Text style={[styles.grey_text_PROFILE_EDIT,{marginTop:hp("2")}]}>Email</Text>
                  <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
                      <TextInput
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={[styles.input,{marginBottom:"3%",height: hp('3%'),}]}                        // placeholder="City"
                        placeholderTextColor="rgb(204,204,204)"
                        returnKeyType="next" 
                      />
                  </TextInputLayout>  
                 
                  <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <View style={{flexDirection:"column"}}>
                    <Text style={[styles.grey_text_PROFILE_EDIT,{marginTop:hp("2")}]}>Date of Birth</Text>       
                    <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
                      <TextInput
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={[styles.input,{marginBottom:"3%",height: hp('3%'),width:wp("10%")}]}                        // placeholder="City"
                        placeholderTextColor="rgb(204,204,204)"
                        returnKeyType="next" 
                      />
                  </TextInputLayout>  
                    </View>
                    <View style={{flexDirection:"column",marginLeft:wp("10%")}}>
                    <Text style={[styles.grey_text_PROFILE_EDIT,{marginTop:hp("2")}]}>Anniversary (Optional)</Text>       
                    <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
                      <TextInput
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={[styles.input,{marginBottom:"3%",height: hp('2.8%'),width:wp("10%")}]}                        // placeholder="City"
                        placeholderTextColor="rgb(204,204,204)"
                        returnKeyType="next" 
                      />
                  </TextInputLayout>  
                    </View>
                  </View>      
          </View>
        <TouchableOpacity style={[styles.button,{marginLeft:wp("30.5%"),marginTop:hp("3%")}]} onPress={() => {this._getSubmitAction;this.props.navigation.navigate('Welcome'),this.Fun_Phot_save()}}>
                  <Text style={styles.buttonText}>Save Changes</Text>
              </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

