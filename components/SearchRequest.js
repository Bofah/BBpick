import React, {useState} from 'react';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import {
    StyleSheet, 
    View,
    Dimensions,
    TouchableOpacity,
    Text, 
    Modal,
    TextInput,
         } from 'react-native';

export default function SearchRequest (){
    
    return (
        <View style={styles.contain}>
            <View style={styles.searchInput} >
                <Ionicons name="search" size={24} color = '#A9A9B8' />
                <TextInput style={{marginLeft:5, fontSize:16, color:'#A9A9B8', width:'70%'}} 
                    placeholder='search for your anything'/>
            </View> 
            <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}} >
                <AntDesign name="checkcircleo" size={24} color="#fff" />
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    contain: {
        height:40,
        flexDirection:'row',
        alignItems: 'center',
        width:'100%'

    },
    searchInput: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'white',
        opacity: 0.5,
        borderRadius:8,
        paddingLeft: 20,
        width: "85%",
        height:40,
        marginVertical:10
    
    }
})