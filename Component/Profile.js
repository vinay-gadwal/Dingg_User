import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,TouchableOpacity,Image
} from 'react-native';
import styles from '../Style/Style'
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ResponsiveImage from 'react-native-responsive-image'
import Alert_top from '../Component/Alert' 
import {createStackNavigator,} from 'react-navigation';
const GLOBAL = require('../Component/Color');

class Profile extends Component {
    state = {
        
      }; 
  render() {
    return (
      <ScrollView style={GLOBAL.COLOR.rootBAckgroundColor}>
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
                    <Image
                                source={GLOBAL.Arrow_right}
                                style={[styles.setting_Image,{marginTop:hp("1%")}]}
                    />
            </TouchableOpacity>
        </View>
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