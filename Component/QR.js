
import React, { Component } from 'react';

import {
  StyleSheet,
  NavigatorIOS,
  Dimensions,View
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
const GLOBAL = require('../Component/Color');
export default class ScanScreen extends Component {
  onSuccess(e) {
    Linking.openURL(e.data).catch(err => console.error('An error occured', err))
  }

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: QRCodeScanner,
          title: 'SCAN QR CODE',
          passProps: {
            onRead: this.onSuccess.bind(this),
            cameraStyle: styles.cameraContainer,
            topViewStyle: styles.zeroContainer,
            bottomViewStyle:{},
            showMarker:true,
            markerStyle:styles.MArker_style,
            containerStyle:{}
          }
        }}
        style={{flex: 1}}
      />
    )
  }
}

const styles = StyleSheet.create({
  zeroContainer: {
    height: 0,
    flex: 0,
  },

  cameraContainer: {
    height: Dimensions.get('window').height,
  },
  MArker_style:{borderColor:GLOBAL.COLOR.ORANGE, borderRadius:15, borderWidth: 5,}
});
