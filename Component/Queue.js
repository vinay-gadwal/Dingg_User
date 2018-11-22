import React, { Component } from 'react';
import styles from '../Style/Style'
import { TouchableOpacity, ScrollView, View, Animated, FlatList, Text, Image, Alert, YellowBox } from 'react-native';
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ResponsiveImage from 'react-native-responsive-image'
import { Dialog } from "react-native-simple-dialogs";
import PopoverTooltip from 'react-native-popover-tooltip';

export default class Queue_request extends Component {
 
 constructor(props) {
   super(props);
   this.state = {
                valueArray: [], disabled: false ,hair_data:"",hair_data_time:"",
                isLoading: true,MakeUp_data:"",makeup_data_time:"",
                    dataSource : [ 
                        {
                            name:"Hair cut"
                        },
                        {
                            name:"Hair cut"
                        },
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
    
<View style={{  flex: 1,
      justifyContent: "space-between",
      backgroundColor: "rgb(243,242,242)",
      paddingVertical:"0%"}}>
        
  
          
     <View style={{flexDirection:"row"}}>
              <FlatList      
            //   horizontal="true"    
                    data={ this.state.dataSource }
                    renderItem={({item}) => 
                    <View style={{ 
                        width: wp('90%'),marginLeft:"5%",
                        height: hp('35%'),
                        backgroundColor:"white",
                        marginVertical:hp('2%'),
                        borderRadius:10,}}>
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>                          
                             <View style={{flexDirection:"column",marginVertical:hp("2%"),marginLeft:wp("5%")}}>
                                <View style={{flexDirection:"row"}}>
                                    <ResponsiveImage source={require('../Image/main/serveTimeIcon3x.png')} initWidth="20" initHeight="20"/>
                                    <Text style={[styles.text,{marginLeft:wp("3%")}]}>{item.name}</Text>
                                 </View>
                                 <View style={{marginVertical:hp("2%")}}>
                                 <Image style={styles.avatarMultiple} source={GLOBAL.Image} />                                 
                                 </View>
                                <PopoverTooltip 
                                                // setBelow='true'
                                                ref='tooltip1'
                                                buttonComponent={
                                                    <View style={[styles.button,{height:hp("7%"),width:wp("25%"),marginVertical:hp("2%"),backgroundColor:"white",shadowColor: 'rgb(217,217,217)',}]}>
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
                              <View style={{flexDirection:"column",marginVertical:hp("2%"),alignItems:"flex-start",width:wp("45%")}}>
                                 <Text style={[styles.text,{fontSize:RF(2.7),marginBottom:hp("1%"),marginLeft:wp("2.5%")}]}>Token ID : TK102</Text>
                                 <Text style={[styles.text,{marginLeft:wp("3%"),fontSize:RF(2.7),marginBottom:hp("1%")}]}>{item.name}</Text>
                                 <Text style={[styles.text,{marginLeft:wp("3%"),fontSize:RF(2),color:"rgb(187,187,187)",marginTop:hp("1.5%")}]}>Service</Text>
                                 <Text style={[styles.text,{marginLeft:wp("3%"),fontSize:RF(2.7)}]}>{item.name}</Text>
                                 <Text style={[styles.text,{marginLeft:wp("3%"),fontSize:RF(2),color:"rgb(187,187,187)",marginTop:hp("1.5%")}]}>Stylist</Text>
                                 <Text style={[styles.text,{marginLeft:wp("3%"),fontSize:RF(2.7)}]}>{item.name}</Text>
                            </View>  
                            </View>         
                        </View>   }                       
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
