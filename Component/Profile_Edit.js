import React, { Component } from 'react';
import { Text,View,ScrollView,TextInput,TouchableOpacity,Image
        } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Dropdown } from 'react-native-material-dropdown';
import styles from '../Style/Style'
import {GooglePlacesAutocomplete,} from 'react-native-google-places-autocomplete'; // 1.2.12
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {TextInputLayout} from 'rn-textinputlayout';
import ResponsiveImage from 'react-native-responsive-image'

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};
const data = [
    {
      value: 'Male',
    },
    {
      value: 'Female',
    },
    {
      value: 'Unisex',
    },
  ];
export default class App extends Component {
  constructor(){
    super()
  
    this.state = {
        avatarSource: null,avatarSource1:null,
        Image_Source:null,Image_Source1:null,
        Image_Source_1:null,Image_Source_1_1:null,
        Image_Source_2:null,Image_Source_2_1:null,Image_Source_3:null,Image_Source_3_1:null,
        Address:"",Add_Data:"",Add_Bus_Details:"",Locality:"",City:"",
        Website_url:"",Email:"",Contact_Name:"",Primary_No:"",Secondry_no:"",
        Landline_No:"",Master_Ven_ID:"",Category:"",
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
    
      selectPhotoTapped2() 
      {
                  const options = {
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
             GLOBAL.Image1=source;
            this.setState({ Image_Source_2: source });
            this.setState({ Image_Source_2_1:source})
          }
        });
      }

