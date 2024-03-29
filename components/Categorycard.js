import { View,StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native'

const Categorycard = ({img,name,details}) => {
  const navigation = useNavigation();
  return (
    
        <ScrollView
          contentContainerStyle = {{paddingHorizontal:15, paddingTop:10}}
          horizontal
          showsHorizontalScrollIndicator={false}
           
        >
          
          <TouchableOpacity 
            style = {styles.container}
            onPress ={()=> {
              navigation.navigate('Restaurant',{details,name})
            }}
          >
            <Image
              style= {styles.imgStyle}
              source={img}
            />
            <Text>{name}</Text>
          </TouchableOpacity>
        
          
        </ScrollView>
      
  
  )
}

export default Categorycard

const styles = StyleSheet.create({
    container : {
        borderColor : '#fff',
        borderWidth : 1,
        borderStyle: 'dashed',
        width: 150,
        height: 150,
        borderRadius: 150,
        marginRight: 10,
        backgroundColor: 'yellow',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgStyle : {
        height : 20,
        width : 20,
        borderRadius: 10,

    },
    textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    }
})