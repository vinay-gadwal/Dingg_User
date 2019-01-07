import React, { Component } from 'react';
import {
  Text,
  View,Image,Animated,ImageBackground,
  ScrollView,Alert,TouchableOpacity,FlatList,AsyncStorage
} from 'react-native';
import styles from '../Style/Style'
// import Star from '../Home_screens/RatingScreen'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize"
import { createStackNavigator } from 'react-navigation'
import Booking from '../Home_screens/BookService'
import Alert_top from '../Component/Alert' 
import ResponsiveImage from 'react-native-responsive-image'
import Search from '../Home_screens/Search'
import saloonDetails from '../Home_screens/SalonDetails'
console.disableYellowBox = true;
import PropTypes from 'prop-types'
import ImageOverlay from "react-native-image-overlay";
const GLOBAL = require('../Component/Color');

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
class StarReview extends Component {
  constructor(props){
    super(props)
    this.state = {
        avatarSource: null,avatarSource1:null,
        videoSource: null,isOnDefaultToggleSwitch: false,
        isOnLargeToggleSwitch_user: true,
        isOnBlueToggleSwitch: false,location: null,Rating_view:true,
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
    componentDidMount(){
      apis.LOCAL_Delete_DATA('OTPticket')
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
          <View style={styles.Row}>
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
        <ResponsiveImage source={GLOBAL.Star} initWidth={GLOBAL.COLOR.Size_15} initWidth={GLOBAL.COLOR.Size_15}/>                
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
        <View style={{flexDirection:"row"}}>
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
    Star_Rating_view = () =>{
      this.setState({ Rating_view: false });
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
      <ScrollView style={{backgroundColor:GLOBAL.COLOR.rootBAckgroundColor,flex:1}} horizontal={false}>
      <View style={styles.Home_header}>
        <View style={[styles.Row,styles.Padding_verticele,styles.Category_line]}>
        <View style={styles.Row}>
        <TouchableOpacity onPress={this.findCoordinates}>
          <ResponsiveImage source={GLOBAL.Location_icon}  initWidth={GLOBAL.COLOR.Size_16} initHeight={GLOBAL.COLOR.Size_20}/>                
          </TouchableOpacity>
          <Text style={[styles.text,{fontFamily:GLOBAL.COLOR.Font_bold,marginHorizontal:wp("2%")}]}>Sahyog Mandir Rd, Thane</Text>
          {/* {this.state.location} */}
          <ResponsiveImage source={GLOBAL.Edit_icon} initWidth={GLOBAL.COLOR.Size_14} initHeight={GLOBAL.COLOR.Size_15}/>                
          </View>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Alert_top')}}>
          <ResponsiveImage source={GLOBAL.Notification_yellow} style={styles.back_right}/>
          </TouchableOpacity>
        </View>
        <View style={[styles.Row]}>
        
        <View style={styles.Flat_box_column}>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Search')}} style={styles.Row}>
          <ResponsiveImage source={GLOBAL.Search_icon} style={styles.Home_icon} initWidth={GLOBAL.COLOR.Size_15} initHeight={GLOBAL.COLOR.Size_15}/> 
          <Text style={[styles.text,{color:GLOBAL.COLOR.GRAY,marginRight:wp("12%")}]}>Search</Text>
          </TouchableOpacity>
          <ResponsiveImage style={styles.Home_icon} source={GLOBAL.table_divider} initWidth={GLOBAL.COLOR.size_200} initHeight={GLOBAL.COLOR._height}/>
        </View>
        
        <View style={[styles.Flat_box_column,{marginRight:wp("5%")}]}>
          <View style={styles.Row}>
          <Text style={[styles.text]}>Salon</Text>
          <ResponsiveImage source={GLOBAL.Down_Arrow} style={styles.Home_icon} initWidth={GLOBAL.COLOR.Size_8} initHeight={GLOBAL.COLOR.size_5}/> 
          </View>
          <ResponsiveImage style={styles.Home_icon} source={GLOBAL.table_divider} initWidth={GLOBAL.COLOR.size_120} initHeight={GLOBAL.COLOR._height}/>
        </View>
        
        </View>
      </View>
      <View style={[styles.Home_filter,{marginVertical:hp("1.3%")}]}>
          <Text style={styles.grey_text}>FILTER</Text>
          <ResponsiveImage source={GLOBAL.Filter_Icon} style={[styles.Home_icon,{marginHorizontal:wp("2%")}]} initWidth={GLOBAL.COLOR.Size_15} initHeight={GLOBAL.COLOR.Size_15}/> 
      </View>
      <View>
      <View style={[styles.box,{paddingVertical:hp("1.2%"),}]}>
        <Text style={[styles.Big_text,{marginRight:wp("60%")}]}>Top Picks</Text>
      </View>
      
      <FlatList
        horizontal
        data={this.state.data}
        renderItem={({ item: rowData }) => {
          return (
              // {/* <Card
              //   // title={null}
              //   image={{ uri: rowData.imageUrl }}
              //   containerStyle={{height:hp("20%"),borderRadius:20,marginBottom:hp("3%")}}
              // >
              // </Card> */}
              <View style={[styles.Column_reverse,styles.MArgin_bottom,{marginTop:hp("0%")}]}>
              <View >
              <ImageOverlay containerStyle={styles.HOme_flex_top} rounded={10}
                       contentPosition="top" source={{uri:rowData.imageUrl}} >                                
             </ImageOverlay>
              <View style={styles.Salon_name}>
                      <Text style={[styles.text,styles.Queue_row,{fontFamily:GLOBAL.COLOR.Font_bold}]}>{rowData.title}</Text>
                      <Text style={[styles.Titile_small_text,styles.Queue_row,]}>2.5 km</Text>
              </View> 
              <View style={[styles.star_row,styles.Queue_row]}>
                <View style={styles.margin_5}>
                {Star_Rating} 
                </View>
                <Text style={[styles.review_text]}>255 Reviews</Text>
              </View>
              <View style={styles.Home_row}>
                <View style={styles.column}>
                  <Text style={[styles.grey_text,styles.Queue_row,{marginTop:hp("0%")}]}>Chowpatty</Text>
                  <Text style={[styles.grey_text,styles.Queue_row,{marginTop:hp("0%")}]}>Open till 10 pm</Text>
                </View>
                  <ResponsiveImage style={styles.margin_5} source={GLOBAL.rectangle_image} initWidth={GLOBAL.COLOR.Icon_divider_width} initHeight={GLOBAL.COLOR.Size_35}/>
                  <View style={[styles.column]}>
                  <Text style={[styles.review_text,styles.Queue_row,{marginLeft:wp("0%")}]}>Wait time 2h</Text>
                  <TouchableOpacity onPress={() =>{this.props.navigation.navigate('Booking')}}>
                  <Text style={[styles.offer_button_text,styles.Queue_row,{color:GLOBAL.COLOR.ORANGE}]}>Join Queue</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
                          <View style={[styles.Edit_button]}>
                            <View style={[styles.Button_offer_home,{marginTop:hp("2%")}]}>
                              <Text style={styles.offer_button_text}>20%</Text>
                              <Text style={styles.offer_button_text}>off</Text>
                            </View>
                          </View>
            </View>
          );
        }}
        keyExtractor={(item, index) => index}
      />
      </View>
      <View style={[styles.Row]}>
              <FlatList          
                    data={ this.state.dataSource1 }
                    renderItem={({item}) => 
            <View style={[styles.Profile_Container,styles.Column_reverse]}>
        
                          <View style={styles.Row}>
                                 <ImageOverlay contentPosition="top" containerStyle={styles.HOme_flex_bottom} rounded={10} source={{uri:item.imageUrl}} >
                                 </ImageOverlay>                                 
                              <View style={styles.column}>
                                  <Text style={[styles.grey_text,styles.Queue_row,{marginLeft:wp("40%")}]}>2.5 km</Text>
                                  <Text style={[styles.text,styles.Queue_row,{fontFamily:GLOBAL.COLOR.Font_bold}]}>{item.name}</Text>
                                  <View style={styles.Row}>
                                    <View style={styles.margin_5}>
                                    {Star_Rating} 
                                    </View>
                                    <Text style={[styles.Titile_small_text,styles.Queue_row,{marginRight:wp("8%")}]}>255 Reviews</Text>
                                  </View>
                                  <View style={[styles.Row,styles.Home_icon]}>
                                  <View style={styles.column}>
                                    <Text style={[styles.Titile_small_text,styles.Queue_row]}>Chowpatty</Text>
                                    <Text style={[styles.Titile_small_text,styles.Queue_row]}>Open till 10 pm</Text>
                                  </View>
                                    <ResponsiveImage style={styles.rectangle_image} source={GLOBAL.rectangle_image} initWidth={GLOBAL.COLOR.Icon_divider_width} initHeight={GLOBAL.COLOR.Size_35}/>
                                    <View style={[styles.column]}>
                                    <Text style={[styles.Titile_small_text,styles.Queue_row,{marginLeft:wp("0%")}]}>Wait time 2h</Text>
                                    <TouchableOpacity onPress={() =>{this.props.navigation.navigate('Booking')}}>
                                    <Text style={[styles.offer_button_text,styles.Queue_row,{color:GLOBAL.COLOR.ORANGE}]}>Join Queue</Text>
                                    </TouchableOpacity>
                                  </View>
                                </View>
                            </View>   
                          </View>
                          <View style={styles.Edit_button}>
                            <View style={[styles.Button_offer_home,styles.Home_offer_overlay]}>
                              <Text style={styles.offer_button_text}>20%</Text>
                              <Text style={styles.offer_button_text}>off</Text>
                            </View>
                          </View>
            </View>       
                     }                       
                    />
           </View>
          {!this.state.Rating_view ? <View></View> : 
          <View style={[styles.Home_header,{height:hp("10%")}]}>
          <View style={styles.Row}>
          <Text style={styles.text}>Rate your service by Bianca Beauty</Text>
          <TouchableOpacity onPress={this.Star_Rating_view}>
                    <Image
                               source={GLOBAL.Cancel_Button}
                               style={[styles.Home_cancel_icon]}
                   />
           </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Rating_Screen')}}>
               <Text>hello</Text>           
               </TouchableOpacity>
          </View>}
          
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

export default createStackNavigator({
  StarReview:{
    screen:StarReview,
    navigationOptions: {
      header: null //this will hide the header
    },
  },
  Search:{
          screen:Search,
          navigationOptions: {
            header: null //this will hide the header
          },
        },
 Alert_top:{
          screen:Alert_top,
          navigationOptions: ({ navigation }) => ({
            title: 'NOTIFICATION',
            headerLeft:null,
            headerRight:(
            <Image
            source={GLOBAL.Notification_Gray}
              style={[styles.back_right]}
            />)
          })
        },
  Booking:{
          screen:Booking,
          navigationOptions: ({ navigation }) => ({
            title: 'NOTIFICATION',
              headerLeft:(
                <TouchableOpacity  onPress={ () => { navigation.saloonDetails() }}>
              <Image
                source={GLOBAL.back_icon}
                style={[styles.back_right]}
              />
              </TouchableOpacity>)
          })
        },
        saloonDetails:{
          screen:saloonDetails,
          navigationOptions: ({ navigation }) => ({
            title: 'SALON DETAIL',
              headerLeft:(
                <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
              <Image
                source={GLOBAL.back_icon}
                style={[styles.back_right]}
              />
              </TouchableOpacity>)
          })
        }
},

{
  initialRouteName:"StarReview",
  // headerMode: "none",
  navigationOptions: {
    headerTitleStyle: styles.Header
      },
});