import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const Discord = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground style={{height:height*1,}} source={require('./Image/bg.jpg')}> 
        <View style={{height: height * 1}}>
          
          <View style={{height: 25}}></View>
          <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
      <Text
                  style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
                  ←
                </Text>
      </TouchableOpacity>
    
          <View
            style={{
              height: height * 0.25,
              width: width / 1,
            }}>
            <View>
              <Text style={{alignSelf: 'center', fontSize: 25}}>Discord</Text>
            </View>
            </View>
          </View>
          <View
            style={{
              height: height / 2.55,
              backgroundColor: 'white',
              width: width / 1.15,
              alignSelf: 'center',
              borderRadius: 10,
            }}>
            <View style={{height: 15}}></View>
            <View style={{alignSelf: 'center'}}>
              <Image style={styles.image} source={require('./Image/a.png')} />
            </View>
            <View>
              <View style={{height: 15}}></View>
              <Text style={{alignSelf: 'center', fontSize: 20}}>
                You have bin invited to join
              </Text>
            </View>
            <View>
              <View style={{height: 15}}></View>
              <Text
                style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold'}}>
                Amit Technical
              </Text>
            </View>
            <View style={{height: 25}}></View>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <View>
                <View style={{height: 10}}></View>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  . Online
                </Text>
              </View>
              <View style={{width: 45}}></View>

              <View>
                <View style={{height: 10}}></View>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  .Members
                </Text>
              </View>
            </View>
            <View style={{height: 40}}></View>
            <View >
              <TouchableOpacity onPress={() => navigation.navigate('Account')}>  
              <Text
                style={{
                  fontSize: 20,
              
                    borderWidth: 2,
                    borderRadius: 10,
                    borderColor: 'red',
                    height: 30,
                    width:width/1.2,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    backgroundColor:'yellow'
                }}>
                Accept Invite
              </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discord;

const styles = StyleSheet.create({
  image: {
    borderRadius: 100,
    height: 50,
    width: 50,
  },
});
