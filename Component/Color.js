import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize"

module.exports = {
    COLOR: {
      ORANGE: '#ffa400',
      GRAY: '#999999',
      ShadowColor: 'rgb(220,220,220)',
      input_color:"rgb(201,201,201)",
      backgroundColor: "white",   
      fontfamily: "Muli-Bold",
      FontFamilyBold:"Muli-ExtraBold",
      rootBAckgroundColor:"rgb(243,242,242)",
      White_color:"white",
      _width : 330,
       _height : 2,
       Logo_width:94,
       Logo_height:65,
       Icon_divider_width:3,
       Icon_divider_height:23,
       Icon_width:23,
       Yellow_10:10,
       Yellow_50 :50,
       Size_250 :250,
       Size_15:15,
       Size_60:60,
       Size_35:35,
       Size_100:100,Size_21:21,Size_27:27,size_290:290,
    },
    Header:{fontWeight: 'bold',marginBottom:hp("2%"),fontSize: RF("2.4"),justifyContent:"center",alignItems:"center"
  },
    Logo : require('../Image/icon/logo_3.png'),
    rectangle_image : require('../Image/icon/Line/rectangle1.png'),
    Copy_right : require('../Image/icon/copyright.png'),
    rectangle_image_black : require('../Image/main/tableDivider2x.png'),
    Unchecked : require('../Image/new_images/uncheckedIcon3x.png'),
    Checked : require('../Image/new_images/selectedIcon3x.png'),
    Cancel_Button : require('../Image/icon/cancel1.png'),

  };