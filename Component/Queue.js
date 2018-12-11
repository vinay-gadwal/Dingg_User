import React, { Component } from 'react';
import styles from '../Style/Style'
import { TouchableOpacity, ScrollView, View, Animated, FlatList, Text, Image, Alert, YellowBox } from 'react-native';
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ResponsiveImage from 'react-native-responsive-image'
import { Dialog } from "react-native-simple-dialogs";
import PopoverTooltip from 'react-native-popover-tooltip';
import Alert_top from '../Component/Alert' 
import {createBottomTabNavigator,createStackNavigator,} from 'react-navigation';

class Queue extends Component {
 
 constructor(props) {
   super(props);
   this.state = {
                valueArray: [], disabled: false ,hair_data:"",hair_data_time:"",
                isLoading: true,MakeUp_data:"",makeup_data_time:"",
                    dataSource : [ 
                      {
                        name:"Hair cut",
                        imageUrl: "https://image.shutterstock.com/image-photo/washing-hair-450w-544510243.jpg",
                        Shop_name:"Binacca",
                        token:"TK101"
                      },
                    {
                        name:"Hair cut",
                        imageUrl: "https://image.shutterstock.com/image-photo/washing-hair-450w-544510243.jpg",
                        Shop_name:"Binacca",
                        token:"TK102"
                      },
                    {
                        name:"Hair cut",
                        imageUrl: "https://image.shutterstock.com/image-photo/washing-hair-450w-544510243.jpg",
                        Shop_name:"Binacca",
                        token:"TK103"
                      }
                ], order: 1
       }
     this.index = 0;
     this.animatedValue = new Animated.Value(0);
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
 openDialog = (show) => {
  this.setState({ showDialog: show });
}

render() {
return (
    
<View style={styles.container}>

     <View style={{flexDirection:"row"}}>
              <FlatList      
            //   horizontal="true"    
                    data={ this.state.dataSource }
                    renderItem={({item}) => 
                    <View style={styles.Flex_main_box}>
                        
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <View style={[styles.button,{height:hp("5%"),width:wp("9.5%"),borderRadius:6}]}>
                                 <Text style={[styles.buttonText,{fontSize:RF(1.8)}]}>20%</Text>
                                 <Text style={[styles.buttonText,{fontSize:RF(1.8)}]}>off</Text>
                        </View>
                        <Image style={{width:wp("10%"), height:hp("6%"),borderRadius:10,marginRight:wp("4%"),marginVertical:hp("3%")}} source={{uri:item.imageUrl}} />
                       <View style={{flexDirection:"column",width:wp("40%"),marginVertical:hp("1%")}}>
                       <Text style={styles.yello_text}>{item.token}</Text>
                       <Text style={[styles.text,{fontSize:RF(2.5)}]}>{item.Shop_name}</Text>
                        </View>
                        <View style={{flexDirection:"column",marginVertical:hp("2%"),marginRight:wp("10%")}}>
                                <PopoverTooltip 
                                                // setBelow='true'
                                                ref='tooltip1'
                                                buttonComponent={
                                                    <View style={[styles.button,{height:hp("5.5%"),width:wp("20%"),marginVertical:hp("1%"),backgroundColor:"white",shadowColor: 'rgb(217,217,217)',}]}>
                                                    <Text style={[styles.buttonText,{color:"rgb(255,164,0)"}]}>
                                                        Action
                                                    </Text>
                                                    </View>
                                                }
                                                items={[
                                                    {
                                                    label: 'Start Serving',
                                                    onPress:() => {this.openDialog(true)} 
                                                    },
                                                    {
                                                    label: 'Move Down',
                                                    onPress: () => {}
                                                    }
                                                    ,
                                                    {
                                                    label: 'Drop',
                                                    onPress: () => {}
                                                    },
                                                    {
                                                    label: 'Alert',
                                                    onPress: () => {}
                                                    }
                                                ]}
                                                // animationType='timing'
                                                // using the default timing animation
                                    />

                            </View>   
                        </View>
                        <View style={{flexDirection:"row",}}>
                          <ResponsiveImage source={require('../Image/new_images/locationIcon2x.png')} style={{marginHorizontal:hp("2%")}} initWidth="13" initHeight="15"/>                
                          <Text style={[styles.grey_text,{fontSize:RF(1.8)}]}>28 Citi Centre, S V Road, Goregaon(W)</Text>
                        </View>
                        <View style={{flexDirection:"row",marginVertical:hp("1%"),}}>
                          <ResponsiveImage source={require('../Image/new_images/callIcon3x.png')} style={{marginHorizontal:hp("2%")}} initWidth="15" initHeight="15"/>                
                          <Text style={[styles.grey_text,{fontSize:RF(1.8)}]}>28 Citi Centre, S V Road, Goregaon(W)</Text>
                        </View> 
                        <View style={{flexDirection:"row",justifyContent:"space-evenly",marginVertical:hp("2%")}}>
                          <View style={{flexDirection:"column"}}>
                            <Text style={[styles.yello_text,{fontSize:RF(3)}]}>{item.token}</Text>
                            <Text style={[styles.text,{fontSize:RF(2),width:wp("20%")}]}>Currently Attending</Text>
                          </View>
                          <ResponsiveImage source={require('../Image/new_images/divider13x.png')} style={{marginHorizontal:hp("2%")}} initWidth="1" initHeight="60"/>                
                          <View style={{flexDirection:"column"}}>
                            <Text style={[styles.yello_text,{fontSize:RF(3)}]}>{item.token}</Text>
                            <Text style={[styles.text,{fontSize:RF(2),width:wp("20%")}]}>Currently Attending</Text>
                          </View>
                          <ResponsiveImage source={require('../Image/new_images/divider13x.png')} style={{marginHorizontal:hp("2%")}} initWidth="1" initHeight="60"/>                
                          <View style={{flexDirection:"column"}}>
                            <Text style={[styles.yello_text,{fontSize:RF(3)}]}>{item.token}</Text>
                            <Text style={[styles.text,{fontSize:RF(2),width:wp("20%")}]}>Currently Attending</Text>
                          </View>
                        </View>
                        </View> 
                          }                       
                    />
           </View>
  <Dialog
                    // title="Choose a Dingg User Type"
                    animationType="fade"
                    contentStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center",
                            width:wp("40%")
                        }
                    }
                    onTouchOutside={ () => this.openDialog(false) }
                    onTouchInside={ () => this.openDialog(false) }
                    visible={ this.state.showDialog }
                >   
                 <View style={[styles.setting_Row,{marginBottom:hp("3%")}]}>
                 <TouchableOpacity onPress={ () => this.openDialog1(true) }>
                    <Text style={styles.setting_text}>Start Serving</Text>
                    </TouchableOpacity>
                   </View>
                   <View style={{marginHorizontal:"5%"}}>
              <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="280" initHeight="2"/>
              </View>
              <View style={[styles.setting_Row,{marginBottom:hp("3%")}]}>
                    <Text style={styles.setting_text}>Move Down</Text>
                   </View>
                   <View style={{marginHorizontal:"5%"}}>
              <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="280" initHeight="2"/>
              </View>
              <View style={[styles.setting_Row,{marginBottom:hp("3%")}]}>
                    <Text style={styles.setting_text}>Drop</Text>
                   </View>
                   <View style={{marginHorizontal:"5%"}}>
              <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="280" initHeight="2"/>
              </View>
              <View style={[styles.setting_Row,{marginBottom:hp("3%")}]}>
                    <Text style={styles.setting_text}>Alert</Text>
                   </View>
   </Dialog>

  
 </View>
   );
 }
}
export default createStackNavigator({
    Queue:{
      screen:Queue,
      navigationOptions: ({ navigation }) => ({
        title: 'QUEUE',
       
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
    initialRouteName:"Queue",
    // headerMode: "none",
    navigationOptions: {
      headerTitleStyle: {
        fontWeight: 'bold',marginBottom:hp("2%"),fontSize: RF("2.4"),justifyContent:"center",alignItems:"center"
      },
        },
  
  });