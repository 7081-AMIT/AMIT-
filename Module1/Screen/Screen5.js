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
import Ionicons from 'react-native-vector-icons/EvilIcons';

// import {TextInput} from 'react-native-paper';
import {Avatar} from 'react-native-paper';
//import { SafeAreaView } from 'react-native-safe-area-context';
const {height, width} = Dimensions.get('window');

const Screen5 = ({navigation}) => {
  return (
   <SafeAreaView style={{height:height*1}}>
     <ScrollView>
     <View style={styles.Maincontainer}>
      <View style={{height: height * 0.07}}></View>
      <View style={styles.container1}>
        <View style={{flexDirection: 'row'}}>
        <TouchableOpacity  onPress={() => navigation.navigate('Screen4')}>
            <View style={styles.vie2}>
              <Text style={styles.txt}>←</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.vie3}>
            <Text style={styles.txt1}>Reset Password</Text>
          </View>
        </View>
      </View>
      <View style={{height: height * 0.03}}></View>
      <View style={styles.container2}>
        <View style={{height: height * 0.03}}></View>
        <View style={styles.img}>
          <Image
            source={require('../Assests/Image/l2.png')} style={styles.img2}
          
          />
        </View>
        <View style={{height: height * 0.06}}></View>
        <View style={styles.container3}>
          <Text style={styles.txt2}>Verification Code</Text>
        </View>
        <View style={{height: height * 0.01}}></View>
        <View style={styles.container5}>
          <Text style={styles.txt3}>
            We have sent you a verification code to
          </Text>
          <Text style={styles.txt3}>your registered email ID</Text>
          <View style={{height: height * 0.035}}></View>
          <View > 
            <View>
              <Text style={styles.txt5}>Enter Code</Text>
            </View>

            <View style={{height: height * 0.021}}></View>
            <View style={styles.container4}>
              <View style={styles.vie6}>
                <View style={styles.vie5}>
                  <TextInput
                    placeholder="2"
                    placeholderTextColor={'black'}
                    maxLength={1}
                    style={styles.input}
                  />
                </View>
                <View style={styles.vie5}>
                  <TextInput
                    placeholder="5"
                    placeholderTextColor={'black'}
                    maxLength={1}
                    style={styles.input}
                  />
                </View>
                <View style={styles.vie5}>
                  <TextInput
                    placeholder="1"
                    placeholderTextColor={'black'}
                    maxLength={1}
                    style={styles.input}
                  />
                </View>
                <View style={styles.vie5}>
                  <TextInput
                    placeholder="8"
                    placeholderTextColor={'black'}
                    maxLength={1}
                    style={styles.input}
                  />
                </View>
                <View style={styles.vie5}>
                  <TextInput
                    placeholder="7"
                    placeholderTextColor={'black'}
                    maxLength={1}
                    style={styles.input}
                  />
                </View>
                <View style={styles.vie5}>
                  <TextInput
                    placeholder="4"
                    placeholderTextColor={'black'}
                    maxLength={1}
                    style={styles.input}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={{height: height * 0.035}}></View>
          <View style={styles.container8}>
            <View style={styles.container9}>
              <Text style={styles.txt8}>
                Please enter valid Verification Code
              </Text>
            </View>

          <TouchableOpacity>
          <Ionicons name="refresh" size={25} color="rgb(94,29,159)" />
          </TouchableOpacity>
            <Text style={styles.txt5}>0:59</Text>
          </View>
        </View>

        <View style={{height: height * 0.04}}></View>
        <TouchableOpacity  onPress={() => navigation.navigate('Screen6')}>
          <View style={styles.container7}>
          <Text style={styles.txt4}>Done</Text>
        </View>
       </TouchableOpacity>
      </View>
    </View>
     </ScrollView>
  </SafeAreaView>
  );
};

export default Screen5;

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
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  container2: {
    height: height * 0.9,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  img: {
    alignSelf: 'center',
    height: height * 0.12,
  },
  img1: {},
  container3: {
    width: width / 1.12,
    //backgroundColor:'red',
    height: height * 0.045,
    alignSelf: 'center',
  },
  container4: {
    width: width / 1.1,
    //backgroundColor:'red',
    height: height * 0.07,
    alignSelf: 'center',

    borderColor: 'grey',
    //borderWidth: 1,
    justifyContent: 'center',
  },

  vie4: {
    //backgroundColor: 'red',
    width: width / 1.5,
    // alignSelf: 'center',
    height: height * 0.055,
  },

  txt2: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  txt3: {
    color: 'grey',
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
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  txt7: {
    fontSize: 14,
  },
  vie5: {
    borderColor: 'red',
    borderWidth: 1,
    height: height * 0.075,
    width: width * 0.122,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
  },
  vie6: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    textAlign: 'center',
    fontSize: 20,
    color: 'red',
   // backgroundColor: 'yellow',
  },
  txt5: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  txt8: {
    color: 'red',
  },
  container8: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container9: {
    //  backgroundColor:'black',
    width: width / 1.4,
  },
  container5:{
     // backgroundColor:'yellow',
      height:height*0.26,
      width:width/1.1,
      alignSelf:'center'
  },
  img2:{
    height:height*0.127,width:width*0.95
  }
});
