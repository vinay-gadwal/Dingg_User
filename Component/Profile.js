import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,TouchableOpacity,Image,AsyncStorage
} from 'react-native';
import styles from '../Style/Style'
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ResponsiveImage from 'react-native-responsive-image'
import Alert_top from '../Component/Alert' 
import {createStackNavigator,} from 'react-navigation';
const GLOBAL = require('../Component/Color');
import apis from '../apis/index'
import sing_in from '../Auth_Module/Signin'

class Profile extends Component {
  constructor(){
    super()
    this._bootstrapAsync();
    this.state = {
      token_otp:"",token:""
      }; 
    }
    _bootstrapAsync = async () => {
      const userTokenOTP = await AsyncStorage.getItem('ticket');
      const userToken = await AsyncStorage.getItem('OTPticket');
      const Registered = await AsyncStorage.getItem('Registered');
      this.setState({token_otp:userTokenOTP})
    this.setState({token:Registered})
    console.log(this.state.token_otp)
    console.log(this.state.token)
    console.log(Registered)
    };
    componentDidMount(){
      apis.LOCAL_Delete_DATA('OTPticket').then(() => {
        this.props.navigation.navigate('login');    
        })
          apis.LOCAL_Delete_DATA('ticket').then(() => {
            this.props.navigation.navigate('login');    
            })
    }
    //
  logout=()=>{
    apis.LOCAL_Delete_DATA('Registered')
    apis.LOCAL_Delete_DATA('ticket')
    this.props.navigation.navigate('SignIn' ,{
      onGoBack: () => console.log('Will go back from nextComponent'),
    });    
  }
  LogoutButton(){
    if(this.state.token_otp != null){
      return(
        <TouchableOpacity onPress={this.logout} style={[styles.button,{marginLeft:wp("30%")}]}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
      )
    }
    else if(this.state.token != null){
      return(
      <TouchableOpacity onPress={this.logout} style={[styles.button,{marginLeft:wp("30%")}]}>
      <Text style={styles.buttonText}>Log Out</Text>
    </TouchableOpacity>
      )
    }
    else{
      return(
        <View></View>
      )
    }
  }
  render() {
    return (
      <ScrollView style={{backgroundColor:"rgb(243,242,242)"}}>
      <View style={{alignItems:"center"}}>
        <Text></Text>
        <Text></Text>
            <View style={[styles.avatarMultiple, styles.avatarContainer,{marginHorizontal:wp("40%"),marginBottom:hp("5%")}]}>
                  { GLOBAL.Image === null ? <Image
                                      source={GLOBAL.plus_icon}
                                      style={styles.plus_icon}
                  /> :
                    <Image style={styles.avatarMultiple} source={GLOBAL.Image} />
                  }
            </View>
          <Text style={styles.Big_text}>{GLOBAL.Buss_name}</Text>
          <Text></Text>
          <Text style={styles.Big_text}>{GLOBAL.Master_Ven_ID}</Text>
          <Text></Text>
          <View style={[styles.Profile_Container]}>
                  <View style={styles.Edit_button}>
                  <TouchableOpacity onPress={() => {this.props.navigation.navigate('Profile_edit')}}>
                  <ResponsiveImage source={GLOBAL.Edit_Icon}  initWidth={GLOBAL.COLOR.Size_75} initHeight={GLOBAL.COLOR.Size_75}/>
                  </TouchableOpacity>
                  </View>
                    <Text style={styles.profile_Small_text}>Display Name</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Address}</Text>
                   <ResponsiveImage style={styles.Profile_line} source={GLOBAL.rectangle_image_black} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>

                    <Text style={styles.profile_Small_text}>Gender</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Locality}</Text>
                    <ResponsiveImage style={styles.Profile_line} source={GLOBAL.rectangle_image_black} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>

                    <Text style={styles.profile_Small_text}>Mobile Number</Text>
                    <Text style={styles.setting_text}>{GLOBAL.City}</Text>
                    <ResponsiveImage style={styles.Profile_line} source={GLOBAL.rectangle_image_black} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>

                    <Text style={styles.profile_Small_text}>Email ID</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Website_url}</Text>
                    <ResponsiveImage style={styles.Profile_line} source={GLOBAL.rectangle_image_black} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>

                  
                    <Text style={styles.profile_Small_text}>Locality</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Email}</Text>
                    <ResponsiveImage style={styles.Profile_line} source={GLOBAL.rectangle_image_black} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>

                  
                    <Text style={styles.profile_Small_text}>Date of Birth</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Contact_Name}</Text>
                    <ResponsiveImage style={styles.Profile_line} source={GLOBAL.rectangle_image_black} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>

                    <Text style={styles.profile_Small_text}>Anniversary</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Primary_No}</Text>
            </View>        
            <TouchableOpacity style={[styles.box,styles.Row]}
                          onPress={() => {this.props.navigation.navigate('QR_Code')}}>
                  
                  <Text style={[styles.setting_text]}>App Setting</Text>
                    <ResponsiveImage
                                source={GLOBAL.Arro}
                                initWidth={GLOBAL.COLOR.Icon_divider_height} initHeight={GLOBAL.COLOR.Icon_divider_height}
                    />
            </TouchableOpacity>
        </View>
       {this.LogoutButton()}
      </ScrollView>
    );
  }
}
export default createStackNavigator({
  Profile:{
    screen:Profile,
    navigationOptions: ({ navigation }) => ({
      title: 'PROFILE',
      headerRight:(
        <TouchableOpacity onPress={() => {navigation.navigate('Alert_top')}}>
         <Image
         source={GLOBAL.Notification_yellow}
         style={[styles.back_right]}
      />
        </TouchableOpacity>)
      })
  },
 Alert_top:{
          screen:Alert_top,
          navigationOptions: ({ navigation }) => ({
            title: 'ALERTS',
            headerLeft:null,
            headerRight:(
              <Image
                source={GLOBAL.Notification_Gray}
                style={[styles.back_right]}
              />)
          })
        },
},
{
  initialRouteName:"Profile",
  // headerMode: "none",
  navigationOptions: {
    headerTitleStyle: styles.Header
      },
});