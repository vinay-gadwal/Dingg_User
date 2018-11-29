import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,TouchableOpacity,Image,Text,ScrollView
} from 'react-native'
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styles from '../Style/Style'
import ResponsiveImage from 'react-native-responsive-image'
import { Dialog } from "react-native-simple-dialogs";
import RadioGroup from 'react-native-radio-buttons-group';
import RadioGroupS from 'react-native-custom-radio-group';
const radioGroupList = [{
    label: '4 pm',
    value: 'transport_car'
  }, {
    label: '5 pm',
    value: 'transport_bike',
  }, {
    label: '6 pm',
    value: 'transport_bus'
  },{
    label: '5 pm',
    value: 'transport_bike',
  }, {
    label: '6 pm',
    value: 'transport_bus'
  },{
    label: '5 pm',
    value: 'transport_bike',
  }, {
    label: '6 pm',
    value: 'transport_bus'
  },
  ];
export default class StarReview extends Component {
  constructor(props) {
    super(props)
    this.state = {
        Select_unselect:"true",Select_unselect_1:"true",Select_unselect_2:"true",
        Select_unselect_3:"true",Select_unselect_4:"true",Select_unselect_5:"true",
        Hair_oil:"",shampoo:"",regular_cut:"",premium_cut:"",blow_dry:"",hair_styling:"",
        Stylist_name:"",Stylist_time:"",
        data: [ 
            {
                label: 'Join Now',
                color: 'rgb(255,164,0)',
                value:this.JoinNow(),
            },
            {
                label: 'Join Later',
                color: 'rgb(255,164,0)',
                value:this.JoinLatter(),
            }, 
              ],
    }
 
  }


  JoinNow(){
    this.setState({Join_now:true})
   return (
     <View>
     </View>
   )
  }
  JoinLatter(){
    return(
     <View style={{height:hp("12%")}}>
       <Text style={[styles.text,{marginLeft:wp("3%"),color:"rgb(165,165,165)",marginVertical:hp("2%")}]}>Select Time Slot</Text>
     <ScrollView horizontal="true">
      <RadioGroupS radioGroupList={radioGroupList} 
       buttonContainerActiveStyle = {{backgroundColor: "rgb(255,164,0)"}}
       buttonTextActiveStyle = {{color: "white"}}
       buttonContainerInactiveStyle = {{backgroundColor: "white"}}
       buttonTextInactiveStyle = {{color: "rgb(255,164,0)"}}
       buttonContainerStyle ={{borderColor:"transparent",height:hp("6%"),marginRight:wp("1%"), shadowColor: 'rgb(222,222,222)',
       shadowOffset: { width: 0, height: hp("0.5%") },
       shadowOpacity: 0.8,
       shadowRadius: 4,}}
     />
     </ScrollView>
     </View>
    )
  }
  openDialog = (show) => {
    this.setState({ showDialog: show });
}
openDialogStylist = (show) => {
    this.setState({ showDialogStylist: show });
}
        Stylist_list = () =>{
            this.setState({Stylist_name : "Danny"})
        }
        managePasswordVisibility = () =>
        {
            if(this.state.Hair_oil == "")
          {
              this.setState({ Select_unselect: !this.state.Select_unselect ,Hair_oil: "Hair Oil Massage," });
          } 
          else
          {
            this.setState({ Select_unselect: !this.state.Select_unselect ,Hair_oil: "" });         
          } 
        }
        managePasswordVisibility_1 = () =>
        {
            if(this.state.shampoo == "")
            {
                this.setState({ Select_unselect_1: !this.state.Select_unselect_1 ,shampoo: "Shampoo," });
            } 
            else
            {
              this.setState({ Select_unselect_1: !this.state.Select_unselect_1 ,shampoo: "" });         
            }       
         }
        managePasswordVisibility_2 = () =>
        {
            if(this.state.regular_cut == "")
            {
                this.setState({ Select_unselect_2: !this.state.Select_unselect_2 ,regular_cut: "Regular Hair Cut," });
            } 
            else
            {
              this.setState({ Select_unselect_2: !this.state.Select_unselect_2 ,regular_cut: "" });         
            }  
        }
        managePasswordVisibility_3 = () =>
        {
            if(this.state.premium_cut == "")
            {
                this.setState({ Select_unselect_3: !this.state.Select_unselect_3 ,premium_cut: "Premium Hair Cut," });
            } 
            else
            {
              this.setState({ Select_unselect_3: !this.state.Select_unselect_3 ,premium_cut: "" });         
            } 
        }
        managePasswordVisibility_4 = () =>
        {
            if(this.state.blow_dry == "")
            {
                this.setState({ Select_unselect_4: !this.state.Select_unselect_4 ,blow_dry: "Blow Dry," });
            } 
            else
            {
              this.setState({ Select_unselect_4: !this.state.Select_unselect_4 ,blow_dry: "" });         
            }     
        }
        managePasswordVisibility_5 = () =>
        {
            if(this.state.hair_styling == "")
            {
                this.setState({ Select_unselect_5: !this.state.Select_unselect_5 ,hair_styling: "Hair Styling," });
            } 
            else
            {
              this.setState({ Select_unselect_5: !this.state.Select_unselect_5 ,hair_styling: "" });         
            } 
        }
       
