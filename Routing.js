import React from 'react';
import codePush from "react-native-code-push";
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
import StartScreen from './Home_screens/RatingScreen'
const AuthStack = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => {
        const line = focused ? require('./Image/main/highlight3x.png') : require('./Image/main/line-transparent-vertical-2.png')
        const image = focused
        ? require('./Image/new_images/homeIcon_yellow3x.png')
        : require('./Image/new_images/homeIcon3x.png')
        return (
          <View style={{flexDirection:"column",alignItems:"center"}}>
          <ResponsiveImage source={line} style={{marginBottom:hp("2%")}} initWidth="55" initHeight="3"/>
          <ResponsiveImage source={image} style={{marginBottom:hp("3%")}} initWidth="23" initHeight="23"/>
          </View>
        )
    }
    })
  },

  Q: {
    screen: Queue,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => {
        const line = focused ? require('./Image/main/highlight3x.png') : require('./Image/main/line-transparent-vertical-2.png')
        const image = focused
        ? require('./Image/icon/queueIcon_yellow2x.png')
        : require('./Image/icon/queueIcon2x.png')
        return (
          <View style={{flexDirection:"column",alignItems:"center"}}>
          <ResponsiveImage source={line} style={{marginBottom:hp("2%")}} initWidth="60" initHeight="3"/>
          <ResponsiveImage source={image} style={{marginBottom:hp("3%")}} initWidth="23" initHeight="23"/>
          </View>
        )
    }
    })
  },
  QR: {
    screen: QR,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => {
        const line = focused ? require('./Image/main/highlight3x.png') : require('./Image/main/line-transparent-vertical-2.png')
        const image = focused
        ? require('./Image/new_images/qrCodeIcon_yellow3x.png')
        : require('./Image/new_images/qrCodeIcon3x.png')
        return (
          <View style={{flexDirection:"column",alignItems:"center"}}>
          <ResponsiveImage source={line} style={{marginBottom:hp("2%")}} initWidth="60" initHeight="3"/>
          <ResponsiveImage source={image} style={{marginBottom:hp("3%")}} initWidth="23" initHeight="23"/>
          </View>
        )
    }
    })
  },
  H: {
    screen: history,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => {
        const line = focused ? require('./Image/main/highlight3x.png') : require('./Image/main/line-transparent-vertical-2.png')
        const image = focused
        ? require('./Image/icon/historyIcon_yellow2x.png')
        : require('./Image/icon/historyIcon2x.png')
        return (
          <View style={{flexDirection:"column",alignItems:"center"}}>
          <ResponsiveImage source={line} style={{marginBottom:hp("2%")}} initWidth="60" initHeight="3"/>
          <ResponsiveImage source={image} style={{marginBottom:hp("3%")}} initWidth="23" initHeight="23"/>
          </View>
        )
    }
    })
  },
  P: {
    screen: Profile,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => {
        const line = focused ? require('./Image/main/highlight3x.png') : require('./Image/main/line-transparent-vertical-2.png')
        const image = focused
        ? require('./Image/icon/profileIcon_yellow2x.png')
        : require('./Image/icon/profileIcon2x.png')
        return (
         <View style={{flexDirection:"column",alignItems:"center"}}>
          <ResponsiveImage source={line} style={{marginBottom:hp("2%"),marginRight:wp("4%")}} initWidth="55" initHeight="3"/>
          <ResponsiveImage source={image} style={{marginBottom:hp("3%")}} initWidth="21" initHeight="23"/>
          </View>
        )
    }
    })
  }
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
    // activeTintColor: '#F8F8F8', // active icon color
    // inactiveTintColor: '#586589',  // inactive icon color
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
  SignIn: {
          screen: sing_in,
          navigationOptions: ({ navigation }) => ({
            title: 'SIGN IN',
            headerBackTitle:null,

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
  Forget_password: {
          screen: Forget_password,
          navigationOptions: ({ navigation }) => ({
            title:'FORGOT PASSWORD',
            headerLeft:(
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={require('./Image/icon/back_2x.png')}
              style={[styles.back_butt0n,{marginBottom:hp("1%")}]}
            />
            </TouchableOpacity>)
          })
        },
  For_New_Pass:{
      screen:For_New_Pass,
      navigationOptions: ({ navigation }) => ({
        title:'CREATE NEW PASSWORD',
        headerLeft:(
          <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
        <Image
          source={require('./Image/icon/back_2x.png')}
          style={[styles.back_butt0n,{marginBottom:hp("1%")}]}
        />
        </TouchableOpacity>)
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
              source={require('./Image/icon/back_2x.png')}
              style={styles.back_butt0n}
            />
            </TouchableOpacity>)
          })
        },
        StartScreen:{
          screen:StartScreen,
          headerMode: null,
          navigationOptions: ({ navigation }) => ({
            title: 'REVIEW',
            headerLeft:(
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={require('./Image/icon/back_2x.png')}
              style={styles.back_butt0n}
            />
            </TouchableOpacity>)
          })
        },

      },

      {
        initialRouteName:"SignIn",
        // headerMode: "none",
        navigationOptions: {
          headerTitleStyle: {
            fontWeight: 'bold',marginBottom:hp("2%"),fontSize: RF("2.4"),justifyContent:"center",alignItems:"center"
          },
            },

});


export default class DinggApp extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}  forceInset={{top: 'always'}}>
        <RootStack />
      </SafeAreaView>
    );
  }
}

// export default DinggApp = DinggApp;
