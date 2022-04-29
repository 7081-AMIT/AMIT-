import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from 'react-native';
//import Icon from 'react-native-vector-icons/AntDesign';
//import Icon from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Fontisto';

// import {TextInput} from 'react-native-paper';
import {Avatar} from 'react-native-paper';
//import { SafeAreaView } from 'react-native-safe-area-context';
const {height, width} = Dimensions.get('window');

const Screen7 = ({navigation}) => {
  return (
     <SafeAreaView style={{height:height*1}}>
  <ScrollView>
  <View style={styles.Maincontainer}>
      <View style={{height: height * 0.07}}></View>
      <View style={styles.container1}>
        <View style={{flexDirection: 'row'}}>
        <TouchableOpacity  onPress={() => navigation.navigate('Screen6')}>
            <View style={styles.vie2}>
              <Text style={styles.txt}>←</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.vie3}>
            <Text style={styles.txt1}>Change Password</Text>
          </View>
        </View>
      </View>
      <View style={{height: height * 0.04}}></View>
      <View style={styles.container2}>
      <View style={{height: height * 0.045}}></View>
      
        <View style={styles.img}>
          <Image
            source={require('../Assests/Image/Loc.png')}
            style={styles.img1}
          />
        </View>
        <View style={{height: height * 0.02}}></View>
        <View style={styles.container3}>
          <Text style={styles.txt2}>Password Reset Successful </Text>
        </View>
        <View style={{height: height * 0.00}}></View>
        <View style={styles.container3}>
          <Text style={styles.txt3}>
            Password reset has been done Successfully
          </Text>
        </View>
       
     
       
        <View style={{height: height * 0.078}}></View>
        <TouchableOpacity  onPress={() => navigation.navigate('Screen1')}>
     <View style={styles.container7}>
          <Text style={styles.txt4}>Go To Login Page</Text>
        </View>
     </TouchableOpacity>
        <View style={{height: height * 0.025}}></View>
       <TouchableOpacity>
       <View style={styles.container6}>
          <Text style={styles.txt5}>Continue To Account</Text>
        </View>
       </TouchableOpacity>
        
       
       
      </View>
    </View>
  </ScrollView>
 </SafeAreaView>
  );
};

export default Screen7;

const styles = StyleSheet.create({
  Maincontainer: {
    height: height * 1,
    backgroundColor: 'rgb(94,29,159)',
  },
  container1: {
    width: width / 1.1,
    // backgroundColor:'red',
    height: height * 0.05,
    alignSelf: 'center',
  },
  vie2: {
    backgroundColor: 'rgb(122,187,26)',
    height: height * 0.04,
    width: width * 0.08,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
  },
  txt: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },
  vie3: {
    justifyContent: 'center',
    // backgroundColor:'green',
    width: width / 1.3,
    alignSelf: 'center',
  },
  txt1: {
    textAlign: 'center',
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  container2: {
    height: height * 1,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  img: {
    alignSelf: 'center',
    
  },
  img1: {
    height: height * 0.15,
  },
  container3: {
    width: width / 1.12,
    //backgroundColor:'red',
    height: height * 0.045,
    alignSelf: 'center',
  },
  
  
  
  
  
  txt2: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center'
  },
  txt3: {
    color: 'grey',
    textAlign:'center'
  },
  container7: {
    width: width / 1.7,
    backgroundColor: 'rgb(75,15,135)',
    height: height * 0.065,
    alignSelf: 'center',
    borderRadius: 100,
    borderColor: 'grey',
    borderWidth: 1,
    justifyContent: 'center',
  },

  txt4: {
    textAlign: 'center',
    fontSize: 22,
    color: 'white',
   
  },
  container6: {
    width: width / 1.7,
    backgroundColor: 'white',
    height: height * 0.065,
    alignSelf: 'center',
    borderRadius: 100,
    borderColor: 'grey',
    borderWidth: 1,
    justifyContent: 'center',
  },
  txt5: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    
  },
  img2:{
    height:height*1
  }
  
 
  
});