        Stylist_list=(item)=>{
            this.setState({Stylist_name : item})      
          }
       
          Stylist_time=(item)=>{
            this.setState({Stylist_time : item})      
          }
          
          onPress = data => this.setState({ data });
          
render() {
    var StylistName = [ "Pankaj", "Rita", "Mohan", "Amit", "Babulal", "Sakshi" ];
    var Time = [ "10", "20", "30", "40", "50", "60" ];
    let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.JoinNow()
        return (
       <View style={{backgroundColor:"rgb(243,242,242)",alignItems:"center",flex:1}}>
       <View style={[styles.Header,{height:hp("8%"),flexDirection:"row",justifyContent:"center",alignItems:"center"}]}>
        <Text style={[styles.text,]}>BOOK SERVICE</Text>
        </View>
        <Text style={styles.BookServiceText}>Select Service</Text>
        <TouchableOpacity style={{flexDirection:"row"}}
                                           onPress={ () => this.openDialog(true) }>
            <View style={styles.BookServiceBoxYello}>
            </View>
            <View style={styles.BookServiceBox}>
            <Text style={[styles.text,{width:wp("70"),justifyContent:"flex-start",marginLeft:wp("3%")}]}>{this.state.hair_styling}{this.state.shampoo}{this.state.Hair_oil}
                {this.state.regular_cut}{this.state.premium_cut}{this.state.blow_dry}</Text>
            <ResponsiveImage source={require('../Image/new_images/downArrow2x.png')} style={{marginRight:wp("2%"),marginLeft:wp("3%")}} initWidth="13" initHeight="10"/>
            </View>
        </TouchableOpacity>
        <Text style={styles.BookServiceText}>Select Stylist</Text>
        
        <TouchableOpacity style={{flexDirection:"row"}}
                                           onPress={ () => this.openDialogStylist(true) }>
            <View style={styles.BookServiceBoxYello}>
            </View>
            <View style={styles.BookServiceBox}>
            <Text style={[styles.text,{width:wp("55"),justifyContent:"flex-start",marginLeft:wp("3%")}]}>{this.state.Stylist_name}</Text>
            <ResponsiveImage style={{marginRight:wp("3%")}} source={require('../Image/main/serveTimeIcon3x.png')} initWidth="20" initHeight="20"/>
            <Text></Text>
            <ResponsiveImage source={require('../Image/new_images/downArrow2x.png')} style={{marginRight:wp("3%"),marginLeft:wp("2%")}} initWidth="13" initHeight="10"/>
            </View>
        </TouchableOpacity>

          <Dialog
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
                 <TouchableOpacity onPress={() => this.openDialog(false)}>
                      <Image
                                  source={require('../Image/icon/cancel1.png')}
                                  style={[styles.setting_Image,{marginLeft:wp("80%"),marginBottom:hp("0%"),marginTop:hp("0%")}]}
                      />
                  </TouchableOpacity>

                  <Text style={[styles.text,{fontSize: RF(3),}]}>Add Services</Text>
                  <Text></Text>

                  <TouchableOpacity style={[styles.setting_Row,{marginBottom:hp("0%"),justifyContent:"space-between"}]} activeOpacity = { 0.8 }   onPress = { this.managePasswordVisibility }>
                       <Text style={styles.History_Action}>Hair Oil Massage</Text>
                       <Image source = { ( this.state.Select_unselect ) ? require('../Image/main/unselectedIcon3x.png') : require('../Image/main/selectedIcon3x.png') } style = {{width:wp(5.5),height:hp(3),marginLeft:wp("2%"),marginRight:wp("5%"),marginTop:hp("1%")}} />
                  </TouchableOpacity>
                  <View style={{marginHorizontal:"5%"}}>
                        <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="320" initHeight="2"/>
                  </View>

                  <TouchableOpacity style={styles.setting_Row} activeOpacity = { 0.8 }  onPress = { this.managePasswordVisibility_1 }>
                       <Text style={styles.History_Action}>Shampoo</Text>
                        <Image source = { ( this.state.Select_unselect_1 ) ? require('../Image/main/unselectedIcon3x.png') : require('../Image/main/selectedIcon3x.png') } style = {{width:wp(5.5),height:hp(3),marginLeft:wp("2%"),marginRight:wp("5%"),marginTop:hp("1%")}} />
                  </TouchableOpacity>
                  <View style={{marginHorizontal:"5%"}}>
                        <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="320" initHeight="2"/>
                  </View>

                  <TouchableOpacity style={styles.setting_Row} activeOpacity = { 0.8 }  onPress = { this.managePasswordVisibility_2 }>
                        <Text style={styles.History_Action}>Regular Hair Cut</Text> 
                        <Image source = { ( this.state.Select_unselect_2 ) ? require('../Image/main/unselectedIcon3x.png') : require('../Image/main/selectedIcon3x.png') } style = {{width:wp(5.5),height:hp(3),marginLeft:wp("2%"),marginRight:wp("5%"),marginTop:hp("1%")}} />
                  </TouchableOpacity>
                  <View style={{marginHorizontal:"5%"}}>
                        <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="320" initHeight="2"/>
                  </View>

                  <TouchableOpacity style={styles.setting_Row} activeOpacity = { 0.8 }  onPress = { this.managePasswordVisibility_3 }>
                        <Text style={styles.History_Action}>Premium Haircut</Text>
                        <Image source = { ( this.state.Select_unselect_3 ) ? require('../Image/main/unselectedIcon3x.png') : require('../Image/main/selectedIcon3x.png') } style = {{width:wp(5.5),height:hp(3),marginLeft:wp("2%"),marginRight:wp("5%"),marginTop:hp("1%")}} />
                  </TouchableOpacity>
                  <View style={{marginHorizontal:"5%"}}>
                        <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="320" initHeight="2"/>
                  </View>

                  <TouchableOpacity style={styles.setting_Row} activeOpacity = { 0.8 }  onPress = { this.managePasswordVisibility_4 }>
                        <Text style={styles.History_Action}>Blow Dry</Text>
                        <Image source = { ( this.state.Select_unselect_4 ) ? require('../Image/main/unselectedIcon3x.png') : require('../Image/main/selectedIcon3x.png') } style = {{width:wp(5.5),height:hp(3),marginLeft:wp("2%"),marginRight:wp("5%"),marginTop:hp("1%")}} />
                  </TouchableOpacity>
                  <View style={{marginHorizontal:"5%"}}>
                        <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="320" initHeight="2"/>
                  </View>

                  <TouchableOpacity style={styles.setting_Row} activeOpacity = { 0.8 }  onPress = { this.managePasswordVisibility_5 }>
                        <Text style={styles.History_Action}>Hair Styling</Text>
                        <Image source = { ( this.state.Select_unselect_5 ) ? require('../Image/main/unselectedIcon3x.png') : require('../Image/main/selectedIcon3x.png') } style = {{width:wp(5.5),height:hp(3),marginLeft:wp("2%"),marginRight:wp("5%"),marginTop:hp("1%")}} />
                  </TouchableOpacity>                 
   </Dialog>

   <Dialog
                    animationType="fade"
                    contentStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialogStylist(false) }
                    onTouchInside={ () => this.openDialogStylist(false) }
                    visible={ this.state.showDialogStylist }
                >   
                 <TouchableOpacity onPress={() => this.openDialogStylist(false)}>
                      <Image
                                  source={require('../Image/icon/cancel1.png')}
                                  style={[styles.setting_Image,{marginLeft:wp("80%"),marginBottom:hp("0%"),marginTop:hp("0%")}]}
                      />
                  </TouchableOpacity>

                  <Text style={[styles.text,{fontSize: RF(3),}]}>Select Stylist</Text>
                <View style={{flexDirection:"row",marginTop:hp("3%")}}>
                <View>
                  { StylistName.map((item, key)=>(
                      <TouchableOpacity onPress={ this.Stylist_list.bind(this, item)}>
                   <Text key={key} style={[styles.History_Action,{width:wp("50%")}]} > { item } </Text>
                   </TouchableOpacity>
                   )
                   )}
                   </View>
                   
                   <View>
                   { Time.map((item, key)=>(
                      <TouchableOpacity onPress={ this.Stylist_time.bind(this, item)}>
                   <Text key={key} style={[styles.History_Action,{width:wp("8%"),marginVertical:hp("1%")}]}> { item } </Text>
                   </TouchableOpacity>
                   )
                   )}
                   </View>
                   </View>
        </Dialog>
        <View style={{flexDirection:"row",marginRight:wp("30%"),marginTop:hp("2%")}}>
          <RadioGroup style={color="red"} radioButtons={this.state.data} onPress={this.onPress} flexDirection='row' />
          </View>    
          <View style={{marginHorizontal:wp("5%"),marginVertical:hp("2%")}}>
          {selectedButton}
          </View>   
          <TouchableOpacity style={[styles.button]} >  
          <Text style={styles.buttonText}>Proceed for Queue</Text>
          </TouchableOpacity>
       </View>
    )
  }
}
