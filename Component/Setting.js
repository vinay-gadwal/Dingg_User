import React, { Component } from 'react';
import {
  Text,
  View,Image,
  ScrollView,TouchableOpacity
} from 'react-native';
import styles from '../Style/Style'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize"
import ResponsiveImage from 'react-native-responsive-image'
import Switch from 'react-native-customisable-switch';
const GLOBAL = require('../Component/Color');

export default class App extends Component {
    state = {
      
      };
     

   
  render() {
   
    return (
      <ScrollView style={GLOBAL.COLOR.rootBAckgroundColor} horizontal={false}>
          <Text style={[styles.Yellow_big,styles.catogory]}>Select a category to continue</Text>
          <View style={[styles.Profile_Container]}>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('AuthStack')}}>
             <View style={{justifyContent:"space-between"}}>
                   <View style={styles.setting_Row}>
                   <Image
                                source={GLOBAL.salon_icon}
                                style={styles.Category_image}
                    />
                    <Text style={[styles.Category_text,]}>Salon</Text>
                    <Image
                                 source={GLOBAL.Arro}
                                 style={[styles.setting_Image]}
                    />
                    </View>
                    <ResponsiveImage  style={styles.Category_line} source={GLOBAL.rectangle_image_black} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
             </View>  
            </TouchableOpacity>
            <View style={styles.setting_Row}>
                   <Image
                                source={GLOBAL.Doctor}
                                style={styles.Category_image}
                    />
                    <Text style={styles.Category_text}>Doctor</Text>
                    <Image
                                source={GLOBAL.Arro}
                                style={[styles.setting_Image]}
                    />
                    </View>
              <ResponsiveImage  style={styles.Category_line} source={GLOBAL.rectangle_image_black} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
              <View style={styles.setting_Row}>
                   <Image
                                source={GLOBAL.Restaurent}
                                style={styles.Category_image}
                    />
                    <Text style={styles.Category_text}>Restaurant</Text>
                    <Image
                                source={GLOBAL.Arro}
                                style={[styles.setting_Image]}
                    />
                    </View>   
        </View>
      </ScrollView>
    );
  }
}

