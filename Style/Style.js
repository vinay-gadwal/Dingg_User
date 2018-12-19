import {StyleSheet} from 'react-native';
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const GLOBAL = require('../Component/Color');
// Black: 444444
// Gray: 999999
// Orange: ffa400//
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: GLOBAL.COLOR.rootBAckgroundColor,
      paddingVertical:"5%"
    },
    ///Row//
    Row:{
      flexDirection:"row",justifyContent:"space-between"
    },
    column:{
      flexDirection:"column",
    },
    Column_reverse:{flexDirection:"column-reverse"},
    Image_margin:{
      marginHorizontal:wp("3%"),marginVertical:hp("3%")
    },
    Line_style:{
      width: wp('13.5'),
      height: hp('.3%'),marginBottom:hp("1%"),marginTop:hp("0.5%")
    },
    ///Mobilr//
    Mobile_no:{
      marginTop:"17%",fontSize: RF(2.2),fontFamily:GLOBAL.COLOR.Font,
    },
    input_mobile:{
      width: wp('52'),
      height: hp('6%'),
      fontSize: RF(2.2),
      textAlign:'left',  
      fontFamily:GLOBAL.COLOR.Font_bold,
    },
    Padding_verticele:{
      paddingVertical:hp("2%")
    },
    Padding_verticele_signup:{
      paddingVertical:hp("2%"),marginTop:hp(".5%")
    },
    Flex_main_box:{
      width: wp('90%'),marginLeft:"5%",
      backgroundColor:GLOBAL.COLOR.White_color,
      marginVertical:hp('2%'),
      borderRadius:10,
    },
    copy_rigth:{
      fontSize: RF("1.8"),color:GLOBAL.COLOR.GRAY,
      fontFamily: GLOBAL.COLOR.Font_bold,marginVertical:hp(".5%")
    },
    Copy_right_text:{
paddingVertical:hp("0%"), fontSize: RF("1.8"),color:GLOBAL.COLOR.GRAY,
fontFamily: GLOBAL.COLOR.Font_bold
    },
    copy_rigth_image:{
      width: wp("3%"),
      height: hp("1.5%"),marginTop:hp("1%"),
    }, 
    copy_right_column:{
      alignItems:"center",flexDirection:"column",marginBottom:hp("1%")
  }  ,
  copy_right_column_signup:{
    alignItems:"center",flexDirection:"column",marginTop:hp("20%"),marginBottom:hp("5%")
}  ,
copy_right_column_Forgot:{
  alignItems:"center",flexDirection:"column",marginTop:hp("3%"),marginBottom:hp("2")
}  ,
margin_3:{
marginTop:hp("3%")
},
    input: {
      width: wp('70%'),
      height: hp('6%'),
      marginBottom: hp('0%'),
      fontSize: RF(2.2),
      marginTop:"0%",
      textAlign:'left',  
      fontFamily:GLOBAL.COLOR.Font_bold,
      // fontWeight: 'bold',
      },
      input_profile_edit: {
        width: wp('70%'),
        fontSize: RF(2.2),
        marginTop:"0%",
        textAlign:'left',  
        fontFamily:GLOBAL.COLOR.Font_bold,
        marginBottom:"3%",
        height: hp('3%')       
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
      fontFamily:GLOBAL.COLOR.Font_bold,
    },    
    button: {
        width: wp('40%'),
        height: hp('7.2%'),
        backgroundColor: GLOBAL.COLOR.ORANGE,
        justifyContent: "center",
        borderRadius:10,
        shadowColor: GLOBAL.COLOR.ORANGE,
        shadowOffset: { width: 0, height: hp("1%") },
        shadowOpacity: 2,
        shadowRadius: 4,
    }, 
    Action_Touch_button:{
      height:hp("5.5%"),width:wp("20%"),marginVertical:hp("1%"),backgroundColor:"white",shadowColor: 'rgb(217,217,217)'
    },
    Action_button:{
      height:hp("5%"),width:wp("9.5%"),borderRadius:6,
      backgroundColor: GLOBAL.COLOR.ORANGE,
      justifyContent: "center",
      shadowColor: GLOBAL.COLOR.ORANGE,
      shadowOffset: { width: 0, height: hp("1%") },
      shadowOpacity: 2,
      shadowRadius: 4,
    },
    Action_queue:{
      flexDirection:"column",marginVertical:hp("2%"),marginRight:wp("10%")
    },
    Queue_imae:{
      width:wp("10%"), height:hp("6%"),borderRadius:10,marginRight:wp("4%"),marginVertical:hp("3%")
    },
    Queue_column:{
      flexDirection:"column",width:wp("40%"),marginVertical:hp("1%")
    },
    Queue_row:{
      flexDirection:"row",marginBottom:hp(".5%")
    },
    Titile_small_text:{
        fontSize: RF(1.8), 
        color: GLOBAL.COLOR.BLACK,
        fontFamily:GLOBAL.COLOR.Font,
        // marginTop:hp("1%")   
 },
 star_row:{
          marginLeft:wp("3%"),flexDirection:"row"
        },
 review_text:{
        marginLeft:wp("25%"),fontSize:RF(1.8),  fontSize: RF(1.8), 
        color: GLOBAL.COLOR.GRAY,
        fontFamily:GLOBAL.COLOR.Font,
      },
      margin_5:{
        marginTop:hp(".5%"),
      },
      rectangle_image:{
        marginTop:hp("1%"),marginHorizontal:wp("4%")
      },
      catogory:{
        marginVertical:hp("6%"),marginBottom:hp("3%"), fontSize:RF(3),marginHorizontal:wp("10%"),color:GLOBAL.COLOR.BLACK
      },
    ///home///  
    Button_offer_home:{
      height:hp("5.4%"),width:wp("9.5%"),borderRadius:4,marginLeft:wp("43.5%"),
      backgroundColor: GLOBAL.COLOR.ORANGE,
      borderRadius:10,
      shadowColor: GLOBAL.COLOR.ORANGE,
      shadowOffset: { width: 0, height: hp(".5%") },
      shadowOpacity: .5,
      shadowRadius: 2,
    },
    offer_button_text:{
      fontSize: RF(1.8),
      alignSelf: "center",
      textAlign: "center",
      color:GLOBAL.COLOR.White_color,
      fontFamily:GLOBAL.COLOR.Font_bold,
    },
    Button_offer_home_bottom: {
      height:hp("5%"),marginTop:hp("0%"),width:wp("9.5%"),borderRadius:6,
      marginRight:wp("17%"),
      backgroundColor: GLOBAL.COLOR.ORANGE,
      justifyContent: "center",
      shadowOffset: { width: 0, height: hp("1%") },
      shadowOpacity: 2,
      shadowRadius: 4,
    },
    Salon_name:{
      flexDirection:"row",marginLeft:wp("5%"),width:wp("45%"),justifyContent:"space-between",marginTop:hp(".3%")
    },
    HOme_flex_top:{
      height:hp("20%"),width:wp("53"),marginHorizontal:wp("5%")
    },
    HOme_flex_bottom:{
      height:hp("13%"),width:wp("22"),marginHorizontal:wp("3%"),marginVertical:hp("2%")
    },
    Home_cancel_icon:{
      width: hp("2%"),
      height: hp("2%"),
      marginTop:hp("1"),
      marginRight:wp("6%"),marginLeft:wp("25%")
    },
    //////
    buttonText: {
      fontSize: RF(2.2),
        alignSelf: "center",
        textAlign: "center",
        color:GLOBAL.COLOR.White_color,
        fontWeight: "700",
        fontFamily:GLOBAL.COLOR.Font_bold,
        // fontWeight: 'bold',
    },
    list_box:{
      width: wp('90%'),marginLeft:"5%",
      height: hp('20%"'),
      backgroundColor:GLOBAL.COLOR.White_color,
      marginVertical:hp('2%'),
      borderRadius:10,
      shadowColor: 'rgb(243,242,242)',
      shadowOffset: { width: 0, height: hp("1%") },
      shadowOpacity: 2,
      shadowRadius: 4,
    },
    Search_b0x:{
        width: wp('90%'),marginLeft:"5%",
        height: hp('18%"'),
        backgroundColor:GLOBAL.COLOR.White_color,
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
      backgroundColor:GLOBAL.COLOR.White_color,
      paddingVertical:hp('1%'),
      borderRadius:10,
      marginVertical:hp("2%"),
      marginHorizontal:wp("5%"),
      shadowColor: 'rgb(232,232,232)',
      shadowOffset: { width: 0, height: hp("1%") },
      shadowOpacity: 2,
      shadowRadius: 4,
  },
  BookServiceBox:{
      alignItems:"center",
          width: wp('85%'),
          height: hp('7%'),
          backgroundColor:GLOBAL.COLOR.White_color,
          borderBottomRightRadius: 10,
          borderTopRightRadius: 10,
          height: hp('10%'),
          paddingVertical:hp('1%'),
          justifyContent:"space-between",
          flexDirection:"row"
    },
    BookServiceText:{
      fontFamily:GLOBAL.COLOR.Font_bold,fontSize:RF(2),marginBottom:hp("2%"),marginTop:wp("9%"),color:"rgb(140,140,140)",marginLeft:wp("10%")
    },
    Plus_image:{
      width: wp('3%'),
        height: hp('2%'),
    },
    edit_camera_:{
      height:"1%",justifyContent:"center",alignItems:"center",marginLeft:wp("18%")
    },
    BookServiceBoxYello:{
      alignItems:"center",
      height: hp('7%'),
      width:"2%",
      backgroundColor: GLOBAL.COLOR.ORANGE,
      borderBottomLeftRadius: 10,
      borderTopLeftRadius: 10,marginLeft:wp("3%"),
      height: hp('10%'),paddingVertical:hp('1%')
    },
    box_SignUp:{
          alignItems:"center",
          width: wp('90%'),
          backgroundColor:GLOBAL.COLOR.White_color,
          paddingVertical:hp('2%'),
          borderRadius:10,
          paddingBottom:hp("8%")
    },
    text:{
          fontSize: RF(2.2), 
          color: GLOBAL.COLOR.BLACK,
          fontFamily:GLOBAL.COLOR.Font,
          // fontWeight: 'bold',
        },
    Tab_text:{
      width:wp("30%"),marginLeft:wp("10%"),marginTop:hp(".5%"),
      fontSize: RF(2.2), 
      color: GLOBAL.COLOR.BLACK,
      fontFamily:GLOBAL.COLOR.Font,
    },
    Tab_line:{
      marginTop:hp("2%"),marginLeft:wp("6%")
    },
    verify_big_text:{
      fontSize:RF(3.2),
      fontFamily:GLOBAL.COLOR.Font_bold,
      marginVertical:hp("5%"),
      marginRight:wp("15%"),
      color: GLOBAL.COLOR.BLACK,
    },
    Otp:{
      marginHorizontal:wp("15%"),marginTop:hp("2%")
    },
    otp_timer:{
      marginRight:wp("15%"),marginTop:hp("2%")
    },
    Timer_countdown:{
      fontSize:RF(2),marginTop:hp("2%"),color:GLOBAL.COLOR.GRAY
    },
  Big_text:{
          fontSize: RF(2.2), 
          color: GLOBAL.COLOR.BLACK,
          fontFamily:GLOBAL.COLOR.Font,
          marginRight:wp("42.5%")
        },
  orange_text:{
          color:GLOBAL.COLOR.ORANGE,fontSize: RF(2),marginVertical:hp("2%"),fontWeight:"bold"
        },
    Home_icon:{
      marginTop:hp("1%"),marginRight:wp("2%")
    },
    text:{
          fontSize: RF(2.2), 
          color:GLOBAL.COLOR.BLACK,
          fontFamily:GLOBAL.COLOR.Font,
          // fontWeight: 'bold',
        },
  grey_text:{
    fontSize: RF(1.8), 
    color:GLOBAL.COLOR.GRAY,
    fontFamily:GLOBAL.COLOR.Font,
  },
  Queue_text:{
    width:wp("20%"),fontSize: RF(1.8), 
    color:GLOBAL.COLOR.BLACK,
    fontFamily:GLOBAL.COLOR.Font,marginBottom:hp("2%")
  },
    Flat_box_text:{
      fontSize:RF(2.3),marginBottom:hp("1%"),marginLeft:wp("2.5%"),
      color:GLOBAL.COLOR.BLACK,
      fontFamily:GLOBAL.COLOR.Font,
    },
   grey_text_PROFILE_EDIT:{
    fontFamily:GLOBAL.COLOR.Font,
    fontSize:RF(2),
    color:GLOBAL.COLOR.GRAY,
    marginBottom:hp(".5%"),
    marginTop:hp("2")
   },
   yello_text:{
    fontFamily:GLOBAL.COLOR.Font,
    fontSize:RF(1.8),
    color:GLOBAL.COLOR.ORANGE,
    // marginLeft:wp("2%"),
    marginBottom:hp(".5%")
   },
   Yellow_big:{
      fontFamily:GLOBAL.COLOR.Font,
      fontSize:RF(3),
      color:GLOBAL.COLOR.ORANGE,
      marginBottom:hp(".5%")
   },
   Flat_box_column:{
    flexDirection:"column",marginBottom:hp("2%"),marginLeft:wp("5%"),width:wp("30%")
   },
   Flex_box_right:{
    flexDirection:"column",marginVertical:hp("2%"),alignItems:"flex-start",width:wp("50%"),marginLeft:wp("10%")
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
        marginBottom:hp("1%")
        },
    setting_text:{
      fontSize: RF(2.5),
      justifyContent:"flex-start"
      ,marginLeft:"5%",
      paddingVertical:"2.5%",
      fontFamily:GLOBAL.COLOR.Font,
      color:GLOBAL.COLOR.GRAY
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
      color:GLOBAL.COLOR.GRAY,
      fontFamily:GLOBAL.COLOR.Font,
      marginLeft:wp("8%")
    },
    profile_Small_text:{
      fontSize: RF(1.8),
      justifyContent:"flex-start",
      marginLeft:wp("8%"),
      marginTop:hp("2%"),
      color:GLOBAL.COLOR.GRAY,
      fontFamily:GLOBAL.COLOR.Font,
    },
    Category_image:{
      marginLeft:wp("5%"),marginRight:wp("0%"),height:hp("2.9%"),
      width: hp("2.3%"),
      marginTop:hp("2"),
    },
    Category_text:{
      fontSize: RF(2.5),
      justifyContent:"flex-start"
      ,marginLeft:"5%",
      paddingVertical:"2.5%",
      fontFamily:GLOBAL.COLOR.Font,
      color:GLOBAL.COLOR.GRAY,marginRight:wp("40%"),marginTop:hp(".7%")
    },
    Category_line:{
      marginHorizontal:wp("5%")
    },
    Select_unselect_icon:{
      width:wp(5.5),height:hp(3),marginLeft:wp("2%"),marginRight:wp("5%"),marginTop:hp("1%")
    },
 Header:{ fontWeight: 'bold',marginBottom:hp("2%"),fontSize: RF("2.4"),justifyContent:"center",alignItems:"center"},
    back_butt0n:{
        marginLeft:wp("4%"),
        width: wp('6%'),
        height: hp('2.8%'),
        marginBottom:hp("1.4%")
    },
    Home_header:{
      backgroundColor:GLOBAL.COLOR.White_color,width:wp("100%")
    },
    back_right:{
      marginRight:wp("3%"),height:hp("3.2%"),width:wp("5%"),marginBottom:hp("1.5%"),
      marginLeft:wp("4%"),
    },
    textBoxBtnHolder:{
          position: "relative",
          alignSelf: "center",
          justifyContent: 'center'
        },
