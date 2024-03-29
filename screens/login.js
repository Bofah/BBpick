import React, {useState} from 'react'
import {StyleSheet, View, Text, Modal, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CallCountries from '../components/callCountries';

const Login = ({navigation}) => {
  const [isVisible, setisVisible] = useState(false)

  const modalVisibility = (bool) => {
    setisVisible(bool)
  }

 
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', flexDirection:'row', width:"95%",}}>
        <TouchableOpacity onPress={()=>navigation.pop(1)} style={{ marginRight:30,alignItems:'center' }}>
        <AntDesign name="arrowleft" size={30} color='#F5AF22' />
        </TouchableOpacity>
        <View>
          <Text style={{fontSize: 25}}>Enter your number</Text>
        </View>
      </View>
    
      <View style={{flex:1, justifyContent: 'space-between', width:'95%'}}>
        <View style={{marginTop:100}}>
          <View style={{}}>
            <Text style={styles.textEditor}>Phone Number</Text>
          </View>
        
          <View style={styles.numberInput}>
            <TouchableOpacity onPress={()=> modalVisibility(true)} style={{flexDirection: 'row'}}>
              <Text style={{width:"90%", paddingVertical:5}}>Country</Text>
              <AntDesign name="down" size={20} color='#F5AF22' style={{alignSelf:'flex-end'}} />
            </TouchableOpacity>
            <Modal
              animationType='none'
              // transparent= {true}
              visible= {isVisible}
              onRequestClose = {()=> {modalVisibility(false)}}
            >
                <CallCountries  />
    
            </Modal>
          </View>
          <View style={{marginTop: 80}}>
            <Text >We will send you an SMS code to verify your number</Text>
          </View>
        </View>
        
          
        <View>
          <TouchableOpacity 
            style={styles.continueButton}
            onPress={()=>navigation.navigate('tabRouting')}
          >
            <Text>Continue</Text>
          </TouchableOpacity>
        </View>
      
      </View>
      
      
    </View>
  )
}

export default Login
const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingVertical: 50,
    paddingHorizontal: 20,
    flex:1,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf:'center',
    width:'100%'
  
  },
  numberInput: {
    padding:5,
    position:'absolute',
    width: '100%',
    height: 48,
    marginTop: 25,
    borderRadius:8,
    borderStyle: 'solid',
    borderColor: '#F5AF22',
    borderWidth: 1,
  },
  textEditor: {
    color: '#757585',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12,
  
    
  },
  continueButton: {
    backgroundColor: '#F5AF22',
    width:"100%",
    height:48,
    borderRadius:14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  continueText: {
    fontWeight: '500',
    fontSize: 16,
    fontStyle: 'normal',
    color: '#290038'
  }

})