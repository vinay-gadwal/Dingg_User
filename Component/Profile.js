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

export default class App extends Component {
  
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
                    <Text style={styles.profile_Small_text}>Address</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Address}</Text>
                    <View style={{marginHorizontal:wp("5%"),marginVertical:hp("2%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>

                    <Text style={styles.profile_Small_text}>Locality</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Locality}</Text>
                    <View style={{marginHorizontal:wp("5%"),marginVertical:hp("2%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>
                  
                    <Text style={styles.profile_Small_text}>City</Text>
                    <Text style={styles.setting_text}>{GLOBAL.City}</Text>

            </View>
            <Text></Text>
            <View style={styles.Profile_Container}>
            
                    <Text style={styles.profile_Small_text}>Website</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Website_url}</Text>
                    <View style={{marginHorizontal:"5%"}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>
                  
                    <Text style={styles.profile_Small_text}>Email</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Email}</Text>

            </View>
            <Text></Text>
            <View style={styles.Profile_Container}>
            
                    <Text style={styles.profile_Small_text}>Conatct Name</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Contact_Name}</Text>
                    <View style={{marginHorizontal:wp("5%"),marginVertical:hp("2%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>
                  
                    <Text style={styles.profile_Small_text}>Primary Number</Text>
                    <Text style={styles.setting_text}>+91-{GLOBAL.Primary_No}</Text>
                    <View style={{marginHorizontal:wp("5%"),marginVertical:hp("2%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>

                   <View style={{justifyContent:"center"}}>
                    <Text style={styles.profile_Small_text}>Secondry Number</Text>
                    <Text style={styles.setting_text}>+91-{GLOBAL.Secondry_no}</Text>
                    <View style={{marginHorizontal:wp("5%"),marginVertical:hp("2%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>
                  </View>
                  
                  <View style={{justifyContent:"center"}}>
                  <Text style={styles.profile_Small_text}>Landline Number</Text>
                  <Text style={styles.setting_text}>+91-{GLOBAL.Landline_No}</Text>
                </View>

            </View>
            <Text></Text>
            <View style={styles.Profile_Container}>
                  <Text style={styles.profile_Small_text}>Category</Text>
                  {/* <Text style={styles.setting_text}>{GLOBAL.Category}</Text> */}
                  <View style={{marginHorizontal:wp("5%"),marginVertical:hp("2%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>

                  <Text style={styles.profile_Small_text}>Service Type</Text>
                  <Text style={styles.setting_text}>Unisex</Text>
                  
            </View>
            <Text></Text>
            <TouchableOpacity style={{  width:"90%",height:"4%",flexDirection:"row",
                          backgroundColor:"white",marginVertical:hp("2%"),
                          borderRadius:10,
                          justifyContent: 'space-between',marginHorizontal:"5%"}}
                          onPress={() => {this.props.navigation.navigate('QR_Code')}}>
                  
                  <Text style={[styles.setting_text,{marginTop:hp("1%"),}]}>My Dingg Code</Text>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image,{marginRight:wp("3%"),marginTop:hp("3%")}]}
                    />
            </TouchableOpacity>
            <Text></Text>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginHorizontal:"5%"}}>
            <View style={[styles.avatarMultiple, styles.avatarContainer,{marginHorizontal:wp("2%")}]}>
                  { GLOBAL.Image1 === null ? <Image
                                      source={require('../Image/icon/plus.png')}
                                      style={{
                                        width: 16,
                                        height: 16,
                                        // left: 20
                  }}
                  /> :
                    <Image style={styles.avatarMultiple} source={GLOBAL.Image1} />
                  }
            </View>
            <View style={[styles.avatarMultiple, styles.avatarContainer,{marginHorizontal:wp("2%")}]}>
                  {GLOBAL.Image2 === null ? <Image
                                      source={require('../Image/icon/plus.png')}
                                      style={{
                                        width: 16,
                                        height: 16,
                                        // left: 20
                  }}
                  /> :
                    <Image style={styles.avatarMultiple} source={GLOBAL.Image2} />
                  }
            </View>
            <View style={[styles.avatarMultiple, styles.avatarContainer,{marginHorizontal:wp("2%")}]}>
                  { GLOBAL.Image3 === null ? <Image
                                      source={require('../Image/icon/plus.png')}
                                      style={{
                                        width: 16,
                                        height: 16,
                                        // left: 20
                  }}
                  /> :
                    <Image style={styles.avatarMultiple} source={GLOBAL.Image3} />
                  }
            </View>
            <View style={[styles.avatarMultiple, styles.avatarContainer,{marginHorizontal:wp("2%")}]}>
                  {  GLOBAL.Image4 === null ? <Image
                                      source={require('../Image/icon/plus.png')}
                                      style={{
                                        width: 16,
                                        height: 16,
                                        // left: 20
                  }}
                  /> :
                    <Image style={styles.avatarMultiple} source={ GLOBAL.Image4} />
                  }
            </View>
        </View>
        </View>
      </ScrollView>
    );
  }
}

