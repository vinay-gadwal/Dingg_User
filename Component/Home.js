import React, { Component } from 'react';
import {
  Text,
  View,Image,
  ScrollView,Alert,TouchableOpacity,FlatList
} from 'react-native';
import styles from '../Style/Style'
import ToggleSwitch from 'toggle-switch-react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize"
import { Dialog } from "react-native-simple-dialogs";
import CountDown from 'react-native-countdown-component';
import TimerCountdown from 'react-native-timer-countdown';
import ResponsiveImage from 'react-native-responsive-image'
import SwitchButton from 'switch-button-react-native';
import Switch from 'react-native-customisable-switch';

export default class App extends Component {
    state = {
        avatarSource: null,avatarSource1:null,
        videoSource: null,isOnDefaultToggleSwitch: false,
        isOnLargeToggleSwitch_user: true,
        isOnBlueToggleSwitch: false,switchThreeValue: true,location: null,
        dataSource : [
          {
            name: "John Doe",served:"20",queue:"14",wait_time:120
          },
          {
            name: "rohan dell",served:"10",queue:"24",wait_time:300
          },
          {
            name: "john alexer",served:"10",queue:"24",wait_time:600
          },
          {
            name: "same flint",served:"4",queue:"4",wait_time:180
          }
        ]
    
      };
      
    openDialog = (show) => {
        this.setState({ showDialog: show });
    }

    onToggle(isOn){
      // alert('Changed to ' + isOn)
    }
    
    findCoordinates = () => {
      navigator.geolocation.getCurrentPosition(
        position => {
          const location = JSON.stringify(position);
  
          this.setState({ location });
        },
        error => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    };

  render() {
    const {
      switchThreeValue,
    } = this.state;
    return (
      <ScrollView style={{backgroundColor:"rgb(243,242,242)"}} horizontal={false}>
      
      <View style={styles.Header}>
        <View style={{flexDirection:"row",marginVertical:hp("2%"),marginHorizontal:wp("5%")}}>
        <TouchableOpacity onPress={this.findCoordinates}>
          <ResponsiveImage source={require('../Image/new_images/locationIcon2x.png')} style={{marginVertical:hp(".5%")}} initWidth="20" initHeight="23"/>                
          </TouchableOpacity>
          <Text style={{fontFamily:"Muli-Bold",fontSize:RF(2.3),marginLeft:wp("2%")}}>Sahyog Mandir Rd, Thane</Text>
          <ResponsiveImage source={require('../Image/new_images/editAddressIcon2x.png')} style={{marginVertical:hp("1%"),marginLeft:wp("2%")}} initWidth="14" initHeight="15"/>                
          <ResponsiveImage source={require('../Image/new_images/notificationIcon3x.png')} style={{marginVertical:hp(".5%"),marginLeft:wp("20%")}} initWidth="20" initHeight="23"/>
        </View>
        <View style={{flexDirection:"row"}}>
        
        <View style={{flexDirection:"column",marginBottom:hp("2%"),marginHorizontal:wp("5%")}}>
          <View style={{flexDirection:"row"}}>
          <ResponsiveImage source={require('../Image/new_images/searchIcon2x.png')} style={{marginTop:hp("1%")}} initWidth="15" initHeight="15"/> 
          <Text style={{fontFamily:"Muli-Bold",fontSize:RF(2.3),color:"rgb(221,221,221)",marginLeft:wp("2%"),marginBottom:hp(".5%")}}>Search</Text>
          </View>
          <ResponsiveImage style={{marginLeft:"1%",marginVertical:hp("1%")}} source={require('../Image/main/tableDivider2x.png')} initWidth="200" initHeight="2"/>
        </View>
       
        <View style={{flexDirection:"column",marginBottom:hp("2%"),marginHorizontal:wp("5%")}}>
          <View style={{flexDirection:"row"}}>
          <Text style={{fontFamily:"Muli-Bold",fontSize:RF(2.3),color:"black",marginLeft:wp("2%"),marginBottom:hp(".5%")}}>Salon</Text>
          <ResponsiveImage source={require('../Image/new_images/downArrow2x.png')} style={{marginTop:hp("1%"),marginLeft:wp("12%")}} initWidth="10" initHeight="7"/> 
          </View>
          <ResponsiveImage style={{marginHorizontal:"5%",marginVertical:hp("1%")}} source={require('../Image/main/tableDivider2x.png')} initWidth="120" initHeight="2"/>
        </View>
        
        </View>
      </View>

      <View style={[styles.box_SignUp,{height:hp("7%"),marginVertical:hp("2%"),marginHorizontal:wp("5%")}]}>
        <Text style={[styles.text,{marginRight:wp("60%"),paddingVertical:hp('1.5%'),}]}>Top Picks</Text>
      </View>
      </ScrollView>
    );
  }
}

