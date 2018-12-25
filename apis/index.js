// import { Base64 } from 'js-base64';
import { AsyncStorage,Alert } from 'react-native';
// import RNFetchBlob from 'rn-fetch-blob'

const base_url = 'http://18.217.123.119:3000/api/';

const apis = {
  LOGIN_API: async (user, pass) => {
    try {
      const response = await fetch(
        base_url + 'user_login',
        {
          method: 'POST',
          headers: {
            "content-type": "application/json",
            "cache-control": "no-cache",
            "postman-token": "06d1929c-addc-cf20-1705-edd409674d62"
          },
          body: JSON.stringify({
            mobile   : user,
            password : pass
          }),
        },
      );
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      Alert.alert(error)
    }
  },

  SIGN_UP: async (usermobile) => {
    try {
      const response = await fetch(
        base_url + 'user_signup',
        {
          method: 'POST',
          headers: {
            "content-type": "application/json",
            "cache-control": "no-cache",
            "postman-token": "d33aa7ef-ef52-fab3-79a3-5fad9bae840f"
          },
          body: JSON.stringify({
            mobile:usermobile
          }),
        },
      );
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  },

  OTP_SignUP: async (Mobile,code) => {
    try {
      const response = await fetch(
        base_url + 'user_verify_account',
        {
          method: 'POST',
          headers: {
            "content-type": "application/json",
            "cache-control": "no-cache",
            "postman-token": "8fc8f45f-e1d3-0dd0-7bbd-32a0820d0e98"
          },
          body: JSON.stringify({
            mobile       :Mobile,
            otp          : code,
            device_type  :"ios",
            device_token :"fiodfpisdfposidfpoisdfposdifsodfiskdfpsdfiosdfpdskfposdi"
          }),
        },
      );
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  },

  ADD_Details: async (token,Password,Fname,Lname,Display_name,Email,Locality,Gender) => {
   var object = {};
   if (Email == "" || Email == null) {
      object =  {
        password :Password ,
        fname : Fname,
        lname : Lname,
        display_name : Display_name,
        locality : Locality,
        gender : Gender
      }
   }else{
    object =   {
      password :Password ,
      fname : Fname,
      lname : Lname,
      display_name : Display_name,
      email : Email,
      locality : Locality,
      gender : Gender
     }
   }
    try {
      const response = await fetch(
        base_url + 'user_save_password',
        {
          method: 'POST',
          headers: {
            "content-type": "application/json",
            "authorization": token,
            "cache-control": "no-cache",
            "postman-token": "5332a84c-bcde-8948-01ed-da2279c90a26"
          },
          body: JSON.stringify(object),
        },
      );
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  },

  FORGET_PASS: async (usermobile) => {
    try {
      const response = await fetch(
        base_url + 'user_forgot_password',
        {
          method: 'POST',
          headers: {
            "content-type": "application/json",
            "cache-control": "no-cache",
            "postman-token": "d33aa7ef-ef52-fab3-79a3-5fad9bae840f"
          },
          body: JSON.stringify({
            mobile:usermobile
          }),
        },
      );
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  },

  OTP_FORGOT: async (Mobile,code) => {
    try {
      const response = await fetch(
        base_url + 'user_verify_mobile',
        {
          method: 'POST',
          headers: {
            "content-type": "application/json",
            "cache-control": "no-cache",
            "postman-token": "1d546500-20bd-02d9-403c-68dab1907fbb"
          },
          body: JSON.stringify({
            mobile            :Mobile,
            verification_code :code,
          }),
        },
      );
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  },

  Reset_Pass: async (Mobile,Password) => {
    try {
      const response = await fetch(
        base_url + 'user_reset_password',
        {
          method: 'POST',
          headers: {
            "content-type": "application/json",
            "cache-control": "no-cache",
            "postman-token": "1d546500-20bd-02d9-403c-68dab1907fbb"
          },
          body: JSON.stringify({
            mobile : Mobile,
          password : Password
          }),
        },
      );
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  },

  Resend_OTP: async (Mobile) => {
    try {
      const response = await fetch(
        base_url + 'user_resend_otp',
        {
          method: 'POST',
          headers: {
            "content-type": "application/json",
            "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZW5kb3JfaWQiOjMsImlhdCI6MTU0MzI5NjcwOH0.D_8831a6S3xoFaz_kS_VyeImRmsJx3DJ7Y_GdcnnQwE",
            "cache-control": "no-cache",
            "postman-token": "ab4df6af-894a-2d01-498e-ceeac5aa0bc3"
          },
          body: JSON.stringify({
            mobile:Mobile
          }),
        },
      );
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  },
  LOCAL_SET_DATA: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error(error);
    }
  },

  LOCAL_GET_DATA: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        console.log(value);
        return value;
      }
      return null;
    } catch (error) {
      // Error retrieving data
      console.error(error);
      return null;
    }
  },
  Sign_LOCAL_SET_DATA: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error(error);
    }
  },
  OTP_LOCAL_GET_DATA: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        console.log(value);
        return value;
      }
      return null;
    } catch (error) {
      // Error retrieving data
      console.error(error);
      return null;
    }
  },
  LOCAL_Delete_DATA: async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  },

}
export default apis;
