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
const GLOBAL = require('../Component/Color');

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
     <View style={styles.Padding_verticele}>
       <Text style={[styles.Big_text,styles.Padding_verticele]}>Select Time Slot</Text>
     <ScrollView horizontal="true">
      <RadioGroupS radioGroupList={radioGroupList} 
       buttonContainerActiveStyle = {{backgroundColor:GLOBAL.COLOR.ORANGE}}
       buttonTextActiveStyle = {{color:GLOBAL.COLOR.White_color}}
       buttonContainerInactiveStyle = {{backgroundColor: GLOBAL.COLOR.White_color}}
       buttonTextInactiveStyle = {{color: GLOBAL.COLOR.ORANGE}}
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
       <View style={{backgroundColor:GLOBAL.COLOR.rootBAckgroundColor,flex:1}}>
       <View style={[styles.Home_header,styles.Row]}>
       <TouchableOpacity style={styles.Padding_verticele} onPress={ () => { this.props.navigation.navigate('saloonDetails')}}>
              <Image
                source={GLOBAL.back_icon}
                style={styles.back_butt0n}
              />
              </TouchableOpacity>
        <Text style={[styles.text,styles.Padding_verticele,{marginRight:wp("35%")}]}>BOOK SERVICE</Text>
        </View>
        <Text style={styles.BookServiceText}>Select Service</Text>
        <TouchableOpacity style={styles.star_row}
                                           onPress={ () => this.openDialog(true) }>
            <View style={[styles.BookServiceBoxYello]}>
            </View>
            <View style={[styles.BookServiceBox]}>
            <Text style={[styles.text,]}>{this.state.hair_styling}{this.state.shampoo}{this.state.Hair_oil}
                {this.state.regular_cut}{this.state.premium_cut}{this.state.blow_dry}</Text>
            <ResponsiveImage source={GLOBAL.Down_Arrow} style={styles.Home_icon} initWidth={GLOBAL.COLOR.Size_13} initHeight={GLOBAL.COLOR.Size_8}/>
            </View>
        </TouchableOpacity>
        <Text style={styles.BookServiceText}>Select Stylist</Text>
        
        <TouchableOpacity style={styles.star_row}
                                           onPress={ () => this.openDialogStylist(true) }>
            <View style={[styles.BookServiceBoxYello]}>
            </View>
            <View style={[styles.BookServiceBox]}>
            <Text style={[styles.text,{width:wp("55"),justifyContent:"flex-start",marginLeft:wp("3%")}]}>{this.state.Stylist_name}</Text>
            <ResponsiveImage source={GLOBAL.Serve_time} initWidth={GLOBAL.COLOR.Size_20} initHeight={GLOBAL.COLOR.Size_20}/>
            <Text></Text>
            <ResponsiveImage source={GLOBAL.Down_Arrow} style={styles.Home_icon} initWidth={GLOBAL.COLOR.Size_13} initHeight={GLOBAL.COLOR.Size_8}/>
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
                                  source={GLOBAL.Cancel_Button}
                                  style={[styles.setting_Image,{marginLeft:wp("80%")}]}
                      />
                  </TouchableOpacity>

                  <Text style={styles.catogory}>Add Services</Text>
                  <Text></Text>

                  <TouchableOpacity style={[styles.setting_Row,]} activeOpacity = { 0.8 }   onPress = { this.managePasswordVisibility }>
                       <Text style={styles.History_Action}>Hair Oil Massage</Text>
                       <Image source = { ( this.state.Select_unselect ) ? GLOBAL.Unselect_Icon : GLOBAL.Select_Icon } style = {styles.Select_unselect_icon} />
                  </TouchableOpacity>
                  <View style={styles.Category_line}>
                        <ResponsiveImage source={GLOBAL.rectangle_image_black} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
                  </View>

                  <TouchableOpacity style={styles.setting_Row} activeOpacity = { 0.8 }  onPress = { this.managePasswordVisibility_1 }>
                       <Text style={styles.History_Action}>Shampoo</Text>
                        <Image source = { ( this.state.Select_unselect_1 ) ? GLOBAL.Unselect_Icon : GLOBAL.Select_Icon } style = {styles.Select_unselect_icon} />
                  </TouchableOpacity>
                  <View style={styles.Category_line}>
                  <ResponsiveImage source={GLOBAL.rectangle_image_black} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
                  </View>

                  <TouchableOpacity style={styles.setting_Row} activeOpacity = { 0.8 }  onPress = { this.managePasswordVisibility_2 }>
                        <Text style={styles.History_Action}>Regular Hair Cut</Text> 
                        <Image source = { ( this.state.Select_unselect_2 ) ? GLOBAL.Unselect_Icon : GLOBAL.Select_Icon } style = {styles.Select_unselect_icon} />
                  </TouchableOpacity>
                  <View style={styles.Category_line}>
                  <ResponsiveImage source={GLOBAL.rectangle_image_black} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
                  </View>

                  <TouchableOpacity style={styles.setting_Row} activeOpacity = { 0.8 }  onPress = { this.managePasswordVisibility_3 }>
                        <Text style={styles.History_Action}>Premium Haircut</Text>
                        <Image source = { ( this.state.Select_unselect_3 ) ? GLOBAL.Unselect_Icon : GLOBAL.Select_Icon } style = {styles.Select_unselect_icon} />
                  </TouchableOpacity>
                  <View style={styles.Category_line}>
                  <ResponsiveImage source={GLOBAL.rectangle_image_black} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
                  </View>

                  <TouchableOpacity style={styles.setting_Row} activeOpacity = { 0.8 }  onPress = { this.managePasswordVisibility_4 }>
                        <Text style={styles.History_Action}>Blow Dry</Text>
                        <Image source = { ( this.state.Select_unselect_4 ) ? GLOBAL.Unselect_Icon : GLOBAL.Select_Icon } style = {styles.Select_unselect_icon} />
                  </TouchableOpacity>
                  <View style={styles.Category_line}>
                  <ResponsiveImage source={GLOBAL.rectangle_image_black} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
                  </View>

                  <TouchableOpacity style={styles.setting_Row} activeOpacity = { 0.8 }  onPress = { this.managePasswordVisibility_5 }>
                        <Text style={styles.History_Action}>Hair Styling</Text>
                        <Image source = { ( this.state.Select_unselect_5 ) ? GLOBAL.Unselect_Icon : GLOBAL.Select_Icon } style = {styles.Select_unselect_icon} />
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
                                  source={GLOBAL.Cancel_Button}
                                  style={[styles.setting_Image,{marginLeft:wp("80%")}]}
                      />
                  </TouchableOpacity>

                  <Text style={styles.catogory}>Select Stylist</Text>
                <View style={styles.Row}>
                <View>
                  { StylistName.map((item, key)=>(
                      <TouchableOpacity onPress={ this.Stylist_list.bind(this, item)}>
                   <Text key={key} style={[styles.History_Action]} > { item } </Text>
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
        <View style={styles.radio_button}>
          <RadioGroup radioButtons={this.state.data} onPress={this.onPress} flexDirection='row' />
          </View>    
          <View style={styles.Category_line}>
          {selectedButton}
          </View>   
          <TouchableOpacity style={[styles.button,{marginHorizontal:wp("30%"),marginVertical:hp("3%")}]} >  
          <Text style={styles.buttonText}>Proceed for Queue</Text>
          </TouchableOpacity>
       </View>
    )
  }
}
