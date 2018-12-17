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
import {createBottomTabNavigator,createStackNavigator,} from 'react-navigation';

class Profile extends Component {
  
    state = {
        
      };
    
  render() {
    return (
      <ScrollView style={{backgroundColor:"rgb(243,242,242)"}}>
      <View style={{alignItems:"center"}}>
        <Text></Text>
        <Text></Text>
            <View style={[styles.avatarMultiple, styles.avatarContainer,{marginHorizontal:wp("40%"),marginBottom:hp("5%")}]}>
                  { GLOBAL.Image === null ? <Image
                                      source={require('../Image/icon/plus.png')}
                                      style={{
                                        width: 16,
                                        height: 16,
                                        // left: 20
                  }}
                  /> :
                    <Image style={styles.avatarMultiple} source={GLOBAL.Image} />
                  }
            </View>
          <Text style={{fontSize: RF(3),fontFamily:"Muli-Bold"}}>{GLOBAL.Buss_name}</Text>
          <Text></Text>
          <Text style={{fontSize: RF(2),fontFamily:"Muli-Bold"}}>{GLOBAL.Master_Ven_ID}</Text>
          <Text></Text>
          <View style={[styles.Profile_Container]}>
                  <View style={{height:"1%",justifyContent:"center",alignItems:"center"}}>
                  <TouchableOpacity onPress={() => {this.props.navigation.navigate('Profile_edit')}}>
                  <ResponsiveImage source={require('../Image/main/editButtonmain3x.png')}  initWidth="75" initHeight="75"/>
                  </TouchableOpacity>
                  </View>
                    <Text style={styles.profile_Small_text}>Display Name</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Address}</Text>
                    <View style={{marginHorizontal:wp("5%"),marginVertical:hp("2%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>

                    <Text style={styles.profile_Small_text}>Gender</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Locality}</Text>
                    <View style={{marginHorizontal:wp("5%"),marginVertical:hp("2%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>
                    <Text style={styles.profile_Small_text}>Mobile Number</Text>
                    <Text style={styles.setting_text}>{GLOBAL.City}</Text>
                    <View style={{marginHorizontal:wp("5%"),marginVertical:hp("2%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>
                    <Text style={styles.profile_Small_text}>Email ID</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Website_url}</Text>
                    <View style={{marginHorizontal:wp("5%"),marginVertical:hp("2%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>
                  
                    <Text style={styles.profile_Small_text}>Locality</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Email}</Text>
                    <View style={{marginHorizontal:wp("5%"),marginVertical:hp("2%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>
                  
                    <Text style={styles.profile_Small_text}>Date of Birth</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Contact_Name}</Text>
                    <View style={{marginHorizontal:wp("5%"),marginVertical:hp("2%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>
                    <Text style={styles.profile_Small_text}>Anniversary</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Primary_No}</Text>
            </View>        
            <TouchableOpacity style={{  width:"90%",flexDirection:"row",
                          backgroundColor:"white",marginVertical:hp("2%"),
                          borderRadius:10,paddingVertical:hp("1%"),
                          justifyContent: 'space-between',marginHorizontal:"5%"}}
                          onPress={() => {this.props.navigation.navigate('QR_Code')}}>
                  
                  <Text style={[styles.setting_text,{marginTop:hp("1%"),}]}>App Setting</Text>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image,{marginRight:wp("3%"),marginTop:hp("3%")}]}
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
        source={require('../Image/new_images/notificationIcon3x.png')}
        style={[styles.back_butt0n,{marginRight:wp("3%"),height:hp("3.2%"),width:wp("5%"),marginBottom:hp("1.5%")}]}
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
              source={require('../Image/new_images/activenotificationIcon3x_2.png')}
              style={[styles.back_butt0n,{marginRight:wp("3%"),height:hp("3.2%"),width:wp("5%"),marginBottom:hp("1.5%")}]}
            />)
          })
        },
},

{
  initialRouteName:"Profile",
  // headerMode: "none",
  navigationOptions: {
    headerTitleStyle: {
      fontWeight: 'bold',marginBottom:hp("2%"),fontSize: RF("2.4"),justifyContent:"center",alignItems:"center"
    },
      },

});