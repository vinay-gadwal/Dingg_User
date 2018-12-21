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
const GLOBAL = require('../Component/Color');

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
     <View style={styles.Row}>
              <FlatList      
            //   horizontal="true"    
                    data={ this.state.dataSource }
                    renderItem={({item}) => 
                    <View style={styles.Column_reverse}>
                    <View style={styles.Flex_main_box}>
                        
                        <View style={styles.Row}>
                        <Image style={styles.Queue_imae} source={{uri:item.imageUrl}} />
                       <View style={styles.Queue_column}>
                       <Text style={styles.yello_text}>{item.token}</Text>
                       <Text style={[styles.text]}>{item.Shop_name}</Text>
                        </View>
                        <View style={styles.Action_queue}>
                                <PopoverTooltip 
                                                // setBelow='true'
                                                ref='tooltip1'
                                                buttonComponent={
                                                    <View style={[styles.button,styles.Action_Touch_button]}>
                                                    <Text style={[styles.buttonText,{color:GLOBAL.COLOR.ORANGE}]}>
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
                        <View style={styles.Queue_row}>
                          <ResponsiveImage source={GLOBAL.Location_icon} style={{marginHorizontal:hp("2%")}} initWidth={GLOBAL.COLOR.Size_14} initHeight={GLOBAL.COLOR.Size_15}/>                
                          <Text style={[styles.grey_text]}>28 Citi Centre, S V Road, Goregaon(W)</Text>
                        </View>
                        <View style={styles.Queue_row}>
                          <ResponsiveImage source={GLOBAL.call_icon} style={{marginHorizontal:hp("2%")}} initWidth={GLOBAL.COLOR.Size_15} initHeight={GLOBAL.COLOR.Size_15}/>                
                          <Text style={[styles.grey_text]}>28 Citi Centre, S V Road, Goregaon(W)</Text>
                        </View> 
                        <View style={[styles.Row,{marginHorizontal:wp("5%")}]}>
                          <View style={styles.column}>
                            <Text style={[styles.Yellow_big]}>{item.token}</Text>
                            <Text style={[styles.Queue_text]}>Currently Attending</Text>
                          </View>
                          <ResponsiveImage source={GLOBAL.Divider} style={styles.rectangle_image} initWidth={GLOBAL.COLOR._height} initHeight={GLOBAL.COLOR.Yellow_60}/>                
                          <View style={styles.column}>
                          <Text style={[styles.Yellow_big]}>{item.token}</Text>
                          <Text style={[styles.Queue_text]}>Currently Attending</Text>
                          </View>
                          <ResponsiveImage source={GLOBAL.Divider} style={styles.rectangle_image} initWidth={GLOBAL.COLOR._height} initHeight={GLOBAL.COLOR.Yellow_60}/>                
                          <View style={styles.column}>
                          <Text style={[styles.Yellow_big]}>{item.token}</Text>
                            <Text style={[styles.Queue_text]}>Currently Attending</Text>
                          </View>
                        </View>
                        </View> 
                        <View style={[styles.Edit_button]}>
                            <View style={[styles.Button_offer_home,styles.Queue_offer]}>
                              <Text style={[styles.offer_button_text]}>20%</Text>
                              <Text style={[styles.offer_button_text]}>off</Text>
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
                        }
                    }
                    onTouchOutside={ () => this.openDialog(false) }
                    onTouchInside={ () => this.openDialog(false) }
                    visible={ this.state.showDialog }
                >   
                 <TouchableOpacity onPress={ () => this.openDialog1(true) }>
                    <Text style={styles.setting_text}>Start Serving</Text>
                    </TouchableOpacity>
              <ResponsiveImage source={GLOBAL.rectangle_image_black} />
                    <Text style={styles.setting_text}>Move Down</Text>
              <ResponsiveImage source={GLOBAL.rectangle_image_black} />
                    <Text style={styles.setting_text}>Drop</Text>
              <ResponsiveImage source={GLOBAL.rectangle_image_black}/>
                    <Text style={styles.setting_text}>Alert</Text>
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
    initialRouteName:"Queue",
    // headerMode: "none",
    navigationOptions: {
      headerTitleStyle: styles.Header,
        },
  });