Search_line:{
  marginLeft:"10%",marginVertical:hp("1%")
},
  Profile_Container:{
      width:"90%",paddingVertical:hp(".5%"),marginVertical:hp("2%"),
      backgroundColor:GLOBAL.COLOR.White_color,
      borderRadius:10,
      justifyContent: 'space-between',marginHorizontal:"5%"
    },
    Edit_button:{
      height:"1%",justifyContent:"center",alignItems:"center"
    },
    Profile_line:{
      marginHorizontal:wp("5%"),marginVertical:hp("2%")
    },
    Add_details_line:{
      marginHorizontal:"4%",marginLeft:wp("32%"),marginTop:hp("1%")
    },
    box_profile:{
      alignItems:"center",
      width: wp('90%'),
      backgroundColor:"white",
      borderRadius:10,
      alignItems:"flex-start",
      marginHorizontal:"5%",
      paddingVertical:hp('3%'),paddingLeft:wp("10%")
    },
    History_Action:{
      justifyContent:"flex-start",marginLeft:wp("5%"),marginBottom:hp("1%"),width:wp("65%"),
      fontSize: RF(2.5),
      justifyContent:"flex-start"
      ,marginLeft:"5%",
      paddingVertical:"2.5%",
      fontFamily:GLOBAL.COLOR.Font,
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
      backgroundColor:GLOBAL.COLOR.White_color,
       },
  });
  export default styles
  