import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
//import Icon from 'react-native-vector-icons/AntDesign';
//import Icon from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';

// import {TextInput} from 'react-native-paper';
import {Avatar} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
const {height, width} = Dimensions.get('window');

const ScreenR = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [toggleCheckBox1, setToggleCheckBox1] = useState(true);
  return (
   <SafeAreaView>
     <ScrollView>
     <View>
      <View style={styles.main}>
        <View style={{height: height * 0.05}}></View>
        <View style={styles.mainc}>
          <View style={styles.left}>
            <Ionicons name="left" size={20} color="white" />
          </View>
          <View
            style={{
              flexDirection: 'row',
              //backgroundColor:'yellow',
            }}>
            <View style={styles.img1}>
              <Image
                source={require('../Assests/Image/lo.png')}
                style={styles.img1}></Image>
            </View>
            <View style={styles.left}>
              <Text style={styles.txt1}>SHARE</Text>
            </View>
            <View style={styles.left}>
              <Text style={styles.txt2}>CHING</Text>
            </View>
          </View>
          <View
            style={{flexDirection: 'row', backgroundColor: 'yellow'}}></View>
        </View>
        <View style={{height: height * 0.05}}></View>
        <View style={styles.txt3}>
          <View>
            <Text style={styles.txt4}>Getting Started</Text>
          </View>
          <View>
            <Text style={styles.txt5}>Create An accounr to continue and </Text>
          </View>
          <View>
            <Text style={styles.txt5}>connect with the people</Text>
          </View>
        </View>
        <View style={{height: height * 0.05}}></View>
        <View style={styles.vie1}>
          <View style={styles.vie2}>
            <View style={{flexDirection: 'row'}}>
              <Avatar.Icon
                size={35}
                icon="email"
                color="white"
                backgroundColor="grey"
              />
              <Text style={styles.txt6}>|</Text>
              <TextInput
                placeholder="   Enter your email"
                placeholderTextColor={'white'}></TextInput>
            </View>
          </View>
        </View>
        <View style={{height: height * 0.025}}></View>
        <View style={styles.vie1}>
          <View style={styles.vie2}>
            <View style={{flexDirection: 'row'}}>
              <Ionicons name="man" size={25} color="white" />
              <Text style={styles.txt6}> |</Text>
              <TextInput
                placeholder="   Your name"
                placeholderTextColor={'white'}></TextInput>
            </View>
          </View>
        </View>
        <View style={{height: height * 0.025}}></View>
        <View style={styles.vie1}>
          <View style={styles.vie2}>
            <View style={{flexDirection: 'row'}}>
              <Avatar.Icon
                size={35}
                icon="lock"
                color="white"
                backgroundColor="grey"
              />
              <Text style={styles.txt6}>|</Text>
              <TextInput
                placeholder="   Create password"
                placeholderTextColor={'white'}></TextInput>
            </View>
          </View>
        </View>
        <View style={{height: height * 0.025}}></View>
        <View style={styles.vie1}>
          <View style={styles.vie2}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TextInput
                placeholder="   DD/MM/YY"
                placeholderTextColor={'white'}></TextInput>
              <Ionicons name="calendar" size={20} color="white" />
            </View>
          </View>
        </View>
        <View style={{height: height * 0.05}}></View>
        <View style={styles.chek}>
            <View>
            <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={newValue => setToggleCheckBox(newValue)}
                  />
            </View>

          <View style={styles.txt7}>
              
            <Text style={styles.txt7}>Male</Text>
          </View>
          <View >
          <CheckBox
                    disabled={true}
                    value={toggleCheckBox1}
                    onValueChange={newValue => setToggleCheckBox1(newValue)}
                  />
          </View>

          <View style={styles.txt7}>
         
            <Text style={styles.txt7}>Female</Text>
          </View>
        </View>
        <View style={{height: height * 0.04}}></View>
       <TouchableOpacity>
       <View style={styles.vie3}>
            <Text style={styles.txt8}>Sign Up </Text>
        </View>
       </TouchableOpacity>
        <View style={{height: height * 0.04}}></View>
        <View style={styles.txt9}> 
            <View>
                <Text style={styles.txt12} >If you have already registerd ? </Text>
            </View>
            <View >
                <Text style={styles.txt11}>Login</Text>
            </View>

        </View>
      </View>
    </View>
     </ScrollView>
   </SafeAreaView>
  );
};

export default ScreenR;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black',
    height: height * 1,
  },
  mainc: {
    width: width / 1.1,
    alignSelf: 'center',
  //  backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img1: {
    borderRadius: 100,
    height: height * 0.07,
    width: width * 0.15,
   // backgroundColor: 'red',
  },
  left: {
    alignSelf: 'center',
  },
  txt1: {
    color: 'pink',
    fontSize: 20,
  },
  txt2: {
    color: 'white',
    fontSize: 20,
  },
  txt3: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  txt4: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'white',
  },
  txt5: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'white',
  },
  vie1: {
    backgroundColor: 'grey',
    height: height * 0.07,
    width: width / 1.1,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    borderWidth: 1,
  },
  vie2: {
    backgroundColor: 'grey',
    height: height * 0.06,
    width: width / 1.12,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  txt6: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 25,
    color: 'white',
  },
  chek:{
      flexDirection:'row',
      width:width/1.5,
      
      justifyContent:'space-between',
      alignSelf:'center',
      
  },
  txt7:{
      alignSelf:'center',
      justifyContent:'center',
      textAlign:'center',
      color:'white'
  },
  vie3:{
      backgroundColor:'#F5317F',
      height:height*0.065,
      width:width/1.2,
      alignSelf:'center',
      borderRadius:10,
      justifyContent:'center'

  },
  txt8:{
      textAlign:'center',
    fontSize:20,
    color:'white'
  },
  txt9:{
      
      justifyContent:'center',
      flexDirection:'row',
      
  },
  txt11:{
      color:'#F5317F',
      
  },
  txt12:{
      color:'white'
  }
});
