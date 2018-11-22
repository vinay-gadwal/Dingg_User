import React, { Component } from 'react';
import {
  Text,
  View,Image,Animated,ImageBackground,
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
console.disableYellowBox = true;
import { Card } from "react-native-elements";
import PropTypes from 'prop-types'

const data = [
  {
    imageUrl: "https://image.shutterstock.com/image-photo/beautiful-hairstyle-young-woman-after-450w-711308113.jpg",
    title: "something"
  },
  {
    imageUrl: "https://image.shutterstock.com/image-photo/portrait-happy-woman-hair-salon-450w-136244417.jpg",
    title: "something two"
  },
  {
    imageUrl: "https://image.shutterstock.com/image-photo/hairdresser-trimming-brown-hair-scissors-450w-178947776.jpg",
    title: "something three"
  },
  {
    imageUrl: "https://image.shutterstock.com/image-photo/washing-hair-450w-544510243.jpg",
    title: "something four"
  },
  {
    imageUrl: "https://image.shutterstock.com/image-illustration/barber-shop-modern-loft-design-450w-509792062.jpg",
    title: "something five"
  },
  {
    imageUrl: "https://image.shutterstock.com/image-photo/hairdresser-set-various-accessories-on-450w-387414154.jpg",
    title: "something six"
  }
];
export default class StarReview extends Component {
  constructor(props){
    super(props)
    this.state = {
        avatarSource: null,avatarSource1:null,
        videoSource: null,isOnDefaultToggleSwitch: false,
        isOnLargeToggleSwitch_user: true,
        isOnBlueToggleSwitch: false,location: null,
        data: data,
        dataSource1 : [ 
          {
              name:"Bianca Beauty Salon & Spa",
              imageUrl: "https://image.shutterstock.com/image-photo/washing-hair-450w-544510243.jpg",
          },
          {
              name:"Devine Hair & Beauty Salon",
              imageUrl: "https://image.shutterstock.com/image-photo/hairdresser-set-various-accessories-on-450w-387414154.jpg",
          },
          {
            name:"Bianca Beauty Salon & Spa",
            imageUrl: "https://image.shutterstock.com/image-photo/washing-hair-450w-544510243.jpg",
        },
        {
            name:"Devine Hair & Beauty Salon",
            imageUrl: "https://image.shutterstock.com/image-photo/hairdresser-set-various-accessories-on-450w-387414154.jpg",
        },
        {
          name:"Bianca Beauty Salon & Spa",
          imageUrl: "https://image.shutterstock.com/image-photo/washing-hair-450w-544510243.jpg",
      },
      {
          name:"Devine Hair & Beauty Salon",
          imageUrl: "https://image.shutterstock.com/image-photo/hairdresser-set-various-accessories-on-450w-387414154.jpg",
      },
      {
        name:"Bianca Beauty Salon & Spa",
        imageUrl: "https://image.shutterstock.com/image-photo/washing-hair-450w-544510243.jpg",
    },
    {
        name:"Devine Hair & Beauty Salon",
        imageUrl: "https://image.shutterstock.com/image-photo/hairdresser-set-various-accessories-on-450w-387414154.jpg",
    },
  ],
      };
      this.displayValue = props.display || props.value
      this.defaultRating = props.default || props.rating
      this.isReactElement = React.isValidElement
    index = 0;
    this.animatedValue = new Animated.Value(0);
    }
    FlatListItemSeparator = () => {
      return (
        <View
          style={{
            height: .5,
            width: "100%",
            backgroundColor: "#000",
          }}
        />
      );
    }

    componentWillReceiveProps(nextProps) {
      let defaultRating = this.props.rating || this.props.default
      let nextDefaultRating = nextProps.rating || nextProps.default
      if (defaultRating !== nextDefaultRating) {
        this.setState({
          rating: nextDefaultRating,
        })
      }
    }
  
    createPartialStar(partial, blockStyle, emptyBlockStyle, starStyle) {
      return this.props.opacity ?
        this.isReactElement(this.props.fullStar) ?
          <View style={{opacity: partial}}>
            {this.props.fullStar}
          </View>
          :
          <ImageBackground style={starStyle} source={this.props.emptyStar}>
            <Image style={{
              height: this.props.starSize,
              width: this.props.starSize,
              opacity: partial,
              backgroundColor:'transparent'}} source={this.props.fullStar}/>
          </ImageBackground>
        :
        <ImageBackground style={starStyle} source={this.props.fullStar}>
          <View style={{flexDirection: 'row'}}>
           <View style={emptyBlockStyle}></View>
           <View style={blockStyle}></View>
          </View>
          <Image style={{height: this.props.starSize, width: this.props.starSize, backgroundColor: 'transparent', position: 'absolute'}} source={this.props.emptyStar}/>
        </ImageBackground>
    }
  
    displayMode() {
      const partial = this.displayValue - Math.floor(this.displayValue)
      const blockStyle = {height: this.props.starSize, width: this.props.starSize * (1.0 - partial), backgroundColor: this.props.backingColor}
      const emptyBlockStyle = {height: this.props.starSize, width: this.props.starSize * partial, backgroundColor: 'transparent'}
      const starStyle = {height: this.props.starSize, width: this.props.starSize, backgroundColor: this.props.backingColor}
      const stars = []
      for (let i = 1; i < this.props.count + 1; i++) {
        if (i == Math.floor(this.displayValue) + 1) {
          //partial star
          const partialStarComponent =
            <View key={i} style={{paddingLeft: this.props.spacing/2, paddingRight: this.props.spacing/2}}>
              {this.createPartialStar(partial, blockStyle, emptyBlockStyle, starStyle)}
            </View>
  
          stars.push(partialStarComponent)
        } else if (i > Math.floor(this.displayValue) + 1) {
          //empty stars
          const emptyStarComponent = this.isReactElement(this.props.emptyStar) ?
            <View key={i}>{this.props.emptyStar}</View>
            :
            <View key={i} style={{paddingLeft: this.props.spacing/2, paddingRight: this.props.spacing/2}}>
              <Image style={starStyle} source={this.props.emptyStar}/>
            </View>
  
          stars.push(emptyStarComponent)
        } else {
          //filled stars
          const starComponent = this.isReactElement(this.props.fullStar) ?
            <View key={i}>{this.props.fullStar}</View>
            :
            <View key={i} style={{paddingLeft: this.props.spacing/2, paddingRight: this.props.spacing/2}}>
              <Image style={starStyle} source={this.props.fullStar}/>
            </View>
  
          stars.push(starComponent)
        }
      }
      return (
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>{stars}</View>
        </View>
      )
    }
  
    createHalfStarMember(index, star, halfStar) {
      // if not a halfStar, either fullStar or emptyStar
      let starComponent = halfStar || star
      starComponent = this.isReactElement(starComponent) ?
        starComponent
        :
        <ImageBackground style={{width: this.props.starSize, height: this.props.starSize}} source={star}>
          <Image style={{width: this.props.starSize, height: this.props.starSize}} source={halfStar}/>
        </ImageBackground>
  
      return (
        <View key={index} style={{paddingLeft: this.props.spacing/2, paddingRight: this.props.spacing/2}}>
          {starComponent}
          <View style={{flexDirection: 'row', position: 'absolute'}}>
            <TouchableOpacity style={{height: this.props.starSize, width: this.props.starSize/2}} disabled={this.props.disabled} onPress={()=>{
              this.setState({rating: index - 0.5})
              this.props.update(index - 0.5)
            }}/>
            <TouchableOpacity style={{height: this.props.starSize, width: this.props.starSize/2}} disabled={this.props.disabled} onPress={()=>{
              this.setState({rating: index})
              this.props.update(index)
            }}/>
          </View>
        </View>
      )
    }
    componentDidMount(){
      this.Bottom_star();
    }
    Bottom_star(){
      constStar_b = []
      for(let j = 1; j< 5 ; j++){
          let i =1;
          i = i +1;
      }
      return(
        <ResponsiveImage source={require('../Image/new_images/emptyStar3x.png')} initWidth="15" initHeight="15"/>                
      )
    }
  
    halfRatingMode() {
      const stars = []
      for (let i = 1; i < this.props.count + 1; i++) {
        const star = (i <= this.state.rating) ? this.props.fullStar : this.props.emptyStar
        const halfStar = (this.state.rating + 0.5 == i) ? this.props.halfStar : null
        stars.push(
          this.createHalfStarMember(i, star, halfStar)
        )
      }
      return (
        <View style={{flexDirection: 'row', alignItems:"flex-start"}}>
          {stars}
        </View>
      )
    }
  
    createFullStarMember(index, star) {
      const starComponent = this.isReactElement(star) ?
        star
        :
        <Image style={{width: this.props.starSize, height: this.props.starSize}} source={star}/>
  
      return (
        <View key={index} style={{paddingLeft: this.props.spacing/2, paddingRight: this.props.spacing/2}}>
          <TouchableOpacity disabled={this.props.disabled} onPress={()=>{
            this.setState({rating: index})
            this.props.update(index)
          }}>
            {starComponent}
          </TouchableOpacity>
        </View>
      )
    }
  
    fullRatingMode() {
      const stars = []
      for (let i = 1; i < this.props.count + 1; i++) {
        const star = (i <= this.state.rating) ? this.props.fullStar : this.props.emptyStar
        stars.push(
          this.createFullStarMember(i, star)
        )
      }
      return (
        <View style={{flexDirection: 'row', alignItems:"flex-start",width:wp("1%"),height:hp("1%")}}>
          {stars}
        </View>
      )
    }
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
    const Star_Rating = this.displayValue == null ?
    (this.props.half ? this.halfRatingMode() : this.fullRatingMode())
    :
    this.displayMode()
    return (
      <ScrollView style={{backgroundColor:"rgb(243,242,242)"}} horizontal={false}>
      
      <View style={styles.Header}>
        <View style={{flexDirection:"row",marginVertical:hp("2%"),marginHorizontal:wp("5%")}}>
        <TouchableOpacity onPress={this.findCoordinates}>
          <ResponsiveImage source={require('../Image/new_images/locationIcon2x.png')} style={{marginVertical:hp(".5%")}} initWidth="20" initHeight="23"/>                
          </TouchableOpacity>
          <Text style={{fontFamily:"Muli-ExtraBold",fontSize:RF(2.3),marginLeft:wp("2%"),marginTop:hp(".5%")}}>Sahyog Mandir Rd, Thane</Text>
          <ResponsiveImage source={require('../Image/new_images/editAddressIcon2x.png')} style={{marginVertical:hp("1%"),marginLeft:wp("2%")}} initWidth="14" initHeight="15"/>                
          <ResponsiveImage source={require('../Image/new_images/notificationIcon3x.png')} style={{marginVertical:hp(".5%"),marginLeft:wp("20%")}} initWidth="21" initHeight="23"/>
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
      <View style={{flexDirection:"row",justifyContent:"flex-end",marginTop:hp("1%")}}>
          <Text style={[styles.text,{marginRight:wp("3%"),fontSize:RF(1.8),color:"rgb(140,140,140)"}]}>FILTER</Text>
          <ResponsiveImage source={require('../Image/new_images/filterIcon3x.png')} style={{marginVertical:hp(".5%"),marginRight:wp("5%")}} initWidth="15" initHeight="15"/> 
      </View>

      <View style={[styles.box_SignUp,{height:hp("6%"),marginVertical:hp("2%"),marginHorizontal:wp("4%")}]}>
        <Text style={[styles.text,{marginRight:wp("60%"),paddingVertical:hp('1.3%'),}]}>Top Picks</Text>
      </View>
      
      <View style={{marginVertical:hp("1%"),width:wp("100%")}}>
      <FlatList
        horizontal
        data={this.state.data}
        renderItem={({ item: rowData }) => {
          return (
            <View style={{width:wp("60%"),borderRadius:20}}>
             <View style={[styles.button,{height:hp("5%"),marginTop:hp("0%"),width:wp("9.5%"),borderRadius:6,marginLeft:wp("50%")}]}>
                                 <Text style={[styles.buttonText,{fontSize:RF(1.8)}]}>20%</Text>
                                 <Text style={[styles.buttonText,{fontSize:RF(1.8)}]}>off</Text>
             </View>
              {/* <Card
                // title={null}
                image={{ uri: rowData.imageUrl }}
                containerStyle={{height:hp("20%"),borderRadius:20,marginBottom:hp("3%")}}
              >
              </Card> */}
              <Image style={{width:wp("55%"), height: hp("20%"),borderRadius:10,marginLeft:wp("5%")}} source={{uri:rowData.imageUrl}} />                                 

              <View style={{flexDirection:"row",marginLeft:wp("5%"),width:wp("45%"),justifyContent:"space-between",marginTop:hp("1%")}}>
                      <Text style={[styles.text,{fontSize:RF(2.7),marginBottom:hp("1%"),alignItems:"flex-start",fontFamily:"Muli-ExtraBold"}]}>{rowData.title}</Text>
                      <Text style={[styles.text,{fontSize:RF(1.8),marginTop:hp("1%")}]}>2.5 km</Text>
              </View> 
              <View style={{marginLeft:wp("3%"),flexDirection:"row"}}>
                <View style={{marginTop:hp(".5%")}}>
                {Star_Rating} 
                </View>
                <Text style={[styles.text,{fontSize:RF(1.8),marginLeft:wp("25%"),color:"rgb(140,140,140)"}]}>255 Reviews</Text>
              </View>
              <View style={{marginLeft:wp("3%"),flexDirection:"row",justifyContent:"space-evenly"}}>
                <View style={{flexDirection:"column",marginTop:hp(".5%")}}>
                  <Text style={[styles.text,{fontSize:RF(1.8),color:"rgb(140,140,140)"}]}>Chowpatty</Text>
                  <Text style={[styles.text,{fontSize:RF(1.8),color:"rgb(140,140,140)"}]}>Open till 10 pm</Text>
                </View>
                  <ResponsiveImage style={{marginLeft:"1%",marginVertical:hp("1%")}} source={require('../Image/new_images/rectangle1_3x.png')} initWidth="3" initHeight="35"/>
                <View style={{flexDirection:"column",marginTop:hp(".5%")}}>
                  <Text style={[styles.text,{fontSize:RF(1.8),color:"rgb(140,140,140)"}]}>Wait time 2h</Text>
                  <TouchableOpacity>
                  <Text style={[styles.text,{fontSize:RF(1.8),color:"rgb(255,164,0)"}]}>Join Queue</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={(item, index) => index}
      />
      </View>
      <View style={{flexDirection:"row"}}>
              <FlatList          
                    data={ this.state.dataSource1 }
                    renderItem={({item}) => 
                    <View style={{ 
                        width: wp('90%'),marginLeft:"4%",
                        height: hp('21%'),
                        backgroundColor:"white",
                        marginVertical:hp('2%'),
                        borderRadius:10,}}>
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>                          
                             <View >
                                 <View style={[styles.button,{height:hp("5%"),width:wp("9.5%"),borderRadius:6}]}>
                                 <Text style={[styles.buttonText,{fontSize:RF(1.8)}]}>20%</Text>
                                 <Text style={[styles.buttonText,{fontSize:RF(1.8)}]}>off</Text>
                                 </View>
                                 <Image style={{width: 100, height: 100,borderRadius:10,marginBottom:hp("10%"),marginLeft:wp("5%")}} source={{uri:item.imageUrl}} />                                 
                            </View>           
                            <View style={{flexDirection:"column",marginVertical:hp("2%"),width:wp("60%")}}>
                                  <Text style={[styles.text,{fontSize:RF(1.8),marginLeft:wp("45%"),color:"rgb(140,140,140)"}]}>2.5 km</Text>
                                  <Text style={[styles.text,{fontSize:RF(2),marginBottom:hp("1%"),marginLeft:wp("4%"),fontFamily:"Muli-ExtraBold"}]}>{item.name}</Text>
                              <View style={{flexDirection:"row",marginLeft:wp("2%")}}>
                                  <View style={{marginTop:hp(".5%")}}>
                                  {Star_Rating} 
                                  </View>
                                  <Text style={[styles.text,{fontSize:RF(1.8),marginLeft:wp("25%")}]}>255 Reviews</Text>
                              </View>
                              <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
                                  <View style={{flexDirection:"column",marginTop:hp(".5%")}}>
                                    <Text style={[styles.text,{fontSize:RF(1.8)}]}>Chowpatty</Text>
                                    <Text style={[styles.text,{fontSize:RF(1.8)}]}>Open till 10 pm</Text>
                                  </View>
                                <ResponsiveImage style={{marginLeft:"1%",marginVertical:hp("1%")}} source={require('../Image/new_images/rectangle1_3x.png')} initWidth="3" initHeight="35"/>
                                    <View style={{flexDirection:"column",marginTop:hp(".5%")}}>
                                      <Text style={[styles.text,{fontSize:RF(1.8)}]}>Wait time 2h</Text>
                                      <TouchableOpacity>
                                      <Text style={[styles.text,{fontSize:RF(1.8),color:"rgb(255,164,0)"}]}>Join Queue</Text>
                                      </TouchableOpacity>
                                    </View>
                              </View>
                            </View>  
                            </View>         
                        </View>   }                       
                    />
           </View>
           <View style={[styles.Header,{height:hp("10%")}]}>
           <View style={{flexDirection:"row"}}>
           <Text style={[styles.text,{fontSize:RF(2),marginTop:hp("1.3"),marginLeft:wp("5%"),fontFamily:"Muli-ExtraBold"}]}>Rate your service by Bianca Beauty</Text>
           <TouchableOpacity onPress={() => this.openDialog(false)}>
                     <Image
                                source={require('../Image/icon/cancel1.png')}
                                style={[styles.setting_Image,{marginLeft:wp("25%")}]}
                    />
            </TouchableOpacity>
           </View>
           <TouchableOpacity onPress={()=>{this.props.navigation.navigate('StartScreen')}} style={{marginLeft:wp("3%"),marginVertical:hp("1%")}}>
           {this.Bottom_star()}
           </TouchableOpacity>
           </View>
      </ScrollView>
    );
  }
}
StarReview.propTypes = {
  value: PropTypes.number,
  display: PropTypes.number,
  count: PropTypes.number,
  rating: PropTypes.number,
  default: PropTypes.number,
  emptyStar: PropTypes.oneOfType([PropTypes.number, PropTypes.object]).isRequired,
  fullStar: PropTypes.oneOfType([PropTypes.number, PropTypes.object]).isRequired,
  halfStar: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  update: PropTypes.func,
  starSize: PropTypes.number,
  backingColor: PropTypes.string,
  opacity: PropTypes.bool,
  half: PropTypes.bool,
  spacing: PropTypes.number,
  disabled: PropTypes.bool,
  Bottom_rating: PropTypes.number,
}

StarReview.defaultProps = {
  fullStar: require('../Image/new_images/fullStar3x.png'),
  halfStar: require('../star-images/starHalf.png'),
  emptyStar: require('../Image/new_images/emptyStar3x.png'),
  disabled: false,
  value: null,
  display: null,
  count: 5,
  rating: 0,
  Bottom_rating:5,
  default: 0,
  starSize: 12,
  update: () => {},
  backingColor: 'rgb(204,204,204)',
  opacity: false,
  half: false,
  spacing: 18
}

