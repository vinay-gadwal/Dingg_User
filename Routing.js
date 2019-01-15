import React from 'react';
import {TouchableOpacity,Image,Dimensions,Icon,SafeAreaView,View} from 'react-native';
import {createBottomTabNavigator,createStackNavigator,} from 'react-navigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize"
import sing_in from './Auth_Module/Signin'
import sing_up from './Auth_Module/Signup'
import Forget_password from './Auth_Module/Forget_Pass'
import For_New_Pass from './Auth_Module/Forget_Pass_NewPass'
import Add_Details from './Auth_Module/AddDetails'
import Setting from './Component/Setting'
import Profile from './Component/Profile'
import Profile_edit from './Component/Profile_Edit'
import history from './Component/History'
import Queue from './Component/Queue'
import styles from './Style/Style';
import Home from './Component/Home'
import QR from './Component/QR'
import ResponsiveImage from 'react-native-responsive-image'
console.disableYellowBox = true;
import Rating_Screen from './Home_screens/RatingScreen'
import SignOtp from './Auth_Module/Sign_up_otp'
import ForgotOtp from './Auth_Module/Forgot_otp'
import AuthLoadingScreen from './Component/AuthLoadingScreen'
import apis from './apis/index'
import Salon_details from './Home_screens/SalonDetails'
const GLOBAL = require('./Component/Color');
//
const AuthStack = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => {
        const line = focused ?  GLOBAL.TAb_image_yellow : GLOBAL.TAb_image_transparent
        const image = focused
        ? GLOBAL.Home_yello
        : GLOBAL.Home
        return (
          <View style={styles.Routing_tab}>
          <ResponsiveImage source={line} style={{marginBottom:hp("2%")}} initWidth={GLOBAL.COLOR.size_55} initHeight={GLOBAL.COLOR.Icon_divider_width}/>
          <ResponsiveImage source={image} style={{marginBottom:hp("3%")}} initWidth={GLOBAL.COLOR.Icon_divider_height} initHeight={GLOBAL.COLOR.Icon_divider_height}/>
          </View>
        )
    }
    })
  },

  Q: {
    screen: Queue,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => {
        const line = focused ?  GLOBAL.TAb_image_yellow : GLOBAL.TAb_image_transparent
        const image = focused
        ? GLOBAL.Queue_yello
        : GLOBAL.Queue
        return (
          <View style={styles.Routing_tab}>
          <ResponsiveImage source={line} style={{marginBottom:hp("2%")}} initWidth={GLOBAL.COLOR.Yellow_60} initHeight={GLOBAL.COLOR.Icon_divider_width}/>
          <ResponsiveImage source={image} style={{marginBottom:hp("3%")}} initWidth={GLOBAL.COLOR.Icon_divider_height} initHeight={GLOBAL.COLOR.Icon_divider_height}/>
          </View>
        )
    }
    })
  },
  QR: {
    screen: QR,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => {
        const line = focused ?  GLOBAL.TAb_image_yellow : GLOBAL.TAb_image_transparent
        const image = focused
        ? GLOBAL.Scanner_yellow
        : GLOBAL.Scanner
        return (
          <View style={styles.Routing_tab}>
          <ResponsiveImage source={line} style={{marginBottom:hp("2%")}} initWidth={GLOBAL.COLOR.Yellow_60} initHeight={GLOBAL.COLOR.Icon_divider_width}/>
          <ResponsiveImage source={image} style={{marginBottom:hp("3%")}} initWidth={GLOBAL.COLOR.Icon_divider_height} initHeight={GLOBAL.COLOR.Icon_divider_height}/>
          </View>
        )
    }
    })
  },
  H: {
    screen: history,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => {
        const line = focused ? GLOBAL.TAb_image_yellow : GLOBAL.TAb_image_transparent
        const image = focused
        ? GLOBAL.History_yellow
        : GLOBAL.History
        return (
          <View style={styles.Routing_tab}>
          <ResponsiveImage source={line} style={{marginBottom:hp("2%")}} initWidth={GLOBAL.COLOR.Yellow_60} initHeight={GLOBAL.COLOR.Icon_divider_width}/>
          <ResponsiveImage source={image} style={{marginBottom:hp("3%")}} initWidth={GLOBAL.COLOR.Icon_divider_height} initHeight={GLOBAL.COLOR.Icon_divider_height}/>
          </View>
        )
    }
    })
  },
  P: {
    screen: Profile,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => {
        const line = focused ?  GLOBAL.TAb_image_yellow : GLOBAL.TAb_image_transparent
        const image = focused
        ? GLOBAL.Profile_yellow
        : GLOBAL.Profile
        return (
          <View style={styles.Routing_tab}>
          <ResponsiveImage source={line} style={{marginBottom:hp("2%"),marginRight:wp("4%")}} initWidth={GLOBAL.COLOR.size_55} initHeight={GLOBAL.COLOR.Icon_divider_width}/>
          <ResponsiveImage source={image} style={{marginBottom:hp("3%")}} initWidth="21" initHeight={GLOBAL.COLOR.Icon_divider_height}/>
          </View>
        )}
    })
  },

},
{
  initialRouteName: 'Home',
  headerMode:"none",
  tabBarOptions: {
    indicatorStyle: {
      backgroundColor: 'black',
      height: 10,
      alignSelf: 'flex-end',
  },
      showIcon: true,
      showLabel: false,
    style: {
      height: hp("8%"),
      backgroundColor: "white",
      alignItems:"center",
      indicatorStyle:{
        backgroundColor:'#de1d3e',
      },
    },
}
});

