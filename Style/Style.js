import {StyleSheet} from 'react-native';
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const GLOBAL = require('../Component/Color');
// Black: 444444
// Gray: 999999
// Orange: ffa400
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "rgb(242,242,242)",
      paddingVertical:"5%"
    },
    ///Row//
    Row:{
      flexDirection:"row",justifyContent:"space-between"
    },
    column:{
      flexDirection:"column"
    },
    Line_style:{
      width: wp('13.5'),
      height: hp('.3%'),marginBottom:hp("1%"),marginTop:hp("0.5%")
    },
    ///Mobilr//
    Mobile_no:{
      marginTop:"17%",fontSize: RF(2.2),fontFamily:'Muli-Bold',
    },
    input_mobile:{
      width: wp('52'),
      height: hp('6%'),
      fontSize: RF(2.2),
      textAlign:'left',  
      fontFamily:'Muli-ExtraBold',
    },
    Padding_verticele:{
      paddingVertical:hp("2%")
    },
    Padding_verticele_signup:{
      paddingVertical:hp("2%"),marginTop:hp(".5%")
    },
    Flex_main_box:{
      width: wp('90%'),marginLeft:"5%",
      backgroundColor:"white",
      marginVertical:hp('2%'),
      borderRadius:10,
    },
    copy_rigth:{
      fontSize: RF("1.8"),color:"rgb(153,153,153)",
      fontWeight: 'bold',
    },
    copy_rigth_image:{
      width: wp("2.5%"),
      height: hp("1.5%"),marginTop:hp(".5%"),
    }, 
    copy_right_column:{
      alignItems:"center",flexDirection:"column",marginBottom:hp("2%")
  }  ,
  copy_right_column_signup:{
    alignItems:"center",flexDirection:"column",marginTop:hp("25%")
}  ,
    input: {
      width: wp('70%'),
      height: hp('6%'),
      marginBottom: hp('0%'),
      fontSize: RF(2.2),
      marginTop:"0%",
      textAlign:'left',  
      fontFamily:'Muli-ExtraBold',
      // fontWeight: 'bold',
      },
    
    inputSignUp: {
      flex:1,
      width: wp('100'),
      borderColor:"rgb(201,201,201)",
      borderBottomWidth:1,
      paddingHorizontal:"62%",
      borderBottomStartRadius:2,
      alignItems:"flex-start",
      textAlign:'left',
      fontWeight: 'bold',
    },    
    button: {
        width: wp('40%'),
        height: hp('7.2%'),
        backgroundColor: "rgb(255,164,0)",
        justifyContent: "center",
        borderRadius:10,
        shadowColor: 'rgb(255,164,0)',
        shadowOffset: { width: 0, height: hp("0.5%") },
        shadowOpacity: 0.8,
        shadowRadius: 4,
    },   
    buttonText: {
      fontSize: RF(2.2),
        alignSelf: "center",
        textAlign: "center",
        color: "white",
        fontWeight: "700",
        fontFamily:'Muli-Bold',
        // fontWeight: 'bold',
    },
    list_box:{
      width: wp('90%'),marginLeft:"5%",
      height: hp('20%"'),
      backgroundColor:"white",
      marginVertical:hp('2%'),
      borderRadius:10,
      shadowColor: 'rgb(243,242,242)',
      shadowOffset: { width: 0, height: hp("0.5%") },
      shadowOpacity: 0.8,
      shadowRadius: 4,
    },
    Search_b0x:{
        width: wp('90%'),marginLeft:"5%",
        height: hp('18%"'),
        backgroundColor:"white",
        marginVertical:hp('1%'),
        borderRadius:10,
       
    },
    Custom:{
          width: wp('86%'),
          height: hp('43%'),
          marginTop:5,
          marginBottom:30,
          marginLeft:10
    },
    box:{
      alignItems:"center",
      width: wp('90%'),
      backgroundColor:"white",
      paddingVertical:hp('3%'),
      borderRadius:10,
      marginVertical:hp("2%"),
      marginHorizontal:wp("5%")
  },
    BookServiceBox:{
      alignItems:"center",
          width: wp('85%'),
          height: hp('15%'),
          backgroundColor:"white",
          borderBottomRightRadius: 10,
          borderTopRightRadius: 10,
          height: hp('10%'),
          paddingVertical:hp('1%'),
          justifyContent:"space-between",
          flexDirection:"row"
    },
    BookServiceText:{
      fontFamily:"Muli-ExtraBold",fontSize:RF(2),marginBottom:hp("2%"),marginTop:wp("9%"),color:"rgb(140,140,140)",marginRight:wp("60%")
    },
    BookServiceBoxYello:{
      alignItems:"center",
      height: hp('15%'),
      width:"3%",
      backgroundColor: "rgb(255,164,0)",
      borderBottomLeftRadius: 10,
      borderTopLeftRadius: 10,
      height: hp('10%'),paddingVertical:hp('1%')
    },
    box_SignUp:{
          alignItems:"center",
          width: wp('90%'),
          backgroundColor:"white",
          paddingVertical:hp('2%'),
          borderRadius:10,
          paddingBottom:hp("10%")
    },
    text:{
          fontSize: RF(2.2), 
          color: "rgb(68,68,68)",
          fontFamily:'Muli-Bold',
          // fontWeight: 'bold',
        },
    verify_big_text:{
      fontSize:RF(3.5),
      fontFamily:'Muli-ExtraBold',
      marginVertical:hp("5%"),
      marginRight:wp("35%"),
      color: "rgb(68,68,68)",
    },
    Otp:{
      marginHorizontal:wp("15%"),marginTop:hp("2%")
    },
    otp_timer:{
      marginRight:wp("15%"),marginTop:hp("2%")
    },
  Big_text:{
          fontSize: RF(2.2), 
          color: "rgb(68,68,68)",
          fontFamily:'Muli-Bold',
          marginRight:wp("42.5%")
        },
  orange_text:{
          color:"rgb(255,163,0)",fontSize: RF(2),marginVertical:hp("1%"),fontWeight:"bold"
        },
    text:{
          fontSize: RF(2.2), 
          color:GLOBAL.COLOR.GREY,
          fontFamily:'Muli-Bold',
          // fontWeight: 'bold',
        },
   grey_text_PROFILE_EDIT:{
    fontFamily:"Muli-Bold",
    fontSize:RF(2),
    color:"#999999",
    marginBottom:hp(".5%")
   },
   yello_text:{
    fontFamily:"Muli-Bold",
    fontSize:RF(2.3),
    color:"rgb(255,164,0)",
    marginLeft:wp("2%"),
    marginBottom:hp(".5%")
   },
    countryPicker: {
        alignItems: 'center',
        justifyContent: 'center',
        },
    
    containerOtp: {
          flex: 1,
          backgroundColor: "rgb(243,242,242)",
        },
   
    form: {
          margin: 20
        },
   
    textInput: {
        height:hp('20%'),
        fontSize: RF(3),
        borderColor:"rgb(222,222,222)",
        borderBottomWidth:1,
        fontWeight: 'bold',
    },
   
    wrongNumberText: {
      margin: 10,
      fontSize: 14,
      textAlign: 'center'
    },
    
    disclaimerText: {
      marginTop: 30,
      fontSize: 12,
      color: 'grey'
    },
    
    callingCodeView: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    
    callingCodeText: {
      fontSize: RF(3),
      color: "black",
      fontFamily: 'Helvetica',
      fontWeight: 'bold',
      paddingRight: 10
    },
    // boxDetails:{
    //   alignItems:"center",
    //   width: wp('90%'),
    //   backgroundColor:"white",
    //   borderRadius:10,
    //   justifyContent: 'space-between',
    //   marginHorizontal:"5%",
    //   paddingVertical:hp('3%')
    // },
    radio_button:{
      marginTop:hp("3%"),marginRight:wp("28%")
    },
    Checked_button:{
      width:wp(3.8),height:hp(2.2),marginTop:hp("1%"),marginRight:wp("3%")
    },
    Setting_lineSetting:{
      width: "90%",
      borderColor:"rgb(201,201,201)",
      borderBottomWidth:1,
      marginLeft:"5%"
    },
    setting_Row:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:hp("0%")
        },
    
    setting_text:{
      fontSize: RF(2.5),
      justifyContent:"flex-start"
      ,marginLeft:"5%",
      paddingVertical:"2.5%",
      fontFamily:'Muli-Bold',
      color:"rgb(118,118,118)"
      // fontWeight: 'bold',
    },
    Details_image:{
      width: hp("2.3%"),
      height: hp(".1%"),
      marginTop:hp("2"),
      marginRight:wp("8%")
    },
    
    setting_Image:{
      width: hp("2%"),
      height: hp("2%"),
      marginTop:hp("2.5"),
      marginRight:wp("6%")
    },
  
    profile_Small_text:{
      fontSize: RF(1.8),
      justifyContent:"flex-start",
      marginTop:hp("1%"),
      color:"rgb(176,176,176)",
      fontFamily:"Muli-Bold",
      marginLeft:wp("8%")
    },
    profile_Small_text:{
      fontSize: RF(1.8),
      justifyContent:"flex-start",
      marginLeft:wp("8%"),
      marginTop:hp("2%"),
      color:"rgb(176,176,176)",
      fontFamily:"Muli-Bold",
    },
 
    back_butt0n:{
        marginLeft:wp("4%"),
        width: wp('6%'),
        height: hp('2.8%'),
        marginBottom:hp("1.4%")
    },
    textBoxBtnHolder:{
          position: "relative",
          alignSelf: "center",
          justifyContent: 'center'
        },

  Profile_Container:{
      width:"90%",paddingVertical:hp(".5%"),marginVertical:hp("2%"),
      backgroundColor:"white",
      borderRadius:10,
      justifyContent: 'space-between',marginHorizontal:"5%"
    },
    History_Action:{
      justifyContent:"flex-start",marginLeft:wp("5%"),marginBottom:hp("1%"),width:wp("65%"),
      fontSize: RF(2.5),
      justifyContent:"flex-start"
      ,marginLeft:"5%",
      paddingVertical:"2.5%",
      fontFamily:"Muli-Bold",
    },
    avatarMultiple: {
      borderRadius: wp("2"),
      width: wp('20%'),
      height: hp('11%'),
      marginHorizontal:"2%",
    },
    avatarContainer: {
      borderColor: '#9B9B9B',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:"white",
       },
    
  });
  export default styles
  