      selectPhotoTapped3() 
      {
        const options = {
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
            GLOBAL.Image2=source;
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
    
            this.setState({
              Image_Source: source
            });
            this.setState({
              Image_Source1:source
            })
          }
        });
      }

      selectPhotoTapped4() 
      {
        const options = {
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
            GLOBAL.Image3=source;
             this.setState({
              Image_Source_1: source
            });
            this.setState({
              Image_Source_1_1:source
            })
          }
        });
      }
    
      selectPhotoTapped5() 
      {
        const options = {
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
            GLOBAL.Image4=source;
             this.setState({
              Image_Source_3: source
            });
            this.setState({
              Image_Source_3_1:source
            })
          }
        });
      }

      delete_photo_1(){
        this.setState({avatarSource1:null})
      }
      delete_photo_2(){
        this.setState({Image_Source:null})
      }
      delete_photo_3(){
        this.setState({Image_Source_1_1:null})
      }
      delete_photo_4(){
        this.setState({Image_Source_2_1:null})
      }
      delete_photo_5(){
        this.setState({Image_Source_3_1:null})
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
          <Text style={[styles.text,{marginTop:hp("1%"),color: "rgb(205,205,205)",}]}>Salon Name</Text>
                  <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
                      <TextInput
                        value={this.state.Add_Bus_Details}
                        onChangeText={Add_Bus_Details => this.setState({ Add_Bus_Details })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={[styles.input,{marginBottom:"3%",height: hp('3%'),}]}
                        // placeholder="Salon Name"
                        placeholderTextColor="rgb(204,204,204)"
                        returnKeyType="next"
                        
                      />
                  </TextInputLayout>
                  <Text style={[styles.text,{marginTop:hp("1%"),color: "rgb(205,205,205)"}]}>Address</Text>
                  <View style={{flexDirection:"row",marginTop:hp("1.5%")}}>
                  <GooglePlacesAutocomplete
                         value={this.state.Address}
                         onChangeText={Address => this.setState({ Address })}
                        placeholder=""
                        minLength={2} // minimum length of text to search
                        autoFocus={false}
                        returnKeyType={'next'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                        listViewDisplayed={false} // true/false/undefined
                        fetchDetails={true}
                        renderDescription={row => row.description} // custom description render
                        // onPress={(data = null) => {
                        //   console.log(data);
                        //   // console.log(details);
                        // }}
                        getDefaultValue={() => {
                          return ''; // text input default value
                        }}
                        query={{
                          // available options: https://developers.google.com/places/web-service/autocomplete
                          key: 'AIzaSyAGF8cAOPFPIKCZYqxuibF9xx5XD4JBb84',
                          language: 'en', // language of the results
                          types: '(cities)', // default: 'geocode'
                        }}
                        styles={{
                          description: {
                            fontFamily:'Muli-Bold'
                                },
                          predefinedPlacesDescription: {
                                color: '#1faadb',
                              },
                          textInputContainer: {
                                backgroundColor: 'rgba(0,0,0,0)',
                                borderTopWidth: 0,
                                borderBottomWidth:1,
                                borderColor:"rgb(201,201,201)",width:wp("70%")
                              },
                          textInput: {
                                marginLeft: 0,
                                // marginRight: 100,
                                color: '#5d5d5d',
                                fontSize:hp('2.2%')
                              },
                        }}
                        currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
                        currentLocationLabel="Current location"
                        nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                        GoogleReverseGeocodingQuery={{
                          // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                        }}
                        GooglePlacesSearchQuery={{
                          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                          rankby: 'distance',
                          types: 'food',
                        }}
                        filterReverseGeocodingByTypes={[
                          'locality',
                          'administrative_area_level_3',
                        ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                        // predefinedPlaces={[homePlace, workPlace]}
                        debounce={200}
                />
                <Text style={{color:"white"}}>bjjase</Text>
                </View>
                <Text style={[styles.text,{marginTop:hp("2%"),color: "rgb(205,205,205)"}]}>Locality</Text>
                  <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
                      <TextInput
                        value={this.state.Locality}
                        onChangeText={Locality => this.setState({ Locality })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={[styles.input,{marginBottom:"3%",height: hp('3%'),}]}                        // placeholder="Locality"
                        placeholderTextColor="rgb(204,204,204)"
                        returnKeyType="next"
                        
                      />
                  </TextInputLayout>
                  <Text style={[styles.text,{marginTop:hp("2%"),color: "rgb(205,205,205)"}]}>City</Text>
                  <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
                      <TextInput
                        value={this.state.City}
                        onChangeText={City => this.setState({ City })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={[styles.input,{marginBottom:"3%",height: hp('3%'),}]}                        // placeholder="City"
                        placeholderTextColor="rgb(204,204,204)"
                        returnKeyType="next"
                        
                      />
                  </TextInputLayout>
          </View>
          <View style={[styles.boxDetails,{alignItems:"flex-start",paddingLeft:wp("10%"),marginTop:hp("3%")}]}>
                  <Text style={[styles.text,{marginTop:hp("2%"),color: "rgb(205,205,205)"}]}>Website</Text>
                  <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
                      <TextInput
                        value={this.state.Website_url}
                        onChangeText={Website_url => this.setState({ Website_url })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={[styles.input,{marginBottom:"3%",height: hp('3%'),}]}                        // placeholder="Website Url"
                        placeholderTextColor="rgb(204,204,204)"
                        returnKeyType="next"
                        keyboardType="email-address"
                      />
                  </TextInputLayout>
                  <Text style={[styles.text,{marginTop:hp("2%"),color: "rgb(205,205,205)"}]}>Email</Text>
                  <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
                        <TextInput
                          value={this.state.Email}
                          onChangeText={Email => this.setState({ Email })}
                          ref={input => (this.passwordCInput = input)}
                          // onSubmitEditing={() => this.passwordInput.focus()}
                          style={[styles.input,{marginBottom:"3%",height: hp('3%'),}]}                          // placeholder="Email Id"
                          placeholderTextColor="rgb(204,204,204)"
                          returnKeyType="next"
                          keyboardType="email-address"
                        />
                  </TextInputLayout>
          </View>
          <View style={[styles.boxDetails,{alignItems:"flex-start",paddingLeft:wp("10%"),marginTop:hp("3%")}]}>
                  <Text style={[styles.text,{marginTop:hp("2%"),color: "rgb(205,205,205)"}]}>Contact Name</Text>
                  <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
                          <TextInput
                            value={this.state.Contact_Name}
                            onChangeText={Contact_Name => this.setState({ Contact_Name })}
                            ref={input => (this.passwordCInput = input)}
                            // onSubmitEditing={() => this.passwordInput.focus()}
                            style={[styles.input,{marginBottom:"3%",height: hp('3%'),}]}                            // placeholder="Contact name"
                            placeholderTextColor="rgb(204,204,204)"
                            returnKeyType="next"
                          />
                  </TextInputLayout>
                  <Text style={[styles.text,{marginTop:hp("2%"),color: "rgb(205,205,205)"}]}>Primary Number</Text>
                  <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                  <TextInputLayout focusColor="rgb(255,164,0)">

                      <Text style={{marginTop:"18%",fontSize: RF(2.2)}}>+91     </Text>
                  </TextInputLayout>
                          <Text>   </Text>
                  <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
                        <TextInput
                          value={this.state.Primary_No}
                          onChangeText={Primary_No => this.setState({ Primary_No })}
                          style={[styles.input,{width: wp('55'), height: hp('2%'),marginBottom:"3%"}]}
                          placeholderTextColor="rgb(204,204,204)"
                          returnKeyType="done"
                          underlineColorAndroid='transparent'
                          ref={input => (this.emailInput = input)}
                          // onSubmitEditing={() => this.passwordCInput.focus()}
                          keyboardType="numeric"
                          autoCapitalize="none"
                          autoCorrect={false}
                          // placeholder="Primary Number"
                          fontFamily='Muli-Bold'
                        />
                </TextInputLayout>
                  </View>
                  <Text style={[styles.text,{marginTop:hp("2%"),color: "rgb(205,205,205)"}]}>Secondry Number</Text>
                  <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                      <TextInputLayout focusColor="rgb(255,164,0)">

                      <Text style={{marginTop:"17%",fontSize: RF(2.2)}}>+91     </Text>
                      </TextInputLayout>
                      <Text>   </Text>
                  <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
                          <TextInput
                            value={this.state.Secondry_no}
                            onChangeText={Secondry_no => this.setState({ Secondry_no })}
                            style={[styles.input,{width: wp('55'), height: hp('2%'),marginBottom:"3%"}]}
                            placeholderTextColor="rgb(204,204,204)"
                            returnKeyType="done"
                            underlineColorAndroid='transparent'
                            ref={input => (this.emailInput = input)}
                            // onSubmitEditing={() => this.passwordCInput.focus()}
                            keyboardType="numeric"
                            autoCapitalize="none"
                            autoCorrect={false}
                            // placeholder="Secondary Number"
                          />
                </TextInputLayout>
                  </View>
                  <Text style={[styles.text,{marginTop:hp("2%"),color: "rgb(205,205,205)"}]}>Landline Number</Text>
                  <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
                        <TextInput
                          value={this.state.Landline_No}
                          onChangeText={Landline_No => this.setState({ Landline_No })}
                          style={[styles.input,{marginBottom:"3%",height: hp('3%'),}]}                          placeholderTextColor="rgb(204,204,204)"
                          returnKeyType="done"
                          underlineColorAndroid='transparent'
                          ref={input => (this.emailInput = input)}
                          // onSubmitEditing={() => this.passwordCInput.focus()}
                          keyboardType="numeric"
                          autoCapitalize="none"
                          autoCorrect={false}
                          // placeholder="Landline Number"
                        />
                </TextInputLayout>
          </View>
          <View style={[styles.boxDetails,{alignItems:"flex-start",paddingLeft:wp("10%"),marginTop:hp("3%")}]}>
                <Text style={[styles.text,{marginTop:hp("2%"),color: "rgb(205,205,205)"}]}>User ID</Text>
                  <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
                          <TextInput
                            value={this.state.Master_Ven_ID}
                            onChangeText={Master_Ven_ID => this.setState({ Master_Ven_ID })}
                            ref={input => (this.passwordCInput = input)}
                            // onSubmitEditing={() => this.passwordInput.focus()}
                            style={[styles.input,{marginBottom:"3%",height: hp('3%'),}]}                            // placeholder="Master vendor id"
                            placeholderTextColor="rgb(204,204,204)"
                            returnKeyType="next"
                          />
                  </TextInputLayout>
                  <Text style={[styles.text,{marginTop:hp("2%"),color: "rgb(205,205,205)"}]}>Category</Text>
                  <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
                          <TextInput
                            value={this.state.Master_Ven_ID}
                            onChangeText={Master_Ven_ID => this.setState({ Master_Ven_ID })}
                            ref={input => (this.passwordCInput = input)}
                            // onSubmitEditing={() => this.passwordInput.focus()}
                            style={[styles.input,{marginBottom:"3%",height: hp('3%'),}]}                            // placeholder="Master vendor id"
                            placeholderTextColor="rgb(204,204,204)"
                            returnKeyType="next"
                          />
                  </TextInputLayout>
                  <Text style={[styles.text,{marginTop:hp("2%"),color: "rgb(205,205,205)"}]}>Service Type</Text>
                  <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
                          <TextInput
                            value={this.state.Master_Ven_ID}
                            onChangeText={Master_Ven_ID => this.setState({ Master_Ven_ID })}
                            ref={input => (this.passwordCInput = input)}
                            // onSubmitEditing={() => this.passwordInput.focus()}
                            style={[styles.input,{marginBottom:"3%",height: hp('3%'),}]}                            // placeholder="Master vendor id"
                            placeholderTextColor="rgb(204,204,204)"
                            returnKeyType="next"
                          />
                  </TextInputLayout>
                   {/* <View style={{width:wp('70%'),marginVertical:"0%"}}>
                      <Dropdown
                          data={data} itemColor="rgb(255,163,0)"  selectedItemColor="grey"
                          value={'Service Type'}
                          onChangeText={() => this.setState({Category:data})}
                          dropdownPosition={0}
                          textColor="rgb(204,204,204)"
                          style={{ itemTextStyle:{ fontFamily:'Muli-Bold',},
                            width: wp('200%'),fontSize: RF(2.5),marginBottom:"10%",
                            // position: 'absolute',
                            top: 0,borderColor:"rgb(255,163,0)",placeholderTextColor:"rgb(222,222,222)"
                        }}
                      />
                  </View> */}
          </View>
          <Text style={{fontSize: RF(2.2),paddingVertical:"3%",paddingHorizontal:"5%",fontFamily:'Muli-Bold'}}>Add Images</Text>
    <View style={{paddingVertical:"2%",flexDirection:"row",marginHorizontal:"5%",justifyContent:"space-between"}}>
    <TouchableOpacity onPress={this.selectPhotoTapped2.bind(this)}>
    
            <View style={[styles.avatarMultiple, styles.avatarContainer]}>
                  { this.state.Image_Source_2_1 === null ? <Image
                                      source={require('../Image/icon/plus.png')}
                                      style={{
                                        width: 16,
                                        height: 16,
                                        // left: 20
                  }}
                  /> :
                  <View style={{flexDirection:"column-reverse"}}>
                  <Image style={[styles.avatarMultiple,]} source={this.state.Image_Source_2_1} />
                  <View style={{height:"3%",justifyContent:"center",alignItems:"center",marginLeft:wp("12%")}}>
                <TouchableOpacity onPress={this.selectPhotoTapped1.bind(this)}>
                <ResponsiveImage source={require('../Image/main/deleteImage3x.png')} style={{marginTop:hp("4%")}} initWidth="35" initHeight="35"/>
               </TouchableOpacity>
               </View>
                </View>
                  }
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.selectPhotoTapped3.bind(this)}>
            <View style={[styles.avatarMultiple, styles.avatarContainer]}>
                  { this.state.Image_Source1 === null ? <Image
                                      source={require('../Image/icon/plus.png')}
                                      style={{
                                        width: 16,
                                        height: 16,
                                        // left: 20
                  }}
                  /> :
                    <View style={{flexDirection:"column-reverse"}}>
                    <Image style={styles.avatarMultiple} source={this.state.Image_Source1} />
                    <View style={{height:"3%",justifyContent:"center",alignItems:"center",marginLeft:wp("12%")}}>
                  <TouchableOpacity onPress={this.selectPhotoTapped1.bind(this)}>
                  <ResponsiveImage source={require('../Image/main/deleteImage3x.png')} style={{marginTop:hp("4%")}} initWidth="35" initHeight="35"/>
                 </TouchableOpacity>
                 </View>
                  </View>
                  }
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.selectPhotoTapped4.bind(this)}>
            <View style={[styles.avatarMultiple, styles.avatarContainer]}>
                  { this.state.Image_Source_1_1 === null ? <Image
                                      source={require('../Image/icon/plus.png')}
                                      style={{
                                        width: 16,
                                        height: 16,
                                        // left: 20
                  }}
                  /> :
                    <View style={{flexDirection:"column-reverse"}}>
                    <Image style={styles.avatarMultiple} source={this.state.Image_Source_1_1} />
                    <View style={{height:"3%",justifyContent:"center",alignItems:"center",marginLeft:wp("12%")}}>
                  <TouchableOpacity onPress={this.selectPhotoTapped1.bind(this)}>
                  <ResponsiveImage source={require('../Image/main/deleteImage3x.png')} style={{marginTop:hp("4%")}} initWidth="35" initHeight="35"/>
                 </TouchableOpacity>
                 </View>
                  </View>
                  }
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.selectPhotoTapped5.bind(this)}>
            <View style={[styles.avatarMultiple, styles.avatarContainer]}>
                  { this.state.Image_Source_3_1 === null ? <Image
                                      source={require('../Image/icon/plus.png')}
                                      style={{
                                        width: 16,
                                        height: 16,
                                        // left: 20
                  }}
                  /> :
                    <View style={{flexDirection:"column-reverse"}}>
                    <Image style={styles.avatarMultiple} source={this.state.Image_Source_3_1} />
                    <View style={{height:"3%",justifyContent:"center",alignItems:"center",marginLeft:wp("12%")}}>
                  <TouchableOpacity onPress={this.selectPhotoTapped1.bind(this)}>
                  <ResponsiveImage source={require('../Image/main/deleteImage3x.png')} style={{marginTop:hp("4%")}} initWidth="35" initHeight="35"/>
                 </TouchableOpacity>
                 </View>
                  </View>
                  }
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={[styles.button,{marginLeft:wp("30.5%"),marginTop:hp("3%")}]} onPress={() => {this._getSubmitAction;this.props.navigation.navigate('Welcome'),this.Fun_Phot_save()}}>
                  <Text style={styles.buttonText}>Save Changes</Text>
              </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

