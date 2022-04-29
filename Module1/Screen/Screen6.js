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

const Screen6 = ({navigation}) => {
  return (
    <SafeAreaView style={{height:height*1}}>
     <ScrollView>
     <View style={styles.Maincontainer}>
      <View style={{height: height * 0.07}}></View>
      <View style={styles.container1}>
        <View style={{flexDirection: 'row'}}>
        <TouchableOpacity  onPress={() => navigation.navigate('Screen5')}>
            <View style={styles.vie2}>
              <Text style={styles.txt}>←</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.vie3}>
            <Text style={styles.txt1}>Change Password</Text>
          </View>
        </View>
      </View>
      <View style={{height: height * 0.03}}></View>
      <View style={styles.container2}>
      
        <View style={styles.img}>
          <Image
            source={require('../Assests/Image/le1.png')}
            style={styles.img1}
          />
        </View>
        <View style={{height: height * 0.02}}></View>
        <View style={styles.container3}>
          <Text style={styles.txt2}>Create New Password </Text>
        </View>
        <View style={{height: height * 0.01}}></View>
        <View style={styles.container3}>
          <Text style={styles.txt3}>
            Enter your new password below, we're just
          </Text>
          <Text style={styles.txt3}>being extra safe</Text>
        </View>
        <View style={{height: height * 0.03}}></View>
        <View style={styles.container4}>
          <View style={styles.container6}>
            <View style={styles.vie5}>
              <TextInput
                placeholder="Password"
                placeholderTextColor={'grey'}
                maxLength={20}
                style={styles.input}></TextInput>
            </View>
            <TouchableOpacity>
            <Avatar.Icon
              size={30}
              icon="eye"
              color="grey"
              backgroundColor="white"
            />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{height: height * 0.023}}></View>
        <View style={styles.container4}>
          <View style={styles.container6}>
            <View style={styles.vie5}>
              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor={'grey'}
                maxLength={20}
                style={styles.input}></TextInput>
            </View>
           <TouchableOpacity>
           <Avatar.Icon
              size={30}
              icon="eye"
              color="grey"
              backgroundColor="white"
            />
           </TouchableOpacity>
          </View>
        </View>
        <View style={{height: height * 0.062}}></View>
       
        <TouchableOpacity  onPress={() => navigation.navigate('Screen7')}>
       <View style={styles.container7}>
          <Text style={styles.txt4}>Change Password</Text>
        </View>
       </TouchableOpacity>
       
       
      </View>
    </View>
     </ScrollView>
   </SafeAreaView>
  );
};

export default Screen6;

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
    height: height * 0.22,
  },
  container3: {
    width: width / 1.12,
    //backgroundColor:'red',
    height: height * 0.045,
    alignSelf: 'center',
  },
  container4: {
    width: width / 1.2,
    // backgroundColor:'red',
    height: height * 0.075,
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1,
    justifyContent: 'center',
    borderBottomWidth: 3,
  },
  container5: {
    width: width / 1.3,
    //backgroundColor:'red',
    // height: height * 0.056,
    alignSelf: 'center',
  },
  vie4: {
    //backgroundColor: 'red',
    width: width / 1.5,
    // alignSelf: 'center',
    height: height * 0.055,
  },
  container6: {
    width: width / 1.4,
    //  backgroundColor:'red',
    //height: height * 0.056,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  vie5: {
    // backgroundColor:'green',
    width: width / 1.5,
    height: height * 0.025,
    justifyContent: 'center',
    alignSelf: 'center',
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
  txt8: {
    textDecorationLine: 'underline',
    color: 'rgb(75,15,135)',
    fontWeight: 'bold',
    fontSize: 15,
  },
  input:{
      color:'black',
      fontSize:19
  }
});
