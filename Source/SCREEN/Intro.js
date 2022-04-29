import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
const {height, width} = Dimensions.get('window');

const Intro = ({navigation}) => {
  return (
    <Onboarding
      onDone={() => navigation.navigate('Splash')}
      onSkip={() => navigation.navigate('Login')}
      titleStyles={{
          color:'white',
          fontFamily:'optima-bold',
          fontSize:45
      }}
      subTitleStyles={{textAlign:'center',width:width/1,height:height*0.35}}
      pages={[
          
                  {
          backgroundColor: 'rgb(94,29,159)',
          image: (
            <Image
              source={require('../ASSETS/Image/ON.png')}
              style={styles.image}
            />
          ),
          title: 'Professionals you can trust',
          subtitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed ex tincidunt, ornare lorem non, lacinia massa. Pellentesque rutrum nibh eget risus finibus imperdiet.Proin suscipit, ante quis pretium rutrum, mauris enim vulputate metus, quis mattis dolor elit at mi.  ',      },

       
            {
                backgroundColor: 'rgb(94,29,159)',
                image: (
                  <Image
                    source={require('../ASSETS/Image/ON.png')}
                    style={styles.image}
                  />
                ),
                title: 'Professionals you can trust',
                subtitle:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed ex tincidunt, ornare lorem non, lacinia massa. Pellentesque rutrum nibh eget risus finibus imperdiet.Proin suscipit, ante quis pretium rutrum, mauris enim vulputate metus, quis mattis dolor elit at mi.  ',      },


                  {
                    backgroundColor: 'rgb(94,29,159)',
                    image: (
                      <Image
                        source={require('../ASSETS/Image/ON.png')}
                        style={styles.image}
                      />
                    ),
                    title: 'Professionals you can trust',
                    subtitle:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed ex tincidunt, ornare lorem non, lacinia massa. Pellentesque rutrum nibh eget risus finibus imperdiet.Proin suscipit, ante quis pretium rutrum, mauris enim vulputate metus, quis mattis dolor elit at mi.  ',      },

                  {
                    backgroundColor: 'rgb(94,29,159)',
                    image: (
                      <Image
                        source={require('../ASSETS/Image/ON.png')}
                        style={styles.image}
                      />
                    ),
                    title: 'Professionals you can trust',
                    subtitle:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed ex tincidunt, ornare lorem non, lacinia massa. Pellentesque rutrum nibh eget risus finibus imperdiet.Proin suscipit, ante quis pretium rutrum, mauris enim vulputate metus, quis mattis dolor elit at mi.  ',      },

                  {
                    backgroundColor: 'rgb(94,29,159)',
                    image: (
                      <Image
                        source={require('../ASSETS/Image/ON.png')}
                        style={styles.image}
                      />
                    ),
                    title: 'Professionals you can trust',
                    subtitle:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed ex tincidunt, ornare lorem non, lacinia massa. Pellentesque rutrum nibh eget risus finibus imperdiet.Proin suscipit, ante quis pretium rutrum, mauris enim vulputate metus, quis mattis dolor elit at mi.  ',      },
      ]}
    />
  );
};

export default Intro;

const styles = StyleSheet.create({
  image: {
    // height:height*0.2,
    // width:width*1,
  },
});
