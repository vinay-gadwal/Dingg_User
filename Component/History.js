import React from 'react';
import styles from '../Style/Style'
import { TouchableOpacity, ScrollView, View, Animated, FlatList, Text, Dimensions, Image, YellowBox } from 'react-native';
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ResponsiveImage from 'react-native-responsive-image'
import { createMaterialTopTabNavigator } from 'react-navigation';
import PropTypes from 'prop-types'
import { Dialog } from "react-native-simple-dialogs";
import Alert_top from '../Component/Alert' 
import {createStackNavigator,} from 'react-navigation';
const GLOBAL = require('../Component/Color');

class Ongoing extends React.Component {
    
        state = {
                     valueArray: [], disabled: false ,hair_data:"",hair_data_time:"",
                     isLoading: true,MakeUp_data:"",makeup_data_time:"",time:30,Increase_time:10,
                     Select_unselect:"true",Select_unselect_1:"true",Select_unselect_2:"true",
                     Select_unselect_3:"true",Select_unselect_4:"true",Select_unselect_5:"true",
                         dataSource : [ 
                             {
                                 name:"1h 15m "
                             },
                             {
                              name:"1h 15m "
                          },
                     ],
                    
            }
          index = 0;
          animatedValue = new Animated.Value(0);
          openDialog = (show) => {
            this.setState({ showDialog: show });
        }

   managePasswordVisibility = () =>
        {
          this.setState({ Select_unselect: !this.state.Select_unselect });
        }

        managePasswordVisibility_1 = () =>
        {
          this.setState({ Select_unselect_1: !this.state.Select_unselect_1 });
        }
        managePasswordVisibility_2 = () =>
        {
          this.setState({ Select_unselect_2: !this.state.Select_unselect_2 });
        }
        managePasswordVisibility_3 = () =>
        {
          this.setState({ Select_unselect_3: !this.state.Select_unselect_3 });
        }
        managePasswordVisibility_4 = () =>
        {
          this.setState({ Select_unselect_4: !this.state.Select_unselect_4 });
        }
        managePasswordVisibility_5 = () =>
        {
          this.setState({ Select_unselect_5: !this.state.Select_unselect_5 });
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
      increase_time = () => {
        // var Increase_time = 10;
        this.setState({time : this.state.Increase_time})
      }
  render() {
    return (
        <ScrollView>
        <View style={[styles.container]}>      
        <View style={[styles.Row,{height:hp("100%"),marginTop:hp("2%")}]}>
                      <FlatList          
                            data={ this.state.dataSource }
                            renderItem={({item}) => 
                            <View style={styles.Flex_main_box}> 
                                <View style={styles.Row}>                          
                                     
                                     <View style={styles.Flat_box_column}>
                                        <View style={[styles.Row,styles.margin_3,{marginTop:hp("2.5%")}]}>
                                            <ResponsiveImage source={GLOBAL.Serve_time} style={{marginTop:hp("1%")}} initWidth={GLOBAL.COLOR.Size_16} initHeight={GLOBAL.COLOR.Size_16}/>
                                            <Text style={[styles.grey_text,{marginRight:wp("12%")}]}>{item.name}</Text>
                                         </View>
                                         <View style={styles.Padding_verticele}>
                                         <Image style={[styles.FlatList_Image,{width: wp('25%'),height: hp('14.5%'),}]} 
                                          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}  />                                 
                                         </View>
                                    </View>           
                                      
                                    <View style={styles.Flex_box_right}>
                                         <Text style={[styles.Flat_box_text]}>Token ID : TK102</Text>
                                         <Text style={[styles.Flat_box_text]}>{item.name}</Text>
                                         <Text style={[styles.grey_text]}>Service</Text>
                                         <Text style={[styles.Flat_box_text,{marginTop:hp("0%")}]}>ndcjkdasfdshafdsafjdsafdfjkdhjfdsjfdsfjkdsfjkndsjkfjkdsafjkdsahjadfs</Text>
                                         <Text style={[styles.grey_text]}>Stylist</Text>
                                         <Text style={[styles.Flat_box_text,{marginTop:hp("0%")}]}>{item.name}</Text>
                                    </View>           
                                </View>  
                                </View> }                       
                            />
                   </View>
         </View>
        </ScrollView>
    );}
}
class StarReview extends React.Component {
  constructor(props){
    super(props)
        this.state = {
                     valueArray: [], disabled: false ,hair_data:"",hair_data_time:"",
                     isLoading: true,MakeUp_data:"",makeup_data_time:"",
                     rating: this.defaultRating,
                         dataSource1 : [ 
                             {
                                 name:"15oct2018"
                             },
                     ],
                    
            }
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
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
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
          <View style={{flexDirection: 'row', justifyContent: 'center',height:"1%"}}>
            {stars}
          </View>
        )
      }
    
  render() {
    const view = this.displayValue == null ?
    (this.props.half ? this.halfRatingMode() : this.fullRatingMode())
    :
    this.displayMode()
    return (
        <ScrollView>
        <View style={styles.container}>
        <View style={[styles.Row,{height:hp("100%"),marginTop:hp("2%")}]}>
                      <FlatList          
                            data={ this.state.dataSource1 }
                            renderItem={({item}) => 
                            <View style={styles.Flex_main_box}>
                                <View style={styles.Row}>                          
                                     <View style={styles.Flat_box_column}>
                                     <View style={[styles.Row,styles.margin_3,{marginTop:hp("2.5%")}]}>
                                            <ResponsiveImage source={GLOBAL.Date_icon} style={{marginTop:hp("1%")}} initWidth={GLOBAL.COLOR.Size_16} initHeight={GLOBAL.COLOR.Size_16}/>
                                            <Text style={[styles.grey_text,{marginRight:wp("6%")}]}>{item.name}</Text>
                                         </View>
                                         <View style={styles.Padding_verticele}>
                                         <Image style={[styles.FlatList_Image]} 
                                          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}  />                                 
                                         </View>
                                         <View style={{marginRight:wp("7%"),marginBottom:hp("2%")}}>
                                         {view}
                                         </View>
                                    </View>           
                                      <View style={styles.Flex_box_right}>
                                         <Text style={[styles.Flat_box_text]}>Token ID : TK102</Text>
                                         <Text style={[styles.Flat_box_text]}>{item.name}</Text>
                                         <Text style={[styles.grey_text]}>Service</Text>
                                         <Text style={[styles.Flat_box_text,{marginTop:hp("0%")}]}>{item.name}</Text>
                                         <Text style={[styles.grey_text]}>Stylist</Text>
                                         <Text style={[styles.Flat_box_text,{marginTop:hp("0%")}]}>{item.name}</Text>
                                    </View>           
                                </View> 
                                </View>  }                       
                            />
                   </View>
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
}

