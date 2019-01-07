import React, { Component } from 'react';
 import styles from '../Style/Style'
 import PropTypes from 'prop-types'
import { TouchableOpacity, ScrollView, View, Animated, FlatList, Text, Image, Alert, YellowBox } from 'react-native';
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ResponsiveImage from 'react-native-responsive-image'
const GLOBAL = require('../Component/Color');

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
   
<View style={styles.container}>
        
     <View style={[styles.Row,{height:hp("100%")}]}>
              <FlatList          
                    data={ this.state.dataSource }
                    renderItem={({item}) => 
                    <View style={[styles.list_box]}>
                        <View style={styles.Row}>                          
                             <View style={[styles.column,styles.Padding_verticele,styles.Image_margin]}>
                                <Image style={styles.avatarMultiple} source={{uri:item.imageUrl}} />                                 
                            </View>           
                              <View style={[styles.column,styles.Padding_verticele,{width:wp("58%")}]}>
                                 <Text style={styles.yello_text}>Token ID : TK102</Text>
                                 <Text style={[styles.text,{fontFamily:GLOBAL.COLOR.Font_bold}]}>SpaZ Salon & Spa</Text>
                                 <Text style={[styles.text]}>Are you still available?</Text>
                                 <View style={[styles.Row,styles.Padding_verticele]}>
                                 <TouchableOpacity >
                                    <ResponsiveImage source={GLOBAL.Accept} initWidth={GLOBAL.COLOR.Icon_width} initHeight={GLOBAL.COLOR.Icon_width}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{marginRight:wp("40%")}}>
                                    <ResponsiveImage source={GLOBAL.Reject} initWidth={GLOBAL.COLOR.Icon_width} initHeight={GLOBAL.COLOR.Icon_width}/>
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
