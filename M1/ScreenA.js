import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
//import Icon from 'react-native-vector-icons/AntDesign';
//import Icon from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/AntDesign';

// import {TextInput} from 'react-native-paper';
import {Avatar} from 'react-native-paper';
const {height, width} = Dimensions.get('window');

const ScreenA = () => {
  return (
    <View style={styles.Maincontainer}>
      <View style={{height: height * 0.07}}></View>
      <View style={styles.container1}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
          <View style={styles.vie2}>
            <Text style={styles.txt}>←</Text>
          </View>
          </TouchableOpacity>
          <View style={styles.vie3}>
            <Text style={styles.txt1}>WithdrawbCoin</Text>
          </View>
          <Ionicons name="qrcode" size={30} color="white" />
        </View>
      </View>
      <View style={{height: height * 0.03}}></View>
      <View style={styles.container2}>
     
        <View style={styles.con1}>
        <View style={{height: height * 0.03}}></View>
        <Text style={styles.txt3}>Bitcoin</Text>
        <View style={{height: height * 0.02}}></View>
        <Text  style={styles.txt4}>$ 11,760.93</Text>
        <View style={{height: height * 0.02}}></View>
        <Text  style={styles.txt5}>0.8934 BTC</Text>

        </View>  
        <View style={{height: height * 0.02}}></View>
      <View style={styles.vie4}>
      <View>
            <Text style={styles.txt6}>Withdraw Bitcoin</Text>
        </View>
        <View style={{height: height * 0.02}}></View>
        <View>
            <Text>Enter the Details of the Wallet you would like </Text>
            <Text>to receive to</Text>
        </View>
        <View style={{height: height * 0.07}}></View>
      <View style={{flexDirection:'row'}}>
         <View style={styles.vie5}>
         <Text>
              Max Withdrawable Amount:   0.8914 BTC** 
          </Text>
         </View>
        <View style={styles.vie6}>
        <Ionicons name="infocirlceo" size={20} color="white"  />
        </View>
      </View>
      <View style={{height: height * 0.05}}></View>
      <View style={styles.vie7}>
          <TextInput placeholder="" placeholderTextColor={'black'}></TextInput>

      </View>

    

      </View>
     
        <View style={{height: height * 0.05}}></View>
      <TouchableOpacity>
      <View style={styles.container7}>
        <Text style={styles.txt4}>Continue</Text>
      </View>
      </TouchableOpacity>
 
          
      </View>
      
    </View>
  );
};

export default ScreenA;

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
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  container2: {
    height: height * 1,
  
    backgroundColor: 'white',
  },

  txt3:{
    color:'white',
    textAlign:'center',
    fontSize:18,
  },
 
  container7: {
    width: width /1.8,
   backgroundColor:'rgb(75,15,135)',
    height: height * 0.065,
    alignSelf: 'center',
    borderRadius: 100,
    borderColor: 'grey',
    borderWidth: 1,
    justifyContent: 'center',

  },
  txt4: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  txt5:{
      color:'white',
      textAlign:'center'

  },
 
  con1:{
      backgroundColor:'green',
      height:height*0.18,
     // width:width/1.2,
     // alignSelf:'center',
      justifyContent:'center',
      
  },
  vie4:{
      width:width/1.1,
      alignSelf:'center'
  },
  txt6:{
      color:'black',
      fontSize:22,
      fontWeight:'bold'
  },
  vie5:{
    width:width/1.2,
    alignSelf:'center'
},
vie6:{
    backgroundColor:'grey',
    borderRadius:100
},
vie7:{
   // backgroundColor:'red',
    height:height*0.07,
    width:width/1.2,
    alignSelf:'center',
    borderRadius:10,
    borderWidth:1,
    borderBottomWidth:2,
    borderColor:'grey',
    justifyContent:'center'
}
});
