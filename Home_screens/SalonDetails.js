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
const GLOBAL = require('../Component/Color');

const FirstRoute = () => (
  <View style={[styles.Profile_Container]}>
                 
                    <Text style={styles.profile_Small_text}>Salon Name</Text>
                    <Text style={[styles.setting_text,{marginLeft:wp("8%"),color:"black"}]}>Javed habib</Text>
                    <View style={styles.Salon_Details}>
                   <ResponsiveImage source={GLOBAL.table_divider} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
                   </View>

                    <Text style={styles.profile_Small_text}>Status</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Locality}</Text>
                    <View style={styles.Salon_Details}>
                   <ResponsiveImage source={GLOBAL.table_divider} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
                   </View>
                   
                   <Text style={styles.profile_Small_text}>Business Time</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Locality}</Text>
                    <View style={styles.Salon_Details}>
                   <ResponsiveImage source={GLOBAL.table_divider} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
                   </View>
                   
                   <Text style={styles.profile_Small_text}>Address</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Locality}</Text>
                    <View style={styles.Salon_Details}>
                   <ResponsiveImage source={GLOBAL.table_divider} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
                   </View>
                    
                   <Text style={styles.profile_Small_text}>Rating</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Locality}</Text>
                    <View style={styles.Salon_Details}>
                   <ResponsiveImage source={GLOBAL.table_divider} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
                   </View>

                     <Text style={styles.profile_Small_text}>Services</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Locality}</Text>
                    <View style={styles.Salon_Details}>
                   <ResponsiveImage source={GLOBAL.table_divider} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
                   </View>

                    <Text style={styles.profile_Small_text}>Last Visit</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Locality}</Text>
                    <View style={styles.Salon_Details}>
                   <ResponsiveImage source={GLOBAL.table_divider} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
                   </View>

                    <Text style={styles.profile_Small_text}>Contact Number</Text>
                    <Text style={styles.setting_text}>{GLOBAL.City}</Text>

            </View>

);
const SecondRoute = () => (
  <View style={[styles.Profile_Container]}>
                 
                    <Text style={styles.profile_Small_text}>Monday</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Address}</Text>
                    <View style={styles.Salon_Details}>
                   <ResponsiveImage source={GLOBAL.table_divider} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
                   </View>

                    <Text style={styles.profile_Small_text}>Tuesday</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Locality}</Text>
                    <View style={styles.Salon_Details}>
                   <ResponsiveImage source={GLOBAL.table_divider} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
                   </View>
                   
                   <Text style={styles.profile_Small_text}>Wednesday</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Locality}</Text>
                    <View style={styles.Salon_Details}>
                   <ResponsiveImage source={GLOBAL.table_divider} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
                   </View>
                   
                   <Text style={styles.profile_Small_text}>Thursday</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Locality}</Text>
                    <View style={styles.Salon_Details}>
                   <ResponsiveImage source={GLOBAL.table_divider} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
                   </View>
                    
                   <Text style={styles.profile_Small_text}>Friday</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Locality}</Text>
                    <View style={styles.Salon_Details}>
                   <ResponsiveImage source={GLOBAL.table_divider} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
                   </View>

                     <Text style={styles.profile_Small_text}>Saturday</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Locality}</Text>
                    <View style={styles.Salon_Details}>
                   <ResponsiveImage source={GLOBAL.table_divider} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
                   </View>

                    <Text style={styles.profile_Small_text}>Sunday</Text>
                    <Text style={styles.setting_text}>{GLOBAL.City}</Text>

            </View>
);
const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);
const FourthRoute = () => (
<View></View>);
 
export default class swiper extends Component {
  constructor(){
    super()
  this.state = {
    index: 0,
    routes: [
      { key: 'info', title: 'Info' },
      { key: 'Business_hour', title: 'Business Hour' },
      { key: 'review', title: 'Reviews' },
      { key: 'offer', title: 'Offers' },
    ],
    dataSource1: [
      {name:"Saloon"}
    ],
    dataSource : [
      {
        Offer_name: GLOBAL.Offer_name,Start_date:GLOBAL.Start_date,End_date:GLOBAL.end_date,offer_per:GLOBAL.Offer_percentage
      },],
    isLoading: true
  }
}