const RootStack = createStackNavigator({
  AuthLoadingScreen: AuthLoadingScreen,
  SignIn: {
          screen: sing_in,
          navigationOptions: ({ navigation }) => ({
            title: 'SIGN IN',
            headerLeft: null,
            headerBackTitle:null,
            tabBarVisible: false

          })
        },
  SignUp: {
          screen: sing_up,
          navigationOptions: ({ navigation }) => ({
            title: 'SIGN UP',
            headerLeft: null,
            headerBackTitle:null,
          })
        },
 SignOtp: {
          screen: SignOtp,
          navigationOptions: ({ navigation }) => ({
            title:'OTP VERIFICATION',
            headerLeft:(
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={GLOBAL.back_icon}
              style={[styles.back_butt0n,{marginBottom:hp("1%")}]}
            />
            </TouchableOpacity>)
          })
        },
  Forget_password: {
          screen: Forget_password,
          navigationOptions: ({ navigation }) => ({
            title:'FORGOT PASSWORD',
            headerLeft:(
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={GLOBAL.back_icon}
              style={[styles.back_butt0n,{marginBottom:hp("1%")}]}
            />
            </TouchableOpacity>)
          })
        },
  ForgotOtp: {
          screen: ForgotOtp,
          navigationOptions: ({ navigation }) => ({
            title:'OTP VERIFICATION',
            headerLeft:(
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={GLOBAL.back_icon}
              style={[styles.back_butt0n,{marginBottom:hp("1%")}]}
            />
            </TouchableOpacity>)
          })
        },
  For_New_Pass:{
      screen:For_New_Pass,
      navigationOptions: ({ navigation }) => ({
        title:'CREATE NEW PASSWORD',
        headerLeft: null,
        headerBackTitle:null,
      })
  },
  AddDetails:{
          screen: Add_Details,
          navigationOptions: ({ navigation }) => ({
            title: 'ADD PERSONAL DETAILS',
            headerLeft: null,
            headerBackTitle:null,
          })
        },

  AuthStack:{
             screen:AuthStack,
             headerMode:"none",
             navigationOptions: ({ navigation }) => ({
              header: null,
            })
            },
  Setting:{
            screen:Setting,
            navigationOptions: ({ navigation }) => ({
              title: 'SELECT CATEGORY',
              headerLeft: null,
              headerBackTitle:null,
            })
          } ,
  Queue:{
          screen:Queue,
          navigationOptions: ({ navigation }) => ({
            title: 'SETTINGS',
          })
        },

  history:{
          screen:history,
          navigationOptions: ({ navigation }) => ({
          })
        },
  Profile:{
          screen:Profile,
          headerMode: null,
          navigationOptions: ({ navigation }) => ({
          headerLeft: null,
          })
        },

  Profile_edit:{
          screen:Profile_edit,
          headerMode: null,
          navigationOptions: ({ navigation }) => ({
            title: 'EDIT PROFILE',
            headerLeft:(
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={GLOBAL.back_icon}
              style={styles.back_butt0n}
            />
            </TouchableOpacity>)
          })
        },
Rating_Screen:{
          screen:Rating_Screen,
          headerMode: null,
          navigationOptions: ({ navigation }) => ({
            title: 'REVIEW',
            headerLeft:(
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={GLOBAL.back_icon}
              style={styles.back_butt0n}
            />
            </TouchableOpacity>)
          })
        },
      },

      {
        initialRouteName:"AuthLoadingScreen",
        navigationOptions: {
          headerTitleStyle: {
            fontWeight: 'bold',marginBottom:hp("2%"),fontSize: RF("2.4"),justifyContent:"center",alignItems:"center"
          },
            },

});
const FinalStack = createStackNavigator({
  RootStack:RootStack,
  AuthStack:AuthStack,
  SignIn:sing_in,
},
{
  initialRouteName:"RootStack",
  headerMode: "none",
}
)
export default class DinggApp extends React.Component {
  constructor(){  
    super();
  }
  render() {
    return (
      <SafeAreaView   forceInset={{top: 'always'}}>
      <FinalStack />
      </SafeAreaView>
    );
  }
}