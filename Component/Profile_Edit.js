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
import RadioGroup from 'react-native-radio-buttons-group';
const GLOBAL = require('../Component/Color');

export default class App extends Component {
  constructor(){
    super()
  
    this.state = {
        avatarSource: null,avatarSource1:null,
        first_name:"",last_name:"",display_name:"",mobile_no:"",email:"",
        dob:"",anniversary:"",
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

  Gender_Button = data => this.setState({ data });

  render() {
    let selectedButton = this.state.data.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
    GLOBAL.Gender = selectedButton
    return (
      <ScrollView style={{backgroundColor:GLOBAL.COLOR.rootBAckgroundColor}}>
          <View style={styles.Padding_verticele}>

        <TouchableOpacity onPress={this.selectPhotoTapped1.bind(this)}>
                <View style={[styles.avatarMultiple, styles.avatarContainer,{marginHorizontal:wp("40%")}]}>
                      { this.state.avatarSource === null ? <Image
                                          source={GLOBAL.plus_icon}
                                         style={styles.Plus_image}
                      /> :
                        <Image style={styles.avatarMultiple} source={this.state.avatarSource} />
                      }
                </View>
                <View style={styles.edit_camera_}>
                  <TouchableOpacity onPress={this.selectPhotoTapped1.bind(this)}>
                  <ResponsiveImage source={GLOBAL.edit_icon}  initWidth={GLOBAL.COLOR.Size_60} initHeight={GLOBAL.COLOR.Size_60}/>
                  </TouchableOpacity>
                  </View>
          </TouchableOpacity>
                      <Text></Text>
          <View style={[styles.box_profile]}>
          <Text style={styles.grey_text_PROFILE_EDIT}>First Name</Text>
                  <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
                      <TextInput
                        value={this.state.first_name}
                        onChangeText={first_name => this.setState({ first_name })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={styles.input_profile_edit}                        // placeholder="Locality"
                        // placeholder="Salon Name"
                        returnKeyType="next"
                        
                      />
                  </TextInputLayout>              
                <Text style={[styles.grey_text_PROFILE_EDIT]}>Last Name</Text>
                  <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
                      <TextInput
                        value={this.state.last_name}
                        onChangeText={last_name => this.setState({ last_name })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={styles.input_profile_edit}                        // placeholder="Locality"
                        returnKeyType="next"
                        
                      />
                  </TextInputLayout>
                  <Text style={[styles.grey_text_PROFILE_EDIT]}>Display Name</Text>
                  <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
                      <TextInput
                        value={this.state.display_name}
                        onChangeText={display_name => this.setState({ display_name })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={styles.input_profile_edit}                        // placeholder="Locality"
                        returnKeyType="next"
                        
                      />
                  </TextInputLayout>
                  <Text style={[styles.grey_text_PROFILE_EDIT]}>Mobile Number</Text>
                  <View style={styles.Row}>
                  <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE}>

                      <Text style={{fontSize: RF(2.2)}}>+91     </Text>
                  </TextInputLayout>
                          <Text>   </Text>
                  <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
                  <TextInput
                        value={this.state.mobile_no}
                        onChangeText={mobile_no => this.setState({ mobile_no })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={[styles.input,{marginBottom:"3%",height: hp('3%'),width:wp("55%")}]}                        // placeholder="City"
                        returnKeyType="next"
                      />
                </TextInputLayout>
                  </View>  
                  <Text style={[styles.grey_text_PROFILE_EDIT]}>Email</Text>
                  <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
                      <TextInput
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={styles.input_profile_edit}                        // placeholder="Locality"
                        returnKeyType="next" 
                      />
                  </TextInputLayout>  
                 
                  <View style={[styles.Row]}>
                    <View style={styles.column}>
                    <Text style={[styles.grey_text_PROFILE_EDIT]}>Date of Birth</Text>       
                    <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
                      <TextInput
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={[styles.input_profile_edit,{width:wp("25%")}]}                        // placeholder="Locality"
                        returnKeyType="next" 
                      />
                  </TextInputLayout>  
                    </View>
                    <View style={[styles.column,{marginLeft:wp("7.5%")}]}>
                    <Text style={[styles.grey_text_PROFILE_EDIT]}>Anniversary (Optional)</Text>       
                    <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
                      <TextInput
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={[styles.input_profile_edit,{width:wp("25%")}]}                        // placeholder="Locality"
                        returnKeyType="next" 
                      />
                  </TextInputLayout>  
                    </View>
                  </View>     
                  <View style={styles.radio_button}>
                  <RadioGroup  radioButtons={this.state.data} onPress={this.Gender_Button}  flexDirection='row' />
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

