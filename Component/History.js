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

class Ongoing extends React.Component {
    
        state = {
                     valueArray: [], disabled: false ,hair_data:"",hair_data_time:"",
                     isLoading: true,MakeUp_data:"",makeup_data_time:"",time:30,Increase_time:10,
                     Select_unselect:"true",Select_unselect_1:"true",Select_unselect_2:"true",
                     Select_unselect_3:"true",Select_unselect_4:"true",Select_unselect_5:"true",
                         dataSource : [ 
                             {
                                 name:"Hair "
                             },
                             {
                              name:"Hair cut"
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
        <View style={styles.container}>
                
             <View style={{flexDirection:"row"}}>
                      <FlatList          
                            data={ this.state.dataSource }
                            renderItem={({item}) => 
                            <View style={styles.Flex_main_box}> 
                                <View style={{flexDirection:"row",justifyContent:"space-between"}}>                          
                                     
                                     <View style={{flexDirection:"column",marginVertical:hp("2%"),marginLeft:wp("5%"),width:wp("30%")}}>
                                        <View style={{flexDirection:"row"}}>
                                            <ResponsiveImage source={require('../Image/main/serveTimeIcon3x.png')} style={{marginTop:hp(".6%")}} initWidth="16" initHeight="16"/>
                                            <Text style={styles.grey_text}>{item.name}</Text>
                                         </View>
                                         <View style={{marginVertical:hp("2%")}}>
                                         <Image style={styles.avatarMultiple} source={GLOBAL.Image} />
                                         </View>
                                    </View>           
                                      
                                    <View style={{flexDirection:"column",marginVertical:hp("2%"),alignItems:"flex-start",width:wp("50%")}}>
                                         <Text style={[styles.text,{fontSize:RF(2.3),marginBottom:hp("1%"),marginLeft:wp("2.5%")}]}>Token ID : TK102</Text>
                                         <Text style={[styles.text,{marginLeft:wp("3%"),fontSize:RF(2.3),marginBottom:hp("1%")}]}>{item.name}</Text>
                                         <Text style={[styles.grey_text,{marginLeft:wp("3%"),fontSize:RF(2),}]}>Service</Text>
                                         <Text style={[styles.text,{marginLeft:wp("3%"),fontSize:RF(2.3),marginBottom:hp("1%")}]}>{item.name}</Text>
                                         <Text style={[styles.grey_text,{marginLeft:wp("3%"),fontSize:RF(2),}]}>Stylist</Text>
                                         <Text style={[styles.text,{marginLeft:wp("3%"),fontSize:RF(2.3)}]}>{item.name}</Text>
                                    </View>           
                                </View>  
                                </View> }                       
                            />
                   </View>
         </View>
        </ScrollView>
    );
  }
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
                                 name:"Hair cut"
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
             <View style={{flexDirection:"row"}}>
                      <FlatList          
                            data={ this.state.dataSource1 }
                            renderItem={({item}) => 
                            <View style={styles.Flex_main_box}>
                                <View style={{flexDirection:"row",justifyContent:"space-between"}}>                          
                                     <View style={{flexDirection:"column",marginVertical:hp("2%"),marginLeft:wp("5%"),width:wp("30%")}}>
                                        <View style={{flexDirection:"row"}}>
                                            <ResponsiveImage source={require('../Image/main/dateIcongray3x.png')} style={{marginTop:hp(".6%")}} initWidth="16" initHeight="16"/>
                                            <Text style={[styles.text,{marginLeft:wp("3%"),color:"rgb(187,187,187)"}]}>{item.name}</Text>
                                         </View>
                                         <View style={{marginVertical:hp("2%")}}>
                                         <Image style={styles.avatarMultiple} source={GLOBAL.Image} />
                                         </View>
                                         {view}
                                    </View>           
                                      <View style={{flexDirection:"column",marginVertical:hp("2%"),alignItems:"flex-start",width:wp("50%")}}>
                                         <Text style={[styles.text,{fontSize:RF(2.3),marginBottom:hp("1%"),marginLeft:wp("2.5%")}]}>Token ID : TK102</Text>
                                         <Text style={[styles.text,{marginLeft:wp("3%"),fontSize:RF(2.3),marginBottom:hp("1%")}]}>{item.name}</Text>
                                         <Text style={[styles.grey_text,{marginLeft:wp("3%"),fontSize:RF(2),}]}>Service</Text>
                                         <Text style={[styles.text,{marginLeft:wp("3%"),fontSize:RF(2.3)}]}>{item.name}</Text>
                                         <Text style={[styles.grey_text,{marginLeft:wp("3%"),fontSize:RF(2),}]}>Stylist</Text>
                                         <Text style={[styles.text,{marginLeft:wp("3%"),fontSize:RF(2.3)}]}>{item.name}</Text>
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
  starSize: 12,
  update: () => {},
  backingColor: 'white',
  opacity: false,
  half: false,
  spacing: 8
}

const AuthStack = createMaterialTopTabNavigator({
  Ongoing:{ screen :Ongoing,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => {
        const line = focused ? require('../Image/main/highlight3x.png') : require('../Image/main/line-transparent-vertical-2.png')
        return (
          <View style={{flexDirection:"column",}}>
          <Text style={[styles.text,{width:wp("30%"),marginLeft:wp("10%"),marginTop:hp(".5%")}]}>Ongoing</Text>
          <ResponsiveImage source={line} style={{marginTop:hp("2%"),marginLeft:wp("6%")}} initWidth="100" initHeight="3"/>
          </View>
        )
    }
    })},
  Completed:  {screen:StarReview,
    navigationOptions: () => ({
      title:"Completed",
      tabBarIcon: ({ focused }) => {
        const line = focused ? require('../Image/main/highlight3x.png') : require('../Image/main/line-transparent-vertical-2.png')
        return (
          <View style={{flexDirection:"column"}}>
         <Text style={[styles.text,{width:wp("30%"),marginLeft:wp("4%"),marginTop:hp(".5%")}]}>Completed</Text>
          <ResponsiveImage source={line} style={{marginTop:hp("2%"),marginLeft:wp("2%")}} initWidth="110" initHeight="3"/>
          </View>
        )
    }
    })}, 
} ,{
  initialRouteName: 'Ongoing',
  navigationOptions: {
    headerStyle: {
      backgroundColor: "rgb(255,164,0)",
    },
  },
 
  tabBarOptions: 
   {
    labelStyles:{ fontSize:RF(5),
     } ,
    style: {
      height: hp("8%"),
      marginTop:hp("3%"),
      backgroundColor: "white",
      borderRadius:10,
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
          source={require('../Image/new_images/notificationIcon3x.png')}
          style={[styles.back_butt0n,{marginRight:wp("3%"),height:hp("3.2%"),width:wp("5%"),marginBottom:hp("1.5%")}]}
        />
          </TouchableOpacity>)
        })
    },
   Alert_top:{
            screen:Alert_top,
            navigationOptions: ({ navigation }) => ({
              title: 'ALERTS',
              headerLeft:null,
              headerRight:(
              <Image
                source={require('../Image/new_images/activenotificationIcon3x_2.png')}
                style={[styles.back_butt0n,{marginRight:wp("3%"),height:hp("3.2%"),width:wp("5%"),marginBottom:hp("1.5%")}]}
              />)
            })
          },
  },
  {
    initialRouteName:"AuthStack",
    // headerMode: "none",
    navigationOptions: {
      headerTitleStyle: {
        fontWeight: 'bold',marginBottom:hp("2%"),fontSize: RF("2.4"),justifyContent:"center",alignItems:"center"
      },
        },
  });