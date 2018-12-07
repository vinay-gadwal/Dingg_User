import {StyleSheet} from 'react-native';
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "rgb(242,242,242)",
      paddingVertical:"5%"
    },
    
    copy_rigth:{
      fontSize: RF("1.8"),color:"rgb(153,153,153)",
      fontWeight: 'bold',
    },
    copy_rigth_image:{
      width: wp("2.2%"),
      height: hp("1.1%"),marginTop:hp(".5%"),
    },    
    input: {
      width: wp('70%'),
      height: hp('6%'),
      marginBottom: hp('0%'),
      fontSize: RF(2.2),
      marginTop:"0%",
      textAlign:'left',  
      fontFamily:'Muli-Bold',
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
        paddingVertical: hp('1%'),
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
        // fontFamily:'Muli-Bold',
        fontWeight: 'bold',
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
          paddingVertical:hp('5%'),
          borderRadius:10,
    },
    text:{
          fontSize: RF(2.2), 
          color: "rgb(68,68,68)",
          fontFamily:'Muli-Bold',
          // fontWeight: 'bold',
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
    boxDetails:{
      alignItems:"center",
      width: wp('90%'),
      backgroundColor:"white",
      borderRadius:10,
      justifyContent: 'space-between',
      marginHorizontal:"5%",
      paddingVertical:hp('3%')
    },
    
    Setting_lineSetting:{
      width: "90%",
      borderColor:"rgb(201,201,201)",
      borderBottomWidth:1,
      marginLeft:"5%"
    },
    
    setting_compo:{
      width: wp('90%'),
      backgroundColor:"white",
      borderRadius:10,
      justifyContent: 'space-between',
      marginHorizontal:"5%"
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
    
    Logo_style:{
      width: wp('23%'),
        height: hp('9%'),
     marginVertical:wp("4%")
    },
    
    back_butt0n:{
        marginLeft:wp("4%"),
        width: wp('6%'),
        height: hp('2.8%'),
        marginBottom:hp("1.4%")
    },
    tab_button:{
      marginLeft:wp("5%"),
      width: wp('4.6%'),
      height: hp('2.8%'),
  },
    
    textBoxBtnHolder:{
          position: "relative",
          alignSelf: "center",
          justifyContent: 'center'
        },

  visibilityBtn:{
        position: 'absolute',
        right: "3%",
        height:"70%",
        width: "8%",
        marginTop:"10%",marginBottom:"0%"
      },

  btnImage:{
          resizeMode: 'contain',
          height: hp('2%'),
          width: wp('2%'),marginTop:hp("6%"),paddingLeft:wp("14%")
        },

  Profile_Container:{
      width:"90%",paddingVertical:hp(".5%"),marginVertical:hp("2%"),
      backgroundColor:"white",
      borderRadius:10,
      justifyContent: 'space-between',marginHorizontal:"5%"
    },
    Header:{
     height:hp("15%"),width:wp("100%"),
      backgroundColor:"white"
    },
   
    History_Action:{
      justifyContent:"flex-start",marginLeft:wp("5%"),marginBottom:hp("1%"),width:wp("65%"),
      fontSize: RF(2.5),
      justifyContent:"flex-start"
      ,marginLeft:"5%",
      paddingVertical:"2.5%",
      // fontFamily:"Muli-Bold",
    },
    avatarMultiple: {
      borderRadius: wp("2"),
      width: wp('20%'),
      height: hp('11%'),
      marginHorizontal:"2%",
    },
    
  });
  
  export default styles
  