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

const Screen3 = ({ navigation}) => {
  return (
    <SafeAreaView >
      <ScrollView>
      <View style={{backgroundColor: 'rgb(41,6,83)'}}>
      <View style={styles.Maincontainer}>
        <View style={{height: height * 0.06}}></View>
        <View style={styles.Vie1}>
        <TouchableOpacity  onPress={() => navigation.navigate('Screen2')}>
       <Text style={styles.txt1}>←</Text>
       </TouchableOpacity>
          <View style={{width: width / 1.75, alignSelf: 'center'}}>
            <Text style={styles.txt}>Deposit</Text>
          </View>
        </View>
        <View style={styles.img}>
          <Image
            source={require('../Assests/Image/crown.png')}
            style={styles.img}></Image>
        </View>
        <View style={{height: height * 0.04}}></View>
        <View
          style={{
            borderColor: 'grey',
            borderWidth: 2,
            height: height * 0.11,
            width: width / 1.2,
            alignSelf: 'center',
          }}>
          <View style={{width: width / 1.12}}>
            <View style={{height: height * 0.024}}></View>
            <View
              style={{
                width: width / 1.2,
                alignSelf: 'center',
                flexDirection: 'row',
              }}>
             <TouchableOpacity>
             <Avatar.Icon
                size={25}
                icon="check"
                color="white"
                backgroundColor="rgb(120,183,55)"
              />
             </TouchableOpacity>
              {/* <Text style={styles.txt2}>
                {' '}
                   You're Registered Almost there.Make
              </Text> */}
              <Text style={styles.txt2}>   You're Registered Almost there.Make</Text>
            </View>
            <View style={{width: width / 1.45, alignSelf: 'center'}}>
              <Text style={styles.txt2}>   A Deposit And Get Started.</Text>
            </View>
          </View>
        </View>

        <View style={{height: height * 0.04}}></View>

        <View style={styles.vie8}>
          <Text style={styles.txt7}>Choose One</Text>
        </View>
        <View style={{height: height * 0.03}}></View>
        <View style={styles.vie11}>
          <View style={styles.vie2}>
            <View style={styles.vie3}>
             <TouchableOpacity>
             <View style={styles.vie4}>
                <View style={styles.vie5}>
                  <Avatar.Icon
                    size={35}
                    icon="bank"
                    color="white"
                    backgroundColor="grey"
                  />
                </View>
                <View style={styles.vie5}>
                  <Text style={styles.txt4}>Online Banking</Text>
                </View>
              </View>
             </TouchableOpacity>
            </View>
            <View style={styles.vie3}>
            {/* <View style={styles.vie5}>
            <Ionicons name="paypal" size={60}  style={styles.txt6}/>
            </View> */}
            <TouchableOpacity>
            <View style={styles.vie6}>
                    <Image source={require('../Assests/Image/pay.png')}>

                    </Image>
                </View>
            </TouchableOpacity>
            </View>
          </View>
          <View style={{height: height * 0.024}}></View>
          <View style={styles.vie2}>
            <View style={styles.vie3}>
                <TouchableOpacity>
                <View style={styles.vie6}>
                    <Image source={require('../Assests/Image/d.png')}>

                    </Image>
                </View>
                </TouchableOpacity>
            
                
            </View>
            <View style={styles.vie3}>
            <TouchableOpacity  onPress={() => navigation.navigate('Screen4')}>
            <View style={styles.vie6}>
                    <Image source={require('../Assests/Image/cr.png')}>

                    </Image>
                </View>
            </TouchableOpacity>
            
            </View>
          </View>
        </View>
      </View>
    </View>
      </ScrollView>
     </SafeAreaView>
  );
};

export default Screen3;

const styles = StyleSheet.create({
  Maincontainer: {
    height: height * 1,
    backgroundColor: 'rgb(41,6,83)',
    width: width / 1.1,
    alignSelf: 'center',
  },
  Vie1: {
    width: width / 1.1,
    //  backgroundColor:'red',
    height: height * 0.05,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },

  txt1: {
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    fontSize: 20,
  },
  img: {
    alignSelf: 'center',
    height: height * 0.09,
    width: width / 1.2,
  },
  txt2: {
    color: 'white',
  },

  vie8: {
    // backgroundColor:'red',
    height: height * 0.04,
    width: width / 1.2,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  txt7: {
    color: 'white',
    fontSize: 18,
  },

  vie11: {
    // backgroundColor: 'red',
    height: height * 0.15,
    width: width / 1.25,
    alignSelf: 'center',

    justifyContent: 'center',

    borderColor: 'white',
  },
  vie2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vie3: {
    // backgroundColor: '(246,246,246)',
    backgroundColor:'white',
    height: height * 0.075,
    width: width / 2.59,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
  },
  vie4: {
    //backgroundColor: 'red',
    height: height * 0.06,
    width: width / 3,

    borderColor: 'white',
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',

    flexDirection: 'row',
  },
  vie5: {
    justifyContent: 'center',
  },
  txt6:{
      justifyContent:'center',
      alignSelf:'center',
     color:'white',
      backgroundColor:'blue',
     


  },
  vie6:{
     
      justifyContent:'center',
      alignSelf:'center'
     
      
    
  },
  vie7:{
     // backgroundColor:'red',
      height:height*0.05,
      width:width*0.18,
      justifyContent:'center'
  },
  txt8:{
      fontWeight:'bold',
      color:'red',
      fontSize:30,
      textAlign:'center'
    
  },
  vie9:{
      borderRadius:100,
      backgroundColor:'(255,183,56)',
      height:height*0.045,
      width:width*0.1,
      justifyContent:'center'
  },
  txt9:{
      color:'grey',
      fontSize:20
  }
});
