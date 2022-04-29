import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';

const ScreenO = () => {
  return (
   
<Onboarding
// onDone={()=> navigation.navigate('Splash')}
// onSkip={()=> navigation.navigate('Login')}
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('../Assests/Image/Im.png')} style={styles.image} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    
    {
      backgroundColor: '#fff',
      image: <Image source={require('../Assests/Image/Im.png')} style={styles.image} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    }, 
    
  ]}
/>
  )
}

export default ScreenO

const styles = StyleSheet.create({
image:{
height:700,
width:400,



}




})