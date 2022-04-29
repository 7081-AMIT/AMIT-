import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import { Title } from 'react-native-paper';
const{height,width}=Dimensions.get('window');

const Onbording1 = ({navigation}) => {
    return (

         <Onboarding
         onDone={()=>navigation.navigate('Login1')}
         onSkip={()=>navigation.navigate('Login1')}

  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('../ASSETS/Image/5.jpg')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
        backgroundColor: '#fff',
        image: <Image source={require('../ASSETS/Image/3.jpg')}  />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      }, {
        backgroundColor: '#fff',
        image: <Image source={require('../ASSETS/Image/2.jpg')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../ASSETS/Image/3.jpg')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
    
  ]}
/>
        
     
    
          
     
    )
}

export default Onbording1

const styles = StyleSheet.create({
    img:{
        height:height*0.5,
        width:width*0.9
    }
})
