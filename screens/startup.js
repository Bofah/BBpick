import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';


registerForPushNotificationsAsync = async () => {
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
    }
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
    this.setState({ expoPushToken: token });
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
  };

const Startup = ({navigation}) => {
    const buttonHandler = () =>{
        navigation.navigate("login")
    }

    const buttonHandler1 = () =>{
      navigation.navigate("signup")
    }
  return (
    <View style={styles.container}>
    <View style={{flex:2,justifyContent:'center',marginTop:10}}>
        {/* <Text style={{color:'white',fontSize:100}}>BBPick</Text> */}
        <Image source={require('../assets/logo.png')} />
      </View>

      <View style={{flex:4}}>
        <View style={{flex:1, flexDirection:'row',justifyContent:'space-evenly'}}>
          <Image style={{borderRadius: 11,marginRight:6,height:110, width:200}} 
            source={require('../assets/bbpickimg-1.png')}
          />
          <Image style={{borderRadius: 11,height:110, width:200}}
            source={require('../assets/bbpickimg-2.png')}
          />
        </View>
        <View style={{flex:1, flexDirection:'row',justifyContent:'space-evenly'}}>
          <Image style={{ borderRadius: 11,resizeMode:'cover',marginRight:5,height:110, width:130}} 
              source={require('../assets/bbpickimg-3.png')}
          />
          <Image style={{borderRadius: 11,height:110,resizeMode:'cover',marginRight:5, width:130}} 
              source={require('../assets/bbpickimg-4.png')}
          />
          <Image style={{borderRadius: 11,height:110,resizeMode:'cover', width:130}} 
              source={require('../assets/bbpickimg-5.png')}
          />
        </View>
        <View style={{flex:1, flexDirection:'row',justifyContent:'space-evenly'}}>
          <Image style={{resizeMode:'cover',marginRight:6, borderRadius: 11,height:110, width:200}} 
              source={require('../assets/bbpickimg-6.png')}
          />
          <Image style={{borderRadius: 11,resizeMode:'cover',height:110, width:200}} 
              source={require('../assets/bbpickimg-7.png')}
          />
        </View>
      </View>

      <View style={{flex:2, justifyContent:'center'}}>
        <Text style={{fontSize:16, textAlign: 'center', color:'white', paddingHorizontal: 15}}>
          Hey guys! This is just a freestyle . I will make changes with something catchy later on. Gratias tibi
          </Text>
      </View>

      <View style={{flex:1, }}>
          <TouchableOpacity style={styles.getstartedButton}
            onPress ={buttonHandler1}
          >
            <Text style={styles.getstartedTextStyle}>Get Started</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.loginButton}
            onPress = {buttonHandler}
          >
            <Text style={styles.loginTextStyle}>Log in</Text>
          </TouchableOpacity >        
      </View>

      </View>
  )
}

export default Startup


const styles = StyleSheet.create({
    container: {
      paddingVertical:40,
      flex:1,
      backgroundColor: '#290038',
      alignItems: 'center',
      justifyContent: 'center',
    },
    getstartedButton: {
      backgroundColor: '#F5AF22',
      width:312,
      height:48,
      borderRadius:14,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10
  
    },
    loginButton: {
      width:312,
      height:48,
      borderRadius:14,
      borderStyle: 'solid',
      borderColor: '#F5AF22',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    getstartedTextStyle: {
      fontWeight: '500',
      fontSize: 16,
      fontStyle: 'normal',
      color: '#290038'
    },
    loginTextStyle: {
      fontWeight: '500',
      fontSize: 16,
      fontStyle: 'normal',
      color: '#F5AF22'
    }
  });
  