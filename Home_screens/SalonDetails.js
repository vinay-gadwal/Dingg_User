import React, { Component } from 'react';
import {
  Image,
ScrollView,
  Text,
  View,Dimensions,TouchableOpacity,FlatList
} from 'react-native';
import styles from '../Style/Style'
import ResponsiveImage from 'react-native-responsive-image'
import Swiper from 'react-native-swiper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize"
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
const dataSource = [
  {
    Offer_name: GLOBAL.Offer_name,Start_date:GLOBAL.Start_date,End_date:GLOBAL.end_date,offer_per:GLOBAL.Offer_percentage
  },]
const FirstRoute = () => (
  <View style={[styles.Profile_Container]}>
                 
                    <Text style={styles.profile_Small_text}>Salon Name</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Address}</Text>
                    <View style={{marginHorizontal:wp("5%"),marginVertical:hp("1%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>

                    <Text style={styles.profile_Small_text}>Status</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Locality}</Text>
                    <View style={{marginHorizontal:wp("5%"),marginVertical:hp("1%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>
                   
                   <Text style={styles.profile_Small_text}>Business Time</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Locality}</Text>
                    <View style={{marginHorizontal:wp("5%"),marginVertical:hp("1%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>
                   
                   <Text style={styles.profile_Small_text}>Address</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Locality}</Text>
                    <View style={{marginHorizontal:wp("5%"),marginVertical:hp("1%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>
                    
                   <Text style={styles.profile_Small_text}>Rating</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Locality}</Text>
                    <View style={{marginHorizontal:wp("5%"),marginVertical:hp("1%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>

                     <Text style={styles.profile_Small_text}>Services</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Locality}</Text>
                    <View style={{marginHorizontal:wp("5%"),marginVertical:hp("1%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>

                    <Text style={styles.profile_Small_text}>Last Visit</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Locality}</Text>
                    <View style={{marginHorizontal:wp("5%"),marginVertical:hp("1%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>

                    <Text style={styles.profile_Small_text}>Contact Number</Text>
                    <Text style={styles.setting_text}>{GLOBAL.City}</Text>

            </View>

);
const SecondRoute = () => (
  <View style={[styles.Profile_Container]}>
                 
                    <Text style={styles.profile_Small_text}>Monday</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Address}</Text>
                    <View style={{marginHorizontal:wp("5%"),marginVertical:hp("1%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>

                    <Text style={styles.profile_Small_text}>Tuesday</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Locality}</Text>
                    <View style={{marginHorizontal:wp("5%"),marginVertical:hp("1%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>
                   
                   <Text style={styles.profile_Small_text}>Wednesday</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Locality}</Text>
                    <View style={{marginHorizontal:wp("5%"),marginVertical:hp("1%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>
                   
                   <Text style={styles.profile_Small_text}>Thursday</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Locality}</Text>
                    <View style={{marginHorizontal:wp("5%"),marginVertical:hp("1%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>
                    
                   <Text style={styles.profile_Small_text}>Friday</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Locality}</Text>
                    <View style={{marginHorizontal:wp("5%"),marginVertical:hp("1%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>

                     <Text style={styles.profile_Small_text}>Saturday</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Locality}</Text>
                    <View style={{marginHorizontal:wp("5%"),marginVertical:hp("1%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>

                    <Text style={styles.profile_Small_text}>Sunday</Text>
                    <Text style={styles.setting_text}>{GLOBAL.City}</Text>

            </View>
);
const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);
const FourthRoute = () => (
  <View style={{  flex: 1,
    justifyContent: "space-between",
    backgroundColor: "rgb(243,242,242)",
    paddingVertical:"0%"}}>

    
      <View style={{ 
        width: wp('90%'),marginLeft:"5%",
        height: hp('27%'),
        backgroundColor:"white",
        marginVertical:hp('5%'),
        borderRadius:10,}}>
             <View style={{flexDirection:"row"}}>

                          <Image
                                  source={require('../Image/icon/editIcon2x.png')}
                                  style={[styles.setting_Image,{marginLeft:wp("70%"),marginBottom:hp("2%"),marginTop:hp("2%")}]}
                              />
                          <Image
                                  source={require('../Image/icon/deleteIcon2x.png')}
                                  style={[styles.setting_Image,{marginRight:wp("3%"),marginBottom:hp("2%"),marginTop:hp("2%")}]}
                              />  
            </View>          
            <Text style={[styles.text,{marginHorizontal:wp("5%")}]}>text</Text>
              <View style={{flexDirection:"row"}}>
                          <Image
                                      source={require('../Image/icon/serviceIcon3x.png')}
                                      style={[styles.setting_Image,{marginLeft:wp("5%"),marginBottom:hp("2%"),marginTop:hp("2%")}]}
                                  />
                          <Text style={[styles.text,{marginHorizontal:wp("2%"),marginTop:hp("1%"),color:"rgb(173,173,173)"}]}>Text</Text>

              </View>
              <View style={{flexDirection:"row"}}>
                          <Image
                                      source={require('../Image/icon/calenderIcon2x.png')}
                                      style={[styles.setting_Image,{marginLeft:wp("5%"),marginBottom:hp("2%"),marginTop:hp("2%")}]}
                                  />
                          <Text style={[styles.text,{marginHorizontal:wp("2%"),marginTop:hp("1%"),color:"rgb(173,173,173)"}]}>Date</Text>
                          <Text style={[styles.text,{marginHorizontal:wp("2%"),marginTop:hp("1%"),color:"rgb(173,173,173)"}]}>end time</Text>
              </View>
              <View style={[styles.button,{borderRadius:40,height:hp("4%"),width:wp("30%"),marginHorizontal:wp("5%")}]} >
                          <Text style={styles.buttonText}>20% Off</Text>
              </View>
          </View>
   </View>
);
 
export default class swiper extends Component {
  
  state = {
    index: 0,
    routes: [
      { key: 'info', title: 'Info' },
      { key: 'Business_hour', title: 'Business Hour' },
      { key: 'review', title: 'Reviews' },
      { key: 'offer', title: 'Offers' },
    ],
    isLoading: true
  }

  GetItem (flower_name) {
  
    Alert.alert(flower_name);
    
    }
    
    FlatListItemSeparator = () => {
      return (
        <View
          style={{
            height: .5,
            width: "100%",
            backgroundColor: "#000",
          }}
        />
      );
    }
   
  render(){
    return (
      <ScrollView>
       <View style={{backgroundColor:"rgb(243,242,242)",alignItems:"center",flex:1}}>
      <View style={[styles.Header,{height:hp("8%"),flexDirection:"row",alignItems:"center",justifyContent:"center"}]}>
       <TouchableOpacity style={{marginRight:wp("25%"),marginTop:hp("2%")}}  onPress={ () => { this.props.navigation.navigate('StarReview')}}>
              <Image
                source={require('../Image/icon/back_2x.png')}
                style={styles.back_butt0n}
              />
              </TouchableOpacity>
        <Text style={[styles.text,{marginRight:wp("35%")}]}>SALON DETAIL</Text>
        </View>
      <View style={{height:"15%"}}>
      <Swiper showsButtons={true} showsPagination={true}
         nextButton={<ResponsiveImage style={{marginLeft:"83%",marginBottom:hp("65%"),}} source={require('../Image/new_images/rightArrow3x.png')} initWidth="25" initHeight="25"/> }
         prevButton={<ResponsiveImage style={{marginLeft:"10%",marginBottom:hp("65%")}} source={require('../Image/new_images/leftArrow3x.png')} initWidth="25" initHeight="25" /> }>
        <View style={[styles.slide1,]}>
        <ResponsiveImage source={require('../Image/new_images/haircutimage.jpg')} style={{marginVertical:hp(".5%"),marginRight:wp("5%")}} initWidth="410" initHeight="220"/> 
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
      </View>
      <View style={{flexDirection:"row",marginBottom:hp("1%"),}}>
      <Image source={require('../Image/new_images/haircutimage.jpg')} style={styles.avatarMultiple} /> 
      <Image source={require('../Image/new_images/haircutimage.jpg')} style={styles.avatarMultiple} /> 
      <Image source={require('../Image/new_images/haircutimage.jpg')} style={styles.avatarMultiple} /> 
      <Image source={require('../Image/new_images/haircutimage.jpg')} style={styles.avatarMultiple} /> 
      </View>
      <View style={{height:"100%"}}>
      <TabView pressColor="white"
      indicatorStyle={{color:"red"}}
      tabStyle={{backgroundColor:"white"}}
      style={{backgroundColor:"rgb(242,242,242)"}}
        navigationState={this.state}
        renderScene={SceneMap({
          info: FirstRoute,
          Business_hour: SecondRoute,
          review:ThirdRoute,
          offer:FourthRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
      </View>
      </View>
      </ScrollView>
    );
  }
}
 