StarReview.defaultProps = {
  fullStar: require('../star-images/starFilled.png'),
  halfStar: require('../star-images/starHalf.png'),
  emptyStar: require('../star-images/starEmpty.png'),
  disabled: false,
  value: null,
  display: null,
  count: 5,
  rating: 0,
  default: 0,
  starSize: 10,
  update: () => {},
  backingColor: 'white',
  opacity: false,
  half: false,
  spacing: 6
}

const AuthStack = createMaterialTopTabNavigator({
  Ongoing:{ screen :Ongoing,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => {
        const line = focused ? GLOBAL.TAb_image_yellow : GLOBAL.TAb_image_transparent
        return (
          <View style={styles.column}>
          <Text style={[styles.Tab_text,{marginTop:hp}]}>Ongoing</Text>
          <ResponsiveImage source={line} style={[styles.Tab_line]} initWidth={GLOBAL.COLOR.Size_100} initHeight={GLOBAL.COLOR.Icon_divider_width}/>
          </View>
        )
    }
    })},
  Completed:  {screen:StarReview,
    navigationOptions: () => ({
      title:"Completed",
      tabBarIcon: ({ focused }) => {
        const line = focused ? GLOBAL.TAb_image_yellow : GLOBAL.TAb_image_transparent
        return (
          <View style={styles.column}>
         <Text style={[styles.Tab_text]}>Completed</Text>
          <ResponsiveImage source={line} style={[styles.Tab_line,{marginLeft:wp("9%")}]} initWidth={GLOBAL.COLOR.Size_100} initHeight={GLOBAL.COLOR.Icon_divider_width}/>
          </View>
        )
    }
    })}, 
} ,{
  initialRouteName: 'Ongoing',
  tabBarOptions: 
   {
    labelStyles:{ fontSize:RF(5),
     } ,
    style: {
      height: hp("7%"),
      marginTop:hp("2%"),
      backgroundColor: "white",
      borderRadius:8,
      marginHorizontal:wp("5%"),
      justifyContent:"flex-end"
    },
    indicatorStyle: {
      opacity: 0,
    },
    showIcon: true,
    showLabel: false,
    activeTintColor: 'black',
    inactiveTintColor: 'black',
  },
  }
  );
  export default createStackNavigator({
    AuthStack:{
      screen:AuthStack,
      navigationOptions: ({ navigation }) => ({
        title: 'HISTORY',
        headerRight:(
          <TouchableOpacity onPress={() => {navigation.navigate('Alert_top')}}>
           <Image
          source={GLOBAL.Notification_yellow}
          style={[styles.back_right]}
        />
          </TouchableOpacity>)
        })
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
  },
  {
    initialRouteName:"AuthStack",
    navigationOptions: {
      headerTitleStyle: styles.Header
        },
  });