  GetItem (flower_name) {
  
    Alert.alert(flower_name);
    
    }
    third = ()=>{
      return(
        <ScrollView>
        <View style={styles.container}>
        <View style={[styles.Row,{height:hp("100%"),marginTop:hp("2%")}]}>
                      <FlatList          
                            data={ this.state.dataSource1 }
                            renderItem={({item}) => 
                            <View style={styles.Flex_main_box}>
                                <View style={styles.Row}>                          
                                     <View style={styles.Flat_box_column}>
                                     <View style={[styles.Row,styles.margin_3,{marginTop:hp("2.5%")}]}>
                                            <ResponsiveImage source={GLOBAL.Date_icon} style={{marginTop:hp("1%")}} initWidth={GLOBAL.COLOR.Size_16} initHeight={GLOBAL.COLOR.Size_16}/>
                                            <Text style={[styles.grey_text,{marginRight:wp("6%")}]}>{item.name}</Text>
                                         </View>
                                         <View style={styles.Padding_verticele}>
                                         <Image style={[styles.FlatList_Image]} 
                                          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}  />                                 
                                         </View>
                                         {/* <View style={{marginRight:wp("7%"),marginBottom:hp("2%")}}>
                                         {view}
                                         </View> */}
                                    </View>           
                                      <View style={styles.Flex_box_right}>
                                         <Text style={[styles.Flat_box_text]}>Token ID : TK102</Text>
                                         <Text style={[styles.Flat_box_text]}>{item.name}</Text>
                                         <Text style={[styles.grey_text]}>Service</Text>
                                         <Text style={[styles.Flat_box_text,{marginTop:hp("0%")}]}>{item.name}</Text>
                                         <Text style={[styles.grey_text]}>Stylist</Text>
                                         <Text style={[styles.Flat_box_text,{marginTop:hp("0%")}]}>{item.name}</Text>
                                    </View>           
                                </View> 
                                </View>  }                       
                            />
                   </View>
         </View>
        </ScrollView>
      )
    }
    Fouth =()=>{
      return(      
      <ScrollView >
      <View style={styles.container}>
      <FlatList
      horizontal={false}
            data={ this.state.dataSource } 
            // ItemSeparatorComponent = {this.FlatListItemSeparator
            renderItem={({item}) => 
            <View style={[styles.list_box,{paddingHorizontal:wp("3%"),paddingTop:hp("2%"),paddingVertical:hp("1.5%"),marginHorizontal:wp("5%")}]}>
                     
                  <Text style={[styles.text]}>Get 25% off on your First Haircut</Text>
                  <View style={styles.only_row}>
                      <ResponsiveImage style={styles.Margin_half} source = {GLOBAL.Service_icon} initWidth={GLOBAL.COLOR.Size_16} initHeight={GLOBAL.COLOR.Size_16}/>
                      <Text style={[styles.grey_text,{marginLeft:wp("2%")}]}>Haircut</Text>
                    </View>
                    <View style={styles.only_row}>
                      <ResponsiveImage style={styles.Margin_half} source = {GLOBAL.Calander_icon} initWidth={GLOBAL.COLOR.Size_16} initHeight={GLOBAL.COLOR.Size_16}/>
                      <Text style={[styles.grey_text,{marginLeft:wp("2%")}]}>Mon, 01 Oct 18 - Wed, 31 Oct 18</Text>
                    </View>
                    <View style={[styles.Offer_button]} >
                                <Text style={styles.buttonText}>{item.offer_per}% Off</Text>
                    </View>
                </View>       
              }
            />
           <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('Add_Offer')}}>
           <Text style={styles.buttonText}>Join Queue</Text>
           </TouchableOpacity>
           </View>
    </ScrollView>
      )
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
      <ScrollView style={{flex:1}}>
       <View style={{backgroundColor:GLOBAL.COLOR.rootBAckgroundColor,alignItems:"center",flex:1}}>
      <View style={[styles.Header_salon]}>
       <TouchableOpacity style={{marginRight:wp("25%"),marginTop:hp("2%")}}  onPress={ () => { this.props.navigation.navigate('StarReview')}}>
              <Image
                source={GLOBAL.back_icon}
                style={styles.back_butt0n}
              />
              </TouchableOpacity>
        <Text style={[styles.text,{marginRight:wp("33%"),fontSize:RF(2.5)}]}>SALON DETAIL</Text>
        </View>
      <View style={{height:"15%",marginBottom:hp("0%")}}>
      <Swiper showsButtons={true} showsPagination={false}
         nextButton={<ResponsiveImage style={{marginLeft:"83%",marginBottom:hp("75%"),}} source={require('../Image/new_images/rightArrow3x.png')} initWidth="25" initHeight="25"/> }
         prevButton={<ResponsiveImage style={{marginLeft:"10%",marginBottom:hp("75%")}} source={require('../Image/new_images/leftArrow3x.png')} initWidth="25" initHeight="25" /> }>
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
      <View style={[styles.only_row,{marginTop:hp("0%")}]}>
      <Image  source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} style={styles.avatarMultiple} /> 
      <Image  source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} style={styles.avatarMultiple} /> 
      <Image  source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} style={styles.avatarMultiple} /> 
      <Image  source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} style={styles.avatarMultiple} /> 
      </View>
      <View style={{height:"100%"}}>
      <TabView 
      style={{backgroundColor:"rgb(242,242,242)"}}
        navigationState={this.state}
        renderScene={SceneMap({
          info: FirstRoute,
          Business_hour: SecondRoute,
          review:this.third,
          offer:this.Fouth,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
        useNativeDriver = {true}
        renderTabBar={(props) =>
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: 'white' }}
              style={{backgroundColor: "rgb(243,242,242)", height:hp("9%")}}
              renderIcon={this.renderIcon}
              indicatorStyle={{backgroundColor: "#ffa400"}}
              labelStyle={{color:"black",fontSize:RF(1.8)}}
            />
          }
      />
      </View>
      </View>
      </ScrollView>
    );
  }
}
 
