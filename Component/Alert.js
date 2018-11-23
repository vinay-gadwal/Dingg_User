import React, { Component } from 'react';
 import styles from '../Style/Style'
 import PropTypes from 'prop-types'
import { TouchableOpacity, ScrollView, View, Animated, FlatList, Text, Image, Alert, YellowBox } from 'react-native';
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ResponsiveImage from 'react-native-responsive-image'
export default class Queue_request extends Component {
 
 constructor(props) {
   super(props);
   this.state = {
                valueArray: [], disabled: false ,hair_data:"",hair_data_time:"",
                isLoading: true,MakeUp_data:"",makeup_data_time:"",
                    dataSource : [ 
                        {
                            name:"Hair cut",
                            imageUrl: "https://image.shutterstock.com/image-photo/washing-hair-450w-544510243.jpg",
                        },
                        {
                            name:"Hair cut",
                            imageUrl: "https://image.shutterstock.com/image-photo/washing-hair-450w-544510243.jpg",
                        },
                        {
                            name:"Hair cut",
                            imageUrl: "https://image.shutterstock.com/image-photo/washing-hair-450w-544510243.jpg",
                        }
                ],
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
 
render() {
return (
 <ScrollView>
   
<View style={{  flex: 1,
      justifyContent: "space-between",
      backgroundColor: "rgb(243,242,242)",
      paddingVertical:"0%"}}>
        
   
    <View style={[styles.Header,{height:hp("8%"),flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}]}>
        <Text style={[styles.text,{fontSize:RF(2.4),marginRight:wp("25%")}]}>NOTIFICATION</Text>
        <ResponsiveImage source={require('../Image/new_images/activenotificationIcon3x_2.png')} style={{marginRight:wp("5%")}} initWidth="20" initHeight="21"/>
    </View>
     <View style={{flexDirection:"row"}}>
              <FlatList          
                    data={ this.state.dataSource }
                    renderItem={({item}) => 
                    <View style={styles.list_box}>
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>                          
                             <View style={{flexDirection:"column",marginVertical:hp("2%"),marginLeft:wp("5%")}}>
                                <Image style={{width:wp("17%"), height:hp("9%"),borderRadius:10,marginRight:wp("4%"),marginVertical:hp("3%")}} source={{uri:item.imageUrl}} />                                 
                            </View>           
                              <View style={{flexDirection:"column",marginVertical:hp("2%"),alignItems:"flex-start",width:wp("60%")}}>
                                 <Text style={[styles.text,{fontSize:RF(1.8),marginLeft:wp("2.5%"),color:"rgb(255,164,0)"}]}>Token ID : TK102</Text>
                                 <Text style={[styles.text,{marginLeft:wp("3%"),fontSize:RF(2.2),marginTop:hp("1%")}]}>SpaZ Salon & Spa</Text>
                                 <Text style={[styles.text,{marginLeft:wp("3%"),fontSize:RF(2),marginTop:hp("1%")}]}>Are you still available?</Text>
                                 <View style={{flexDirection:"row",marginVertical:hp("2%")}}>
                                 <TouchableOpacity style={{marginLeft:wp("3%")}}>
                                    <ResponsiveImage source={require('../Image/main/acceptIcon3x.png')} initWidth="25" initHeight="25"/>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{marginLeft:wp("8%")}}>
                                    <ResponsiveImage source={require('../Image/main/rejectIcon3x.png')} initWidth="25" initHeight="25"/>
                                    </TouchableOpacity>
                                 </View>
                            </View>           
                        </View>
                        </View>   }                       
                    />
           </View>
 </View>
</ScrollView>
   );
 }
}
