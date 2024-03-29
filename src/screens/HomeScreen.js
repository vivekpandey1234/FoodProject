import React,{useState} from 'react';
import {View, Text, StyleSheet,TouchableOpacity,ScrollView,FlatList,Pressable,Image, Dimensions} from 'react-native';
import { Icon } from 'react-native-elements';
import HomeHeader from '../components/HomeHeader';
import {colors,parameters} from '../global/styles';
import  {filterData,restaurantsData}  from '../global/Data';
import FoodCard from '../components/FoodCard';
import CountDown from 'react-native-countdown-component';


const SCREEN_WIDTH =Dimensions.get('window').width

export default function HomeScreen({navigation}) {

  const [delivery, setDelivery]=useState(true)
  const [indexCheck, setIndexCheck]=useState("0")
  return (
    <View style={styles.container}>

      <HomeHeader navigation={navigation}/>

      <ScrollView
        stickyHeaderIndices={[0]}
        showsHorizontalScrollIndicator={true}>

        <View style={{backgroundColor:colors.cardbackground,paddingBottom:5}}> 

          <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-evenly'}}>
            <TouchableOpacity 
             onPress={()=>{
             setDelivery(true)
             }}>
             <View style={{...styles.deliveryButton,backgroundColor:delivery?colors.buttons : colors.gray4}}>
              <Text style={styles.deliveryText}>Delivery</Text>
             </View>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={()=>{
              setDelivery(false)
              //navigation.navigate("RestaurantMapScreen")
              }}>

              <View style={{...styles.deliveryButton,backgroundColor:delivery?colors.gray4 :colors.buttons}}>
                <Text style={styles.deliveryText}>Pick Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.filterView}>
          <View style={styles.addressView}>
            <View style={{flexDirection:'row',alignItems:'center',paddingLeft:10}}>
              <Icon
                type='material-community'
                name='map-marker'
                color={colors.gray1}
                size={26}
              />
              <Text style={{marginLeft:3,marginRight:5}}>22 Beessie Street</Text>
            </View>

            <View style={styles.clockView}>
              <Icon
                type='material-community'
                name='clock-time-four'
                color={colors.gray1}
                size={25}
              />
              <Text style={{marginLeft:3,marginRight:15}}>Now</Text>
            </View>
          </View>

          <View>
            <Icon
             type='material-community'
             name='tune'
             color={colors.gray1}
             size={25}
            />
          </View>
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Categories</Text>
        </View>

        <View>
         <FlatList 
           horizontal ={true}
           showsHorizontalScrollIndicator ={true}
           data={filterData}
           keyExtractor = {(item)=>item.id}
           extraData={indexCheck}
           renderItem={({item,index})=>(
            <Pressable
             onPress={()=>{setIndexCheck(item.id)}}>
              <View style = {indexCheck === item.id ? {...styles.smallCardSelected} : {...styles.smallCard}}>
                <Image
                 style={{height:60,width:60,borderRadius:20}}
                 source ={item.image}
                />
                <View>
                  <Text style={indexCheck === item.id?{...styles.smallCardTextSelected}:{...styles.smallCardText}}>{item.name}</Text>
                </View>
              </View>
            </Pressable>)}
          />
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Free delivery now</Text>
        </View>
        
        <View style={{paddingTop:5, paddingBottom:20}}>

        <View style={{flexDirection:'row'}}>
          <Text style={{marginLeft:15,fontSize:16,marginTop:10,marginRight:5}}>Options changing in</Text>
          <CountDown 
          until={3600}
          size={14}
          digitStyle={{backgroundColor:colors.lightgreen}}
          digitTxtStyle={{color:colors.cardbackground}}
          timeToShow={['M','S']}
          timeLabels={{m:'min',s:'sec'}}
          />
        </View>


          <FlatList style={{marginTop:10,margineBottom:10}}
           horizontal={true}
           data={restaurantsData}
           keyExtractor={(item,index)=>index.toString()}
           showsHorizontalScrollIndicator={false}
            renderItem={({item})=>(
              <View style={{marginRight:5}}>
                <FoodCard
                 screenWidth ={SCREEN_WIDTH*0.8}
                 images ={item.images}
                 restaurantName={item.restaurantsName}
                 farAway={item.farAway}
                 businessAddress={item.businessAddress}
                 averageReview={item.averageReview}
                 numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Promotions available</Text>
        </View>
        
        <View style={{paddingBottom:20}}>
         <FlatList style={{marginTop:10,margineBottom:10}}
           horizontal={true}
           data={restaurantsData}
           keyExtractor={(item,index)=>index.toString()}
           showsHorizontalScrollIndicator={false}
           renderItem={({item})=>(
              <View style={{marginRight:5}}>
                <FoodCard
                  screenWidth ={SCREEN_WIDTH*0.8}
                  images ={item.images}
                  restaurantName={item.restaurantsName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>
        
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Restaurants in your area</Text>
        </View>
        
        <View style={{width:SCREEN_WIDTH,paddingTop:10}}>
          {
            restaurantsData.map(item=>(
              <View key={item.id} style={{paddingBottom:20}}> 
                <FoodCard
                  screenWidth ={SCREEN_WIDTH*0.95}
                  images ={item.images}
                  restaurantName={item.restaurantsName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            ))
          }
        </View>
       

      </ScrollView>

      { delivery &&
       <View style={styles.floatButton}>
        <TouchableOpacity
        onPress={()=>{
          navigation.navigate("RestaurantMapScreen")
        }}
        >
          <Icon
          name='place'
          type="material"
          size={32}
          color={colors.buttons}
          />
          <Text style={{color:colors.gray2}}>Map</Text>
        </TouchableOpacity>
       </View>

      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deliveryButton:{
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },
  deliveryText:{
    marginLeft: 5,
    fontSize: 16,
  },
  filterView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  clockView:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:colors.cardbackground,
    borderRadius: 12,
    paddingHorizontal: 5,
    marginRight: 5,
  },
  addressView:{
    flexDirection:'row',
    backgroundColor:colors.gray4,
    borderRadius: 15,
    paddingVertical: 3,
    justifyContent:'space-between',
    paddingHorizontal: 30,
  },
  headerText:{
    color:colors.gray1,
    fontSize: 22,
    fontWeight:'bold',
    paddingLeft: 10,
  },
  headerTextView:{
    backgroundColor:colors.gray5,
    paddingVertical: 3,
  },
  smallCard:{
    borderRadius:30,
    backgroundColor:colors.gray5,
    justifyContent:'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  smallCardSelected:{
    borderRadius:30,
    backgroundColor:colors.buttons,
    justifyContent:'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  smallCardTextSelected:{
    fontWeight:'bold',
    color:colors.cardbackground,
  },
  smallCardText:{
    fontWeight:'bold',
    color:colors.gray2,
  },
  floatButton:{
    position:'absolute',
    bottom:10,
    right:15,
    backgroundColor:'white',
    elevation:10,
    width:60,
    height:60,
    borderRadius:30,
    alignItems:'center'
  }
});
