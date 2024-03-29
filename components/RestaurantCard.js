import { View, Text, Image,FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useEffect} from 'react';
import { Entypo, EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const RestaurantCard = ({details, meal}) => {

    useEffect(() => {
        console.log({details})
    })

    const navigation = useNavigation();
  return (

    <>
        <TouchableOpacity style={styles.contain}
                onPress = {()=>{
                navigation.navigate('MealScreen',{details, meal})
            }}
        >
            <View style={{width: 350,backgroundColor: '#fff',paddingBottom:20,borderRadius:20}}>
                <Image
                    style = {styles.imgStyle}
                    source = {details.image}
                />
                <View style={{flexDirection:'row',marginTop: 5,justifyContent: 'space-between', alignItems: 'center'}}>
                    <View>
                        <Text style={{fontSize:24, fontWeight: 'bold'}}>{details.title}</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems: 'center'}}>
                        <Entypo name="star" size={15} color="#757585" />
                        <Text style={{marginHorizontal:5}}>{details.rating}</Text>
                    </View>
                </View>
                <View style={{marginTop:5,flexDirection:'row'}}>
                    <EvilIcons name="location" size={18} color="#757585" />
                    <Text style={{marginLeft:5, fontWeight: '300'}}>Nearby {details.location}</Text>
                </View>
            </View>
                
        </TouchableOpacity>
        
    </>


   
  )
}

export default RestaurantCard
const styles = StyleSheet.create({
    contain:{
        marginTop:20,
        paddingLeft: 20,
    },
    imgStyle : {
        height: 140,
        width: 350,
        resizeMode: 'cover',
    }
})