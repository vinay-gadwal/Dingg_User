import React, { Component } from 'react';
import {
  Text,
  View,Image,Animated,ImageBackground,
  ScrollView,Alert,TouchableOpacity,FlatList,StatusBar,Platform
} from 'react-native';
import styles from '../Style/Style'
// import Star from '../Home_screens/RatingScreen'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize"
import { createStackNavigator } from 'react-navigation'
import ResponsiveImage from 'react-native-responsive-image'
console.disableYellowBox = true;
import PropTypes from 'prop-types'
import CompleteFlatList from 'react-native-complete-flatlist';
import ImageOverlay from "react-native-image-overlay";

const GLOBAL = require('../Component/Color');

const data = [
  {
    imageUrl: "https://image.shutterstock.com/image-photo/beautiful-hairstyle-young-woman-after-450w-711308113.jpg",
    title: "something",
    name:"Dingg Beauty Salon & Spa",
  },
  {
    imageUrl: "https://image.shutterstock.com/image-photo/portrait-happy-woman-hair-salon-450w-136244417.jpg",
    title: "something two",
    name:"Rahul Beauty Salon & Spa",
  },
  {
    imageUrl: "https://image.shutterstock.com/image-photo/hairdresser-trimming-brown-hair-scissors-450w-178947776.jpg",
    title: "something three",
    name:"Rabi Beauty Salon & Spa",
  },
  {
    imageUrl: "https://image.shutterstock.com/image-photo/washing-hair-450w-544510243.jpg",
    title: "something four",
    name:"Methivs Beauty Salon & Spa",
  },
  {
    imageUrl: "https://image.shutterstock.com/image-illustration/barber-shop-modern-loft-design-450w-509792062.jpg",
    title: "something five",
    name:"Herry Beauty Salon & Spa",
  },
  {
    imageUrl: "https://image.shutterstock.com/image-photo/hairdresser-set-various-accessories-on-450w-387414154.jpg",
    title: "something six",
    name:"Peter Beauty Salon & Spa",
  }
];

export default class StarReview extends Component {
  constructor(props){
    super(props)
    this.state = {
        data: data,
      };
      this.displayValue = props.display || props.value
      this.defaultRating = props.default || props.rating
      this.isReactElement = React.isValidElement
    index = 0;
    this.animatedValue = new Animated.Value(0);
    }
    
    cell = (data,index) => {
      const item = data.cleanData ? data.cleanData : data
       return (        
        <View style={[styles.Profile_Container,styles.Column_reverse]}>
                                 <View style={styles.Row}>
                                 <ImageOverlay contentPosition="top" containerStyle={styles.HOme_flex_bottom} rounded={10} source={{uri:item.imageUrl}} >
                                 </ImageOverlay>                                 
                                 <View style={[styles.column,{width:wp("55%")}]}>
                                  <Text style={[styles.Titile_small_text,styles.Queue_row,{marginLeft:wp("40%")}]}>2.5 km</Text>
                                  <Text style={[styles.text,styles.Queue_row,{fontFamily:GLOBAL.COLOR.Font_bold}]}>{item.name}</Text>
                                  <View style={styles.Row}>
                                    <View style={styles.margin_5}>
                                    {/* {Star_Rating}  */}
                                    </View>
                                    <Text style={[styles.copy_rigth,styles.Queue_row,{marginRight:wp("15%")}]}>255 Reviews</Text>
                                  </View>
                                  <View style={[styles.Row,{justifyContent:"flex-start"}]}>
                                  <View style={styles.column}>
                                    <Text style={[styles.grey_text,styles.Queue_row,{marginTop:hp("0%")}]}>Chowpatty</Text>
                                    <Text style={[styles.grey_text,styles.Queue_row,{marginTop:hp("0%")}]}>Open till 10 pm</Text>
                                  </View>
                                    <ResponsiveImage style={styles.rectangle_image} source={GLOBAL.rectangle_image} initWidth={GLOBAL.COLOR.Icon_divider_width} initHeight={GLOBAL.COLOR.Size_35}/>
                                    <View style={styles.column}>
                                    <Text style={[styles.review_text,styles.Queue_row,{marginLeft:wp("0%")}]}>Wait time 2h</Text>
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
       )
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
    const { navigation } = this.props;
    return (
      <ScrollView style={{backgroundColor:GLOBAL.COLOR.rootBAckgroundColor,flex:1}} horizontal={false}>
      
      <View style={[styles.Home_header,styles.Row]}>
        
        <View style={[styles.column,{marginTop:hp("1.5%")}]}>
          <View style={[styles.Row,styles.Category_line]}>
          <Text style={styles.text}>Salon & Spa</Text>
          <ResponsiveImage source={GLOBAL.Down_Arrow} style={styles.Search_line} initWidth={GLOBAL.COLOR.size_10} initHeight={GLOBAL.COLOR.size_7}/> 
          </View>
          <ResponsiveImage style={styles.Search_line} source={GLOBAL.rectangle_image_black} initWidth={GLOBAL.COLOR.size_160} initHeight={GLOBAL.COLOR._height}/>
        </View>     
        
        <View style={[styles.Home_filter,]}>
          <Text style={styles.grey_text_PROFILE_EDIT}>FILTER</Text>
          <ResponsiveImage source={GLOBAL.Filter_Icon} style={[styles.Home_icon,{marginTop:hp("2.5%"),marginHorizontal:wp("2%")}]} initWidth={GLOBAL.COLOR.Size_15} initHeight={GLOBAL.COLOR.Size_15}/> 
      </View>
     
      </View>
            <CompleteFlatList
                  searchKey={['name', 'status', 'time', 'date']}
                  highlightColor={GLOBAL.COLOR.rootBAckgroundColor}
                  // pullToRefreshCallback={() => {
                  //   alert('refreshing');
                  // }}
                  placeholder	="Search"
                  isRefreshing={true}
                  backgroundStyles={{backgroundColor:GLOBAL.COLOR.rootBAckgroundColor}}
                  data={data}
                  renderSeparator={null}
                  renderItem={this.cell}
                  width="80%"
                />
      {/* <View style={{flexDirection:"row"}}>
              <FlatList          
                    data={ this.state.dataSource1 }
                    renderItem={({item}) => 
                    <View style={[styles.list_box,{height:hp("22%")}]}>
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>                          
                             <View >
                                 <View style={[styles.button,{height:hp("5%"),width:wp("9.5%"),borderRadius:6}]}>
                                 <Text style={[styles.buttonText,{fontSize:RF(1.8)}]}>20%</Text>
                                 <Text style={[styles.buttonText,{fontSize:RF(1.8)}]}>off</Text>
                                 </View>
                                 <Image style={{width:wp("25%"), height:hp("12%"),borderRadius:10,marginLeft:wp("5%")}} source={{uri:item.imageUrl}} />                                 
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
           </View> */}